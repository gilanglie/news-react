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
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      article:[],
     };
  }
  componentDidMount(){ 
    FetchData.showArticle(id,function(cb){
        this.setState({
          article : cb,
          loading: false,
        })
    });
    
  }  
  render() {
    return (
      <View style={globalStyle.container}>
        <Image source={{uri: this.state.article.img}} style={{height: 250, width: null, flex: 1}}/>

      </View>
    );
  }
}
