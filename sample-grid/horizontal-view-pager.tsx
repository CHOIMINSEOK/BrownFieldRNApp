import React, {
    ForwardedRef,
    ReactNode,
    RefObject,
    forwardRef,
    useCallback,
    useState,
  } from 'react';
  import {
    FlatList,
    FlatListProps,
    LayoutChangeEvent,
    Platform,
    View,
    ViewToken,
  } from 'react-native';
  import ReAnimated from 'react-native-reanimated';
import { isEmpty, isNonNullish } from 'remeda';
  
  export type HorizontalViewPagerProps<T> = {
    onIndexChanged?: (offset: number) => void;
  } & FlatListProps<T>;
  
  function HorizontalViewPagerInner<T>(
    {
      data,
      renderItem,
      keyExtractor,
      initialNumToRender,
      initialScrollIndex,
      onIndexChanged,
      onScrollToIndexFailed,
      onScrollBeginDrag,
    }: HorizontalViewPagerProps<T>,
    ref?: ForwardedRef<FlatList<T>>
  ) {
    const [contentWidth, setContentWidth] = useState(0);
    const [contentHeight, setContentHeight] = useState(0);
  
    const handleLayout = (event: LayoutChangeEvent) => {
      const { width, height } = event.nativeEvent.layout;
      setContentWidth(width);
      setContentHeight(height);
  
      if (initialScrollIndex && Platform.OS === 'android') {
        // There is an intermittent issue where initialScrollIndex fails to work on Android.
        // To fix this, we use setTimeout to attempt scrolling after the first item is rendered.
        // scrollToOffset is more stable than scrollToIndex.
        setTimeout(() => {
          (ref as RefObject<FlatList>)?.current?.scrollToOffset({
            offset: width * initialScrollIndex,
            animated: false,
          });
        }, 100);
      }
    };

    const handleViewableItemsChanged = useCallback(
      ({ viewableItems }: { viewableItems: ViewToken<T>[] }) => {
        if (onIndexChanged && !isEmpty(viewableItems) && isNonNullish(viewableItems[0].index)) {
          onIndexChanged(viewableItems[0].index as number);
        }
      },
      [onIndexChanged]
    );
  
    return (
      <ReAnimated.FlatList
        ref={ref}
        data={data}
        renderItem={item => {
          return (
            <View style={{ width: contentWidth, height: contentHeight }}>{renderItem?.(item)}</View>
          );
        }}
        keyExtractor={keyExtractor}
        snapToAlignment="start"
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        overScrollMode="never"
        onLayout={handleLayout}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 100,
        }}
        getItemLayout={(_, index) => {
          return {
            length: contentWidth,
            offset: contentWidth * index,
            index,
          };
        }}
        maintainVisibleContentPosition={{
          minIndexForVisible: 0,
          autoscrollToTopThreshold: 10,
        }}
        onViewableItemsChanged={handleViewableItemsChanged}
        initialNumToRender={initialNumToRender}
        initialScrollIndex={initialScrollIndex}
        onScrollToIndexFailed={onScrollToIndexFailed}
        onScrollBeginDrag={onScrollBeginDrag}
      />
    );
  }
  
  const HorizontalViewPagerWithRef = forwardRef(HorizontalViewPagerInner);
  
  export const HorizontalViewPager = HorizontalViewPagerWithRef as <T>(
    props: HorizontalViewPagerProps<T> & { ref?: ForwardedRef<FlatList<T>> }
  ) => ReactNode;
  