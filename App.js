import React from 'react';
import { createAppContainer } from 'react-navigation';
import MainStackNavigator from './src/Components/Screens/MainStackNavigator';

const App = createAppContainer(MainStackNavigator)

export default App;