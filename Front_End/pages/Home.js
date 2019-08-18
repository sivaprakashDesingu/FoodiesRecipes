'use strict';

import React from 'react';
import {
  Text,
  View, 
  ImageBackground,
  StatusBar,
  Dimensions } from 'react-native';
import { Button } from 'react-native-paper';
import {HomeCSS, CommonCSS} from './../Style'

import bgImage from './../assets/images/home_bg.jpg'

const win = Dimensions.get('window');
const width = win.width;
const height = win.height;
const ratio = win.width/732;
export default class Home extends React.Component {
  render() {
    const {navigate} = this.props.navigation; 
    return (
      <View style = {HomeCSS.container}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <ImageBackground source={bgImage} style={HomeCSS.backgroundImage}>
          <View style ={HomeCSS.homepageContainer}>
             <Text style ={HomeCSS.heading}>Join with us</Text>
             <Text style ={HomeCSS.subHeading}>Ready | Cook | Eat</Text>
             <Button 
              mode="contained"
              style = {CommonCSS.marginTop30}
              theme={{
                roundness: 5,
                width: 200,
                colors: {
                  primary:'#fff',
                }
              }}
              contentStyle = {{width:200,height:60}}
              onPress={() => navigate('InitialDetails')}
              >
              Let's Cook
            </Button>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
