import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { View, Text, ScrollView, Image, StatusBar, TouchableOpacity, AsyncStorage } from 'react-native';
import { Button } from 'react-native-paper';
/* actions */
import { 
  updateUserInitialInput,
  saveUserInitialInput,
  fetchUserInitialInput
 } from '../../../service/action/Initial-action'
/* Styles */
import { CommonCSS } from '../../../assets/styles/common_style'
import { initialPageCSS } from '../../../assets/styles/initial_style'
class Personalization extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      userInput: this.props.personalizedData.userInput,
      accessToken:''
    }
  }

  componentDidMount() {
    AsyncStorage.getItem('cookieUserToken', (err, result) => {
      this.props.fetchUserInitialInput(result.substring(1, result.length - 1))
      this.setState({accessToken:result.substring(1, result.length - 1)})
    });
    
    
  }

  componentWillReceiveProps(nextProps){
    //console.warn(nextProps.personalizedData)
    //console.warn(this.props.personalizedData)
    if(nextProps.personalizedData.localStorage !== this.props.personalizedData.localStorage){
      AsyncStorage.setItem('PersonalizedData', 'True', () => {
        this.props.navigation.navigate('Dashboard')
      });
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

  

  userInitalInput(whichState, value) {
    whichState === 'cookingSkill' ?
      this.setState({
        userInput: {
          ...this.state.userInput,
          cookingSkill: value
        }
      }) :
      this.setState({
        userInput: {
          ...this.state.userInput,
          isVegeterian: value
        }
      })
  }

  updateList() {
    let { navigate } = this.props.navigation;
    let {userInput,accessToken} = this.state
    const {personalizedData} = this.props
    //alert(JSON.stringify(personalizedData))
    if(personalizedData.isAlreadySet){
      this.props.updateUserInitialInput(userInput,accessToken);
    }else{
      this.props.saveUserInitialInput(userInput,accessToken);
    }
    //this.props.saveUserInitialInput(userInput,accessToken);
    //navigate('RecipeDetails')
  }
  
  render() {

    const { userInput } = this.state;
    const imageBaseURL =  '../../../assets/images'
    return (
      <ScrollView style={CommonCSS.flexContainer}>
        <StatusBar backgroundColor="#fa6767" barStyle="light-content" />

        {/* Rate your cooking skills */}
        <View style={initialPageCSS.pageWrapper}>
          <View >
            <Text style={initialPageCSS.heading}>Rate your cooking skills!</Text>
          </View>
          <TouchableOpacity
            onPress={this.userInitalInput.bind(this, 'cookingSkill', 'Beginner')}
            style={
              [initialPageCSS.buttons,
              userInput.cookingSkill === 'Beginner' ? initialPageCSS.acitveButton : null]
            }
            activeOpacity={0.5}>

            <Image source={require(`${imageBaseURL}/avatar.png`)} style={initialPageCSS.ImageIconStyle} />
            <Text style={initialPageCSS.TextStyle}> Iam a Beginner </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.userInitalInput.bind(this, 'cookingSkill', 'Expert')}
            style={
              [initialPageCSS.buttons,
              userInput.cookingSkill === 'Expert' ? initialPageCSS.acitveButton : null]
            }
            activeOpacity={0.5}>
            <Image source={require(`${imageBaseURL}/avatar.png`)} style={initialPageCSS.ImageIconStyle} />
            <Text style={initialPageCSS.TextStyle}> Iam an Expert </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.userInitalInput.bind(this, 'cookingSkill', 'Professional')}
            style={
              [initialPageCSS.buttons,
              userInput.cookingSkill === 'Professional' ? initialPageCSS.acitveButton : null]
            }
            activeOpacity={0.5}>
            <Image source={require(`${imageBaseURL}/avatar.png`)} style={initialPageCSS.ImageIconStyle} />
            <Text style={initialPageCSS.TextStyle}> Iam a Professional </Text>
          </TouchableOpacity>
          {/* Rate your cooking skills */}

          {/* Are you Vegetarian */}
          <View>
            <Text style={initialPageCSS.heading}>Are you a Vegetarian!</Text>
          </View>
          <TouchableOpacity
            onPress={this.userInitalInput.bind(this, 'isVeg', false)}
            style={
              [initialPageCSS.buttons,
              userInput.isVegeterian ? null : initialPageCSS.acitveButton]
            }
            activeOpacity={0.5}>
            <Image source={require(`${imageBaseURL}/avatar.png`)} style={initialPageCSS.ImageIconStyle} />
            <Text style={initialPageCSS.TextStyle}> Nope, Show me all Recipes </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.userInitalInput.bind(this, 'isVeg', true)}
            style={
              [initialPageCSS.buttons,
              userInput.isVegeterian ? initialPageCSS.acitveButton : null]
            }
            activeOpacity={0.5}>
            <Image source={require(`${imageBaseURL}/avatar.png`)} style={initialPageCSS.ImageIconStyle} />
            <Text style={initialPageCSS.TextStyle}> Yes, Hide recipes with meat</Text>
          </TouchableOpacity>
          <View style={initialPageCSS.getStartedBtnWrapper}>
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
              contentStyle={{ height: 50 }}
              onPress={this.updateList.bind(this)}
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


Personalization.propTypes = {
  updateUserInitialInput: PropTypes.func,
  fetchUserInitialInput:PropTypes.func,
  saveUserInitialInput:PropTypes.func,
  personalizedData: PropTypes.object
}


function mapStateToProps(state) {
  const {personalizedDataReducer} = state
  return {
    personalizedData:personalizedDataReducer.personalizedData
  }
}
const mapDispatchToProps = dispatch => ({
  updateUserInitialInput: (userInput,accessToken) => dispatch(updateUserInitialInput(userInput,accessToken)),
  fetchUserInitialInput:(accessToken) => dispatch(fetchUserInitialInput(accessToken)),
  saveUserInitialInput: (userInput,accessToken) => dispatch(saveUserInitialInput(userInput,accessToken)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Personalization)