/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image, ListView, TouchableHighlight} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Fetch from './services/Fetch';

import globalStyle from './style/style';

const Fetch = new Fetch({
  
})
export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      weatherData: [],
      articleData:[],
     };
  }
  componentDidMount(){
    

  }
    
  showWeather() {
    return (
      <View style={globalStyle.recentlyPlayed}>
        <Text style={[globalStyle.name, globalStyle.paddingLeftValue]}>Horizontal List</Text>
      </View>
    )
  }
  render() {
    return (
      <View style={globalStyle.container}>
        <ScrollView style={globalStyle.scrollContainer}>
          <LinearGradient
            style={globalStyle.header}
            colors={['#6F86D6', '#48C6EF']}
            start={{ x: 0.0, y: 0.25 }}
            end={{ x: 0.5, y: 1.0 }}
          >
            <View style={globalStyle.titleContainer}>
              <Text style={globalStyle.title}> List Views </Text>
            </View>
          </LinearGradient>
          <View style={globalStyle.marginTopValue}>
            {this.showWeather()}
            <Text style={globalStyle.nameLeft}>Vertical List</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
