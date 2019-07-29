import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
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
// actions
import updateUserInitialInput from './../../action/Initial-action'
import { CommonCSS, initialPageCSS } from '../../Style'

class InitialDetails extends React.Component {

  constructor(props) {
    super(props)
    this.state = { 
      cookingSkill: 'Beginner',
      isVegeterian:false
    }
  }

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

  userInitalInput(whichState,value){
      whichState ==='cookingSkill' ? 
      this.setState({cookingSkill:value}) : 
      this.setState({isVegeterian:value})
  }

  render() {
    return (
      <ScrollView style={CommonCSS.flexContainer}>
        <StatusBar backgroundColor="#fa6767" barStyle="light-content" />

        {/* Rate your cooking skills */}
        <View >
          <Text style={initialPageCSS.heading}>Rate your cooking skills!</Text>
        </View>
        <TouchableOpacity 
        onPress={this.userInitalInput.bind(this,'cookingSkill','Beginner')} 
        style={
          [initialPageCSS.buttons, 
          this.state.cookingSkill==='Beginner' ? initialPageCSS.acitveButton : null]
        }
        activeOpacity={0.5}>
          <Image source={require('../../assets/images/avatar.png')} style={initialPageCSS.ImageIconStyle}/>
          <Text style={initialPageCSS.TextStyle}> Iam a Beginner </Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={this.userInitalInput.bind(this,'cookingSkill','Expert')} 
        style={
          [initialPageCSS.buttons, 
          this.state.cookingSkill==='Expert' ? initialPageCSS.acitveButton : null]
        }
        activeOpacity={0.5}>
          <Image source={require('../../assets/images/avatar.png')} style={initialPageCSS.ImageIconStyle}/>
          <Text style={initialPageCSS.TextStyle}> Iam an Expert </Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={this.userInitalInput.bind(this,'cookingSkill','Professional')} 
        style={
          [initialPageCSS.buttons, 
          this.state.cookingSkill==='Professional' ? initialPageCSS.acitveButton : null]
        }
        activeOpacity={0.5}>
          <Image source={require('../../assets/images/avatar.png')} style={initialPageCSS.ImageIconStyle}/>
          <Text style={initialPageCSS.TextStyle}> Iam a Professional </Text>
        </TouchableOpacity>
        {/* Rate your cooking skills */}
        
        {/* Are you Vegetarian */}
        <View>
          <Text style={initialPageCSS.heading}>Are you a Vegetarian!</Text>
        </View>
        <TouchableOpacity 
        onPress={this.userInitalInput.bind(this,'isVeg',false)} 
        style={
          [initialPageCSS.buttons, 
          this.state.isVegeterian ? null : initialPageCSS.acitveButton]
        }
        activeOpacity={0.5}>
          <Image source={require('../../assets/images/avatar.png')} style={initialPageCSS.ImageIconStyle}/>
          <Text style={initialPageCSS.TextStyle}> Nope, Show me all Recipes </Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={this.userInitalInput.bind(this,'isVeg',true)} 
        style={
          [initialPageCSS.buttons, 
          this.state.isVegeterian ? initialPageCSS.acitveButton : null]
        }
        activeOpacity={0.5}>
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
            onPress = {this.props.updateUserInitialInput(this.state)}
          >
            Get Started
          </Button>
        </View>
        {/* Are you Vegetarian */}
      </ScrollView>
    );
  }
}
 

InitialDetails.prototype = {
  updateUserInitialInput: PropTypes.func,
  userInput : PropTypes.object
}

// function mapStateToProps (state) {
//   alert(JSON.stringify(state))
//   return{
//       userInput : state.userInitalInputFromUser
//   }
// }
const mapStateToProps = state => ( { } ) 


const mapDispatchToProps = dispatch => ({
  updateUserInitialInput: (userInput) =>
    dispatch(updateUserInitialInput(userInput)),
})

export default connect(mapStateToProps, mapDispatchToProps)(InitialDetails)