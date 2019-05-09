/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { View, ScrollView, Image, ListView, TouchableHighlight, StyleSheet} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
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
    const dsVertical = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.state = {
      loading: false,
      timezone: false,
      weatherData: [],
      articleData:[],
      dataSourceVertical: dsVertical.cloneWithRows(['Item 1', 'Item 2', 'Item 3']),
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

  showVerticalList() {
    return (
      <Card style={globalStyle.container}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'Image URL'}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'Image URL'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
    )
  }

  /* eslint-disable class-methods-use-this */
  renderRow(rowData) {
    const name = rowData
    return (
      <TouchableHighlight style={globalStyle.listItem} underlayColor="#f1f1f1">
        <View>
          <View style={globalStyle.row}>
            <View style={globalStyle.text}>
              <Text style={[globalStyle.name]}>{name}</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
  render() {
    return (
      <View style={globalStyle.container}>
        <ScrollView style={globalStyle.scrollContainer}>
          <LinearGradient
            style={globalStyle.header}
            colors={['#3494E6', '#EC6EAD']}
            start={{ x: 0.0, y: 0.25 }}
            end={{ x: 0.5, y: 1.0 }}
          >
            <View style={globalStyle.titleContainer}>
              <Text style={globalStyle.title}> News Apps </Text>
            </View>
          </LinearGradient>
          <View style={globalStyle.marginTopValue}>
            {this.showWeather()}
            <Text style={globalStyle.nameLeft}>Vertical List</Text>
            {this.showVerticalList()}
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
