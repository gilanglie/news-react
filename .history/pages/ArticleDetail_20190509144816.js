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
import {
  LazyloadScrollView,
  LazyloadView,
  LazyloadImage
} from 'react-native-lazyload';

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
      <ScrollView>
          <Card>
            <CardItem cardBody>
            <LazyloadImage
                host="lazyload-list"
                // style={styles.avatarImage}
                source={this.state.article.img}
            />
              {/* <Image source={{uri: this.state.article.img}} style={{height: 200, width: null, flex: 1}}/> */}
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
