import React, { Component } from 'react';
import { View, Text, Image, ScrollView, Animated, TouchableOpacity } from 'react-native';
import { CommonCSS } from '../../assets/styles/common_style'
import { LoginPageCSS } from '../../assets/styles/recipe_style'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            emailId:'',
            UserName:''
        }
    }

    static navigationOptions = {
        headerTitle: <HeaderBar headerTitle="Recipe" isSearchNeeded={false} />,
        headerStyle: {
            backgroundColor: "#fa7776"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
            fontWeight: "bold"
        }
    };


    render() {
        const { height } = this.state;
        return (
            <ScrollView style={CommonCSS.container}>
                <Text>Login page</Text>
            </ScrollView>
        )
    }
}

export default Login;

