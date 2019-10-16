import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { Text, View, AsyncStorage } from 'react-native';
import {
    isUserLoggedIn,
    isUserRegistered,
    fetchUserDetails
} from './../../action/UserDetails-action'
import { fetchUserInitialInput } from './../../action/Initial-action'

function Main(props) {

    const { navigate } = props.navigation;


    useEffect(() => {
      
        AsyncStorage.getItem('cookieUserToken', (err, token) => {
            if (token !== null && token.length >= 1) {
                AsyncStorage.getItem('PersonalizedData', (err, data) => {
                    if (data !== null && data.length >= 1) {
                        props.fetchUserDetails(token)
                        props.fetchUserInitialInput(token.substring(1, token.length - 1))
                        navigate('RecipeDetails')
                    } else {
                        props.fetchUserDetails(token)
                        navigate('Personalization')
                    }
                })

            } else {
                navigate('Home')
            }
        });

    }, [])

    return (
        <View>
            <Text>{null}</Text>
        </View>
    );
    
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
    fetchUserDetails: (accessToken) => dispatch(fetchUserDetails(accessToken)),
    fetchUserInitialInput: (accessToken) => dispatch(fetchUserInitialInput(accessToken))
})


export default connect(mapStateToProps, mapDispatchToProps)(Main)
