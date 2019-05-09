import React from 'react';

import Home from './pages/Home';
import ArticleDetail from './pages/SalesOrder';

import { createStackNavigator, createSwitchNavigator, createDrawerNavigator,createBottomTabNavigator  } from 'react-navigation';
console.disableYellowBox = true;
const AppStacks = createStackNavigator(
	{ 
    Home: {screen: HomeScreen},
    ArticleDetail: {screen: ArticleDetail},
	}
); 
const AppStack = createDrawerNavigator(
  {
    Quotation: { screen: Home },
    SalesOrder: { screen: SalesOrder },
    Delivery: { screen: Delivery },
    Database : { screen: Database},
    Quotataiondetail: { screen: QuotationDetail },
    DeliveryDetail: { screen: DeliveryDetail },
    AddOrder: { screen: AddOrder },
    AddTemplate: { screen: AddTemplate },
   },
  {
    contentComponent: props =>   
      <SideBar {...props} />
  }
);


export default createSwitchNavigator(   
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Apps: AppStacks,
    Auth: AuthStack
  },
  {
    initialRouteName: 'AuthLoading',
  }
);
