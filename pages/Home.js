'use strict';

import React from 'react';
import { StyleSheet, 
  Text,
  View, 
  Image,
  ScrollView,
  ImageBackground,
  StatusBar,
  Dimensions } from 'react-native';
import { Button } from 'react-native-paper';
import {HomeCSS} from './../Style'

import bgImage from './../assets/home_bg.jpg'

const win = Dimensions.get('window');
const width = win.width;
const height = win.height;
const ratio = win.width/732;
export default class Home extends React.Component {
  render() {
    return (
      <View style = {HomeCSS.container}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <ImageBackground source={bgImage} style={HomeCSS.backgroundImage}>
          <View style ={HomeCSS.homepageContainer}>
             <Text style ={HomeCSS.heading}>Join with us</Text>
             <Text style ={HomeCSS.subHeading}>Ready | Cook | Eat</Text>
             <Button 
              mode="contained"
              style = {{marginTop:30}}
              theme={{
                roundness: 5,
                width: 200,
                colors: {
                  primary:'#fff',
                }
              }}
              contentStyle = {{width:200,height:60}}
              onPress={() => alert('Pressed')}>
              Let's Cook
            </Button>
          </View>
          
        </ImageBackground>

      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red' 
  },
  backgroundImage: {
    width: '100%', 
    height: '100%',
    position: 'relative'
  },
  homepageContainer:{
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center',
    height: height,
  },
  heading: {
    fontSize: 30,
    color: '#fff'
  },
  subHeading :{
    fontSize: 16,
    color: '#fff'
  }
});