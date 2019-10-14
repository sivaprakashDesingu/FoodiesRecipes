import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import { connect } from 'react-redux'
import { Text, View, ImageBackground, StatusBar,AsyncStorage } from 'react-native';
import { Button } from 'react-native-paper';
import { isUserLoggedIn, isUserRegistered } from '../../../action/UserDetails-action'
import { CommonCSS } from '../../../assets/styles/common_style'
import { HomeCSS } from '../../../assets/styles/home_style'
import TextBox from '../../components/TextBox/textbox'
import bgImage from './../../../assets/images/home_bg.jpg'
import {AppColor} from '../../../pages/helper/dimenstion'

function Home(props) {

  const { navigate } = props.navigation;
  const [isRegisteruser, SetIsRegisteruser] = useState(true);
  const [emailId, setEmailId] = useState('');
  const [fullName, setFullName] = useState('');
  //Fetch value form props
  const { isRegisterUser, aboutRegister } = props.UserDetailsReducer


  function isUserLoggedIn() {
    const { userDetails } = props.UserDetailsReducer
    if (isRegisterUser) {
      props.isUserLoggedIn(emailId.value)
    } else {
      props.isUserRegistered(emailId.value, fullName.value)
    }

  }
  
  useEffect(() => {
    
    AsyncStorage.getItem('cookieUserToken', (err, result) => {
      //alert(result);
      if(result !== null && result.length>=1){
        navigate('Personalization')
      }
    });
    
  }, [])

  useEffect(() => {
    
    if(props.UserDetailsReducer.userDetails.emailId.length>=1){
      AsyncStorage.setItem('cookieUserToken', JSON.stringify(props.UserDetailsReducer.userDetails.accessToken), () => {
      });
      navigate('Personalization')
    }
  }, [props.UserDetailsReducer])

  return (
    <View style={HomeCSS.container}>
      <StatusBar backgroundColor="blue" barStyle="light-content" />
      <ImageBackground source={bgImage} style={HomeCSS.backgroundImage}>
        <View style={CommonCSS.overlay}></View>
        <View style={HomeCSS.homepageContainer}>
          <Text style={HomeCSS.heading}>Join with us</Text>
          <Text style={HomeCSS.subHeading}>Look | Cook | Taste</Text>

          <View style={HomeCSS.loginFormWrapper}>
            <TextBox label="Email Id"
              value={emailId.value}
              onTextValue={(value) => setEmailId(value)} />

            {isRegisterUser ? null :
              <TextBox
                label="Full Name"
                value={fullName.value}
                onTextValue={(value) => setFullName(value)}
              />}

          </View>

          <Button
            mode="contained"
            style={CommonCSS.marginTop30}
            theme={{
              roundness: 5,
              width: 200,
              colors: {
                primary: AppColor.primaryColor,
                
              }
            }}
            contentStyle={{ width: 200, height: 60 }}
            onPress={isUserLoggedIn}
          >
            {isRegisterUser ? "Login" : "Register"}
            </Button>
        </View>
      </ImageBackground>
    </View>
  );
  //}
}


function mapStateToProps(state) {
  return {
    loggedinUser: state.userInitalInputFromUser,
    UserDetailsReducer: state.UserDetailsReducer
  }
}

const mapDispatchToProps = dispatch => ({
  isUserLoggedIn: (action) =>
    dispatch(isUserLoggedIn(action)),
  isUserRegistered: (email, fullName) => dispatch(isUserRegistered(email, fullName))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
