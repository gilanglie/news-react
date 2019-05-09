import React from 'react';

import Home from './pages/Home';
import ArticleDetail from './pages/ArticleDetail';

import { createStackNavigator, createSwitchNavigator, createDrawerNavigator } from 'react-navigation';
console.disableYellowBox = true;
const AppStacks = createStackNavigator(
	{ 
    Home: {screen: Home},
    ArticleDetail: {screen: ArticleDetail},
	}
); 


export default AppStacks;
