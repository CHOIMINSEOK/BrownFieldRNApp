import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import React, { useState } from "react";
import { View, Button, Text } from "react-native";
import { GridItemType } from "../sample-grid/grid-model";
import { SampleGridBottomSheet } from "../sample-grid/sample-grid-bottom-sheet";

export const HomeScreen = () => {

    const [selectedType, setSelectedType] = useState<GridItemType | null>(null);

    return (
        <BottomSheetModalProvider>
            <Text>Home Screen</Text>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button title={'Click A'} onPress={() => setSelectedType('A')}/>
                <Button title={'Click B'} onPress={() => setSelectedType('B')}/>
                <Button title={'Click C'} onPress={() => setSelectedType('C')}/>
                {selectedType && <SampleGridBottomSheet initialType={selectedType} onDismiss={() => setSelectedType(null)} />}
            </View>
        </BottomSheetModalProvider>
    )
}