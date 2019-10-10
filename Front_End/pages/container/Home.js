'use strict';

import React, { useState } from 'react';
import {
  Text,
  View, 
  ImageBackground,
  StatusBar,
  Dimensions } from 'react-native';
import { Button } from 'react-native-paper';
import { CommonCSS } from '../../assets/styles/common_style'
import {HomeCSS} from '../../assets/styles/home_style'
import TextBox from './../components/TextBox/textbox'
import bgImage from '../../assets/images/home_bg.jpg'

export default function Home(props) {
  
  const {navigate} = props.navigation; 
  const [isRegisteruser, SetIsRegisteruser] = useState(true);
    //render() {
    //const {navigate} = this.props.navigation; 
    return (
      <View style = {HomeCSS.container}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <ImageBackground source={bgImage} style={HomeCSS.backgroundImage}>
          <View style={CommonCSS.overlay}></View>
          <View style ={HomeCSS.homepageContainer}>
             <Text style ={HomeCSS.heading}>Join with us</Text>
             <Text style ={HomeCSS.subHeading}>Look | Cook | Taste</Text>

              <View style={HomeCSS.loginFormWrapper}>
                <TextBox label="Email ID" />
                {isRegisteruser ? null : <TextBox label="Full Name" />}
                
              </View>

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
              Submit
            </Button>
          </View>
        </ImageBackground>
      </View>
    );
  //}
}
