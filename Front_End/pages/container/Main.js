import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { Text, View, AsyncStorage } from 'react-native';
import {
    isUserLoggedIn,
    isUserRegistered,
    fetchUserDetails
} from './../../service/action/UserDetails-action'
import { fetchUserInitialInput } from './../../service/action/Initial-action'
import FullPageLoader from './../components/Loader/FullpageLoader'
function Main(props) {

    const { navigate } = props.navigation;

    function navigaToPages() {
        /*AsyncStorage.setItem('PersonalizedData', '', () => {})*/
        AsyncStorage.getItem('cookieUserToken', (err, token) => {
            if (token !== null && token.length >= 1) {
                AsyncStorage.getItem('PersonalizedData', (err, data) => {
                    //alert(JSON.stringify(data))
                    props.fetchUserDetails(token)
                    props.fetchUserInitialInput(token.substring(1, token.length - 1))
                    if (data !== null && data.length >= 1) {
                        navigate('Dashboard')
                    } else {
                        navigate('Personalization')
                    }
                })

            } else {
                navigate('Home')
            }
        });
    }


    useEffect(() => {
        willFocusListener = props.navigation.addListener(
            'willFocus',
            () => {
                navigaToPages()
            }
        )
    }, []);

    useEffect(() => {
        navigaToPages()

    }, [])

    return (
        <FullPageLoader />
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
