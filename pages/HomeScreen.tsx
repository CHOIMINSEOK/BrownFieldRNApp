import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import React, { useState } from "react";
import { View, Button, Text } from "react-native";
import { GridItem, GridItemType } from "../sample-grid/grid-model";
import { SampleGridBottomSheet } from "../sample-grid/sample-grid-bottom-sheet";
import { initialSelectedItemTypeA, initialSelectedItemTypeB, initialSelectedItemTypeC } from "../sample-grid/mock-data";

export const HomeScreen = () => {

    const [selectedItem, setSelectedItem] = useState<GridItem | null>(null);

    return (
        <BottomSheetModalProvider>
            <Text>Home Screen</Text>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button title={'Click A'} onPress={() => setSelectedItem(initialSelectedItemTypeA)}/>
                <Button title={'Click B'} onPress={() => setSelectedItem(initialSelectedItemTypeB)}/>
                <Button title={'Click C'} onPress={() => setSelectedItem(initialSelectedItemTypeC)}/>
                {selectedItem && <SampleGridBottomSheet initialItem={selectedItem} onDismiss={() => setSelectedItem(null)} />}
            </View>
        </BottomSheetModalProvider>
    )
}