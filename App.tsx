import React from 'react';
import {NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {GestureHandlerRootView} from "react-native-gesture-handler";
import { HomeScreen } from './pages/HomeScreen';

const Stack = createNativeStackNavigator();

function App(): React.ReactElement {

    return (
        <GestureHandlerRootView>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home" screenOptions={{
                    headerShown: false,
                }}>
                    <Stack.Screen name="Home" component={HomeScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </GestureHandlerRootView>
    );
}

export default App;
