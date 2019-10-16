import React, { Component } from 'react';
import { View, Text, Image, ScrollView, Animated, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import HeaderBar from './../../components/Header'
//import { CommonCSS, RecipePageCSS } from '../../Style'
import { CommonCSS } from '../../../assets/styles/common_style'
import { RecipePageCSS } from '../../../assets/styles/recipe_style'

class RecipeListing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    static navigationOptions = {
        headerTitle: <HeaderBar headerTitle="Recipe" isSearchNeeded={true} />,
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
                <Text>Listing page</Text>
            </ScrollView>
        )
    }
}

export default RecipeListing;

