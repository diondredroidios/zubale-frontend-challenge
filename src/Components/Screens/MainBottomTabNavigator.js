import React from 'react';
import { createBottomTabNavigator } from "react-navigation";
import NewestQuotesScreen from "./NewestQuotesScreen";
import TopQuotesScreen from "./TopQuotesScreen";
import { Button, View } from 'react-native'

const MainBottomTabNavigator = createBottomTabNavigator({
    NewestQuotesScreen: NewestQuotesScreen,
    TopQuotesScreen: TopQuotesScreen
})

MainBottomTabNavigator.navigationOptions = ({ navigation }) => ({
    title: "Zubale Quotes",
    headerRight: <View style={{ paddingRight: 10 }}>
        <Button title={`New quote`} onPress={() => navigation.push("NewQuoteScreen")} />
    </View>
})

export default MainBottomTabNavigator