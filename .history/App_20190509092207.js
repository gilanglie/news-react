/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Image, ListView, TouchableHighlight, Icon} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import WeatherIcon from './style/weatherIcon/weatherIcon';
import Fetch from './services/Fetch';

import globalStyle from './style/style';

const FetchData = new Fetch({
  host: 'http://localhost',
  port: '8000'
})
export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      timezone: false,
      weatherData: [],
      articleData:[],
     };
  }
  componentDidMount(){ 
    navigator.geolocation.getCurrentPosition(
      (position) => {
        FetchData.getWeather(position.coords.latitude,position.coords.longitude,function(cb){
          console.log('cb',cb)
          this.setState({
            timezone : cb.timezone,
            weatherData : cb.currently
          })
        }.bind(this))
      },
      (error) => console.log(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
    
    // this.setState({weatherData})
  }  
  showWeather() {
    return (
      <View style={globalStyle.recentlyPlayed}>
        <Text style={[globalStyle.name, globalStyle.paddingLeftValue, globalStyle.mb10]}>{this.state.timezone}</Text>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <WeatherIcon 
              name={!this.state.weatherData ? 'clear-day' : this.state.weatherData.icon} 
              size={48} 
              style={{marginRight:12}}
          />
          <Text style={{fontSize:48}}>
            {this.state.weatherData.temperature}&#176;C
          </Text>
        </View>
        <Text style={[globalStyle.nameLeft, globalStyle.paddingLeftValue, globalStyle.mb10]}>{this.state.weatherData.summary}</Text>
      </View>
    )
  }
  render() {
    return (
      <View style={globalStyle.container}>
        <ScrollView style={globalStyle.scrollContainer}>
          <LinearGradient
            style={globalStyle.header}
            colors={['#C33764', '#1D2671']}
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
