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

import Fetch from '../services/Fetch';

const FetchData = new Fetch({
  host: 'http://localhost',
  port: '8000'
})
export default class ArticleDetail extends Component{
  static navigationOptions = {
    title: 'Simple News'
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      article:[],
     };
  }
  componentDidMount(){ 
    var id = this.props.navigation.getParam('id', 'NO-ID')
    FetchData.showArticle(id,function(cb){
      console.log(id,cb)
        this.setState({
          article : cb,
          loading: false,
        })
    }.bind(this));
    
  }  
  render() {
    return (
      this.state.loading ? 
      <ContentLoader
                    height={500}>
          <Rect x="0" y="0" rx="5" ry="5" width="70" height="70"/>
          <Rect x="80" y="17" rx="4" ry="4" width="300" height="13"/>
          <Rect x="80" y="40" rx="3" ry="3" width="250" height="10"/>
          <Rect x="0" y="80" rx="3" ry="3" width="350" height="10"/>
          <Rect x="0" y="100" rx="3" ry="3" width="200" height="10"/>
          <Rect x="0" y="120" rx="3" ry="3" width="360" height="10"/>
      </ContentLoader>

      :
      <ScrollView>
          <Card>
            <CardItem cardBody>
              <Image source={{uri: this.state.article.img}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>{this.state.article.title}</Text>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
                <Text>{this.state.article.text}</Text>
              </Left>
            </CardItem>
          </Card>
      </ScrollView>
    );
  }
}
