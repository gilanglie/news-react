/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { View, ScrollView, Image, TouchableHighlight, StyleSheet} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Badge, Left, Body, Right, List } from 'native-base';
import ContentLoader from 'react-native-content-loader';
import {Circle, Rect} from 'react-native-svg'
import LinearGradient from 'react-native-linear-gradient';
import WeatherIcon from '../style/weatherIcon/weatherIcon';
import Fetch from '../services/Fetch';

import globalStyle from '../style/style';
console.disableYellowBox = true;

const FetchData = new Fetch({
  host: 'http://localhost',
  port: '8000'
})
export default class ArticleDetail extends Component{
  static navigationOptions = {
    title: this.props.navigation.getParam('title', 'Simple News'),
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      timezone: false,
      weatherData: [],
      articleData:[],
     };
  }
  componentDidMount(){ 
    var id = this.props.navigation.getParam('id', 'NO-ID')
    var page = 

    FetchData.showArticle(id,function(cb){
        this.setState({
          timezone : cb.timezone,
          weatherData : cb.currently
        })
    });
    
  }  
  render() {
    return (
      <View style={globalStyle.container}>
        <ScrollView style={globalStyle.scrollContainer}>
          <View style={globalStyle.marginTopValue}>
            {this.showWeather()}
            <Text style={globalStyle.nameLeft}>Latest News</Text>
            <Content style={{padding: 10}}>
            {this.showVerticalList()}
            </Content>
          </View>
        </ScrollView>
      </View>
    );
  }
}
