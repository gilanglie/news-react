import React from 'react';
import { AsyncStorage, } from 'react-native';
// import routes from "./routes";

import Login from './src/screen/Login';
import Home from './src/screen/Home';
import SalesOrder from './src/screen/SalesOrder';
import Delivery from './src/screen/Delivery';
import QuotationDetail from './src/screen/QuotationDetail';
import DeliveryDetail from './src/screen/DeliveryDetail';
import AuthLoadingScreen from './src/screen/AuthLoadingScreen';
import AddOrder from './src/screen/AddOrder';
import AddTemplate from './src/screen/AddTemplate';
import Pick from './src/screen/delivery/Pick';
import Pack from './src/screen/delivery/Pack';
import Out from './src/screen/delivery/Out';
import SideBar  from './src/screen/SideBar';
import Database  from './src/screen/Download';

import { createStackNavigator, createSwitchNavigator, createDrawerNavigator,createBottomTabNavigator  } from 'react-navigation';
console.disableYellowBox = true;
const AuthStack = createStackNavigator({ login: Login });
const AppStacks = createStackNavigator(
	{ 
		home: Home, 
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
