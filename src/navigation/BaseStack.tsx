import { StyleSheet, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator, NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import MetroSdkScreen from '../screens/MetroSdkScreen';

const Stack = createNativeStackNavigator();

export enum BaseScreens {
    HomeScreen = "HomeScreen",
    MetroSdkScreen = "MetroSdkScreen",
}

export type BaseScreenParams = {
    [BaseScreens.HomeScreen]: undefined;
    [BaseScreens.MetroSdkScreen]: undefined;
}

export type BaseScreenProps<RouteName extends keyof BaseScreenParams = BaseScreens> = NativeStackScreenProps<BaseScreenParams, RouteName>;
export type BaseStackNavigationProp<RouteName extends keyof BaseScreenParams = BaseScreens> = NativeStackNavigationProp<BaseScreenParams, RouteName>;
export type BaseStackRouteProp<RouteName extends keyof BaseScreenParams = BaseScreens> = RouteProp<BaseScreenParams, RouteName>;

const BaseStack = () => {
    return (
        <View style={{ flex: 1 }}>
            <Stack.Navigator
                initialRouteName={BaseScreens.HomeScreen}
                screenOptions={{
                    // This ensures the popup appears above the navigation stack
                    presentation: 'transparentModal',
                    animation: 'fade',
                }}
            >
                <Stack.Screen name={BaseScreens.HomeScreen} options={{ headerShown: false }} component={HomeScreen} />
                <Stack.Screen name={BaseScreens.MetroSdkScreen} options={{ headerShown: false }} component={MetroSdkScreen} />
            </Stack.Navigator>
        </View>
    )
}

export default BaseStack

const styles = StyleSheet.create({})