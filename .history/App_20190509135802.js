import React from 'react';

import Home from './pages/Home';
import ArticleDetail from './pages/ArticleDetail';

import { createStackNavigator, createAppContainer } from 'react-navigation';
console.disableYellowBox = true;
const AppStacks = createStackNavigator(
	{ 
    Home: {screen: Home},
    ArticleDetail: {screen: ArticleDetail},
	}
); 
const App = createAppContainer(AppStacks);

export default App;
