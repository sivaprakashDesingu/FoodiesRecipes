import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import { connect } from 'react-redux'
import { Text, View, ImageBackground, StatusBar, AsyncStorage, Image } from 'react-native';
import { Button } from 'react-native-paper';
import {
  isUserLoggedIn,
  isUserRegistered,
  fetchUserDetails
} from '../../../service/action/UserDetails-action'
import { CommonCSS } from '../../../assets/styles/common_style'
import { HomeCSS } from '../../../assets/styles/home_style'
import TextBox from '../../components/TextBox/textbox'
import bgImage from './../../../assets/images/home_bg2.jpeg'

import { AppColor } from '../../../pages/helper/dimenstion'

function Home(props) {

  const { navigate } = props.navigation;
  const [emailId, setEmailId] = useState('');
  const [fullName, setFullName] = useState('');
  const [innerLoader, setInnerLoader] = useState(false)
  const { isRegisterUser } = props.UserDetailsReducer


  function isUserLoggedIn() {
    if (isRegisterUser) {
      if ((emailId.trim()).length >= 1) {
        setInnerLoader(true)
        props.isUserLoggedIn(emailId)
      } else {
        setEmailId('')
        alert("Fields should be filed")
      }
    } else {
      setInnerLoader(true)
      props.isUserRegistered(emailId, fullName)
    }

  }

  useEffect(() => {

    AsyncStorage.getItem('cookieUserToken', (err, token) => {
      if (token !== null && token.length >= 1) {
        props.fetchUserDetails(token)
        navigate('Personalization')
      }
    });

  }, [])

  useEffect(() => {
    if (!props.UserDetailsReducer.isRegisterUser) {
      setInnerLoader(false)
    }
    if (props.UserDetailsReducer.userDetails.emailId.length >= 1) {
      AsyncStorage.setItem('cookieUserToken', JSON.stringify(props.UserDetailsReducer.userDetails.accessToken), () => {
      });
      navigate('Personalization')
    }
  }, [props.UserDetailsReducer])

  return (
    <View style={HomeCSS.container}>
      <StatusBar backgroundColor="blue" barStyle="light-content" />
      <ImageBackground source={bgImage} style={HomeCSS.backgroundImage}>
        <View style={[CommonCSS.overlay,{opacity:.5}]}></View>
        <View style={HomeCSS.homepageContainer}>
          <Text style={HomeCSS.heading}>Welcome to</Text>
          <Text style={HomeCSS.subHeading}>Foodies Recipe</Text>
          <Text style={HomeCSS.hasTag}>Look | Cook | Taste</Text>

          <View style={HomeCSS.loginFormWrapper}>
            <TextBox label="Email Id"
              type={"text"}
              value={emailId}
              onTextValue={(value) => setEmailId(value)} />

            {isRegisterUser ? null :
              <TextBox
                label="Full Name"
                type={"text"}
                value={fullName}
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
                primary: AppColor.orangeDark,

              }
            }}
            contentStyle={{ width: 200, height: 60 }}
            onPress={isUserLoggedIn}
          >
            {isRegisterUser ? "Login" : "Register"}
          </Button>
        </View>
      </ImageBackground>
      {/* Enable Loader once clicked Login/Register */}
      {innerLoader ? <View style={[CommonCSS.overlay, CommonCSS.Whiteoverlay]}>
        <View style={CommonCSS.verticalHorizalCenter}>
          <Image
            style={{ width: 200, height: 200 }}
            source={{ uri: 'http://www.broadwaybalancesamerica.com/images/ajax-loader.gif' }}
          />
        </View>

      </View> : null}
      {/* Enable Loader once clicked Login/Register */}
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
  isUserRegistered: (email, fullName) => dispatch(isUserRegistered(email, fullName)),
  fetchUserDetails: (accessToken) => dispatch(fetchUserDetails(accessToken))
})


export default connect(mapStateToProps, mapDispatchToProps)(Home)
