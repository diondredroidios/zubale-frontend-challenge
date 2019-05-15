import React from 'react';
import { createStackNavigator } from "react-navigation";
import MainBottomTabNavigator from "./MainBottomTabNavigator";
import NewQuoteScreen from "./NewQuoteScreen";

const MainStackNavigator = createStackNavigator(
    {
        BottomTabNavigator: MainBottomTabNavigator,
        NewQuoteScreen: NewQuoteScreen
    },
    {
        initialRouteName: "BottomTabNavigator"
    }
)

export default MainStackNavigator