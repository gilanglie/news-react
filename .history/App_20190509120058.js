/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { View, ScrollView, Image, TouchableHighlight, StyleSheet, FlatList} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Badge, Left, Body, Right, List } from 'native-base';
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
          this.setState({
            timezone : cb.timezone,
            weatherData : cb.currently
          })
        }.bind(this))
      },
      (error) => console.log(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );

    FetchData.getarticle(function(cb){
      console.log('ar',cb)
      this.setState({
        articleData : cb
      })
    }.bind(this))
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
      <FlatList dataArray={this.state.articleData} renderRow={(item) =>
        <Card style={globalStyle.card}>
        <CardItem cardBody style={globalStyle.card}>
          <Image source={{uri: item.img}} style={{height: 200, width: null, flex: 1, borderTopLeftRadius:10, borderTopRightRadius: 10}}/>
        </CardItem>
        <CardItem>
          <Left>
            <Badge>
              <Text>{item.tag}</Text>
            </Badge>
          </Left>
          <Right>
            <Text>{item.created_at}</Text>
          </Right>
        </CardItem>
        <CardItem style={globalStyle.card}>
          <Left>
            <Body>
              <Text>{item.title}</Text>
            </Body>
          </Left>
        </CardItem>
      </Card>
      }>
      </FlatList>
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
            <Content style={{padding: 10}}>
            {this.showVerticalList()}
            </Content>
          </View>
        </ScrollView>
      </View>
    );
  }
}
