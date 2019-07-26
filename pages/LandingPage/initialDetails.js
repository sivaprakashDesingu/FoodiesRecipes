import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {Button } from 'react-native-paper';
import { CommonCSS, initialPageCSS } from '../../Style'

export  class InitialDetails extends React.Component {
  static navigationOptions = {
    title: "Personalization",
    headerStyle: {
      backgroundColor: "#fa7776"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };


  render() {
    const { propsValue } = this.props;
    const src = 'https://cdn3.vectorstock.com/i/1000x1000/53/27/chef-cartoon-icon-cooking-and-menu-design-vector-9495327.jpg'
    return (
      <ScrollView style={CommonCSS.flexContainer}>
        <StatusBar backgroundColor="#fa6767" barStyle="light-content" />
        <View >
          <Text style={initialPageCSS.heading}>Rate your cooking skills!</Text>
        </View>
        <TouchableOpacity style={initialPageCSS.buttons} activeOpacity={0.5}>
          <Image source={require('../../assets/images/avatar.png')} style={initialPageCSS.ImageIconStyle}/>
          <Text style={initialPageCSS.TextStyle}> Iam a Beginner </Text>
        </TouchableOpacity>
        <TouchableOpacity style={initialPageCSS.buttons} activeOpacity={0.5}>
          <Image source={require('../../assets/images/avatar.png')} style={initialPageCSS.ImageIconStyle}/>
          <Text style={initialPageCSS.TextStyle}> Iam an Expert </Text>
        </TouchableOpacity>
        <TouchableOpacity style={initialPageCSS.buttons} activeOpacity={0.5}>
          <Image source={require('../../assets/images/avatar.png')} style={initialPageCSS.ImageIconStyle}/>
          <Text style={initialPageCSS.TextStyle}> Iam a Professional </Text>
        </TouchableOpacity>

        {/* Are you Vegetarian */}
        <View>
          <Text style={initialPageCSS.heading}>Are you a Vegetarian!</Text>
        </View>
        <TouchableOpacity style={initialPageCSS.buttons} activeOpacity={0.5}>
          <Image source={require('../../assets/images/avatar.png')} style={initialPageCSS.ImageIconStyle}/>
          <Text style={initialPageCSS.TextStyle}> Nope, Show me all Recipes </Text>
        </TouchableOpacity>
        <TouchableOpacity style={initialPageCSS.buttons} activeOpacity={0.5}>
          <Image source={require('../../assets/images/avatar.png')} style={initialPageCSS.ImageIconStyle}/>
          <Text style={initialPageCSS.TextStyle}> Yes, Hide recipes with meat</Text>
        </TouchableOpacity> 
        <View style = {initialPageCSS.getStartedBtnWrapper}>
        <Button 
              mode="contained"
              theme={{
                roundness: 5,
                width: '90%',
                dark: true,
                colors: {
                primary: '#ec4242',
                accent: "#ffffff",
                }
              }}
              contentStyle = {{height:50}}
              >
              Get Started
            </Button>
        </View>
        
        {/* Are you Vegetarian */}
      </ScrollView>

    );
  }
}
 
export default InitialDetails