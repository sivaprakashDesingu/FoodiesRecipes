import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  ScrollView,
  Image,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import { Button } from 'react-native-paper';
// actions
import { updateUserInitialInput } from './../../action/Initial-action'
import { CommonCSS, initialPageCSS } from '../../Style'

class InitialDetails extends React.Component {

  constructor(props) {
    super(props)
    this.state = { 
      userInput:{
        cookingSkill: 'Beginner',
        isVegeterian:false
      },
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
      this.setState({userInput:{
          ...this.state.userInput,
          cookingSkill : value        
      }}) :
      this.setState({userInput:{
        ...this.state.userInput,
        isVegeterian : value        
    }})
  }

  updateList(){
    let {navigate} = this.props.navigation;
    this.props.updateUserInitialInput(this.state.userInput);
    navigate('Recipe')
  }
  render() {
    const {userInput} = this.state;
    return(
      <ScrollView style={CommonCSS.flexContainer}>
        <StatusBar backgroundColor="#fa6767" barStyle="light-content" />

        {/* Rate your cooking skills */}
        <View style={initialPageCSS.pageWrapper}>
        <View >
          <Text style={initialPageCSS.heading}>Rate your cooking skills!</Text>
        </View>
        <TouchableOpacity 
        onPress={this.userInitalInput.bind(this,'cookingSkill','Beginner')} 
        style={
          [initialPageCSS.buttons, 
            userInput.cookingSkill==='Beginner' ? initialPageCSS.acitveButton : null]
        }
        activeOpacity={0.5}>
          <Image source={require('../../assets/images/avatar.png')} style={initialPageCSS.ImageIconStyle}/>
          <Text style={initialPageCSS.TextStyle}> Iam a Beginner </Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={this.userInitalInput.bind(this,'cookingSkill','Expert')} 
        style={
          [initialPageCSS.buttons, 
            userInput.cookingSkill==='Expert' ? initialPageCSS.acitveButton : null]
        }
        activeOpacity={0.5}>
          <Image source={require('../../assets/images/avatar.png')} style={initialPageCSS.ImageIconStyle}/>
          <Text style={initialPageCSS.TextStyle}> Iam an Expert </Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={this.userInitalInput.bind(this,'cookingSkill','Professional')} 
        style={
          [initialPageCSS.buttons, 
            userInput.cookingSkill==='Professional' ? initialPageCSS.acitveButton : null]
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
            userInput.isVegeterian ? null : initialPageCSS.acitveButton]
        }
        activeOpacity={0.5}>
          <Image source={require('../../assets/images/avatar.png')} style={initialPageCSS.ImageIconStyle}/>
          <Text style={initialPageCSS.TextStyle}> Nope, Show me all Recipes </Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={this.userInitalInput.bind(this,'isVeg',true)} 
        style={
          [initialPageCSS.buttons, 
            userInput.isVegeterian ? initialPageCSS.acitveButton : null]
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
            onPress = {this.updateList.bind(this)}
          >
            Get Started
          </Button>
        </View>
        {/* Are you Vegetarian */}
        </View>
        
      </ScrollView>
    );
  }
}
 

InitialDetails.propTypes = {
  updateUserInitialInput: PropTypes.func,
  userInput : PropTypes.object
}


function mapStateToProps (state) {
  return{
      userInput : state.userInitalInputFromUser
  }
}

const mapDispatchToProps = dispatch => ({
  updateUserInitialInput: (userInput) =>
    dispatch(updateUserInitialInput(userInput)),
})

export default connect(mapStateToProps, mapDispatchToProps)(InitialDetails)