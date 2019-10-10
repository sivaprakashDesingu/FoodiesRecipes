import React, { useState } from 'react';
import ReactDOM from "react-dom";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {Text,View,ImageBackground,StatusBar,} from 'react-native';
import { Button } from 'react-native-paper';
import {isUserLoggedIn} from './../../action/UserDetails-action'
import { CommonCSS } from '../../assets/styles/common_style'
import {HomeCSS} from '../../assets/styles/home_style'
import TextBox from './../components/TextBox/textbox'
import bgImage from '../../assets/images/home_bg.jpg'

function Home(props) {

  const {navigate} = props.navigation; 
  const [isRegisteruser, SetIsRegisteruser] = useState(true);
  const [emailId,setEmailId] = useState('');
  const [fullName,setFullName] = useState('');

  function isUserLoggedIn(){
    //alert(JSON.stringify(emailId))
    props.isUserLoggedIn(emailId)
  }
    return (
      <View style = {HomeCSS.container}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <ImageBackground source={bgImage} style={HomeCSS.backgroundImage}>
          <View style={CommonCSS.overlay}></View>
          <View style ={HomeCSS.homepageContainer}>
             <Text style ={HomeCSS.heading}>Join with us</Text>
             <Text style ={HomeCSS.subHeading}>Look | Cook | Taste</Text>

              <View style={HomeCSS.loginFormWrapper}>
                <TextBox label="Email ID" 
                value={emailId.value}
                onTextValue ={(value) =>  setEmailId(value)}/>
                
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
              //onPress={() => navigate('InitialDetails')}
              onPress={isUserLoggedIn}
              >
              Submit
            </Button>
          </View>
        </ImageBackground>
      </View>
    );
  //}
}


function mapStateToProps (state) {
  //alert(JSON.stringify(state))
  return{
    loggedinUser : state.userInitalInputFromUser
  }
}

const mapDispatchToProps = dispatch => ({
  isUserLoggedIn: (action) =>
    dispatch(isUserLoggedIn(action)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
