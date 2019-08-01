import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
    View,
    Text,
    ScrollView,
} from 'react-native';
import { CommonCSS } from '../../Style'

class Recipe extends React.Component {
    constructor(props) {
        super(props)

    }


    render() {
        return (
            <ScrollView style={CommonCSS.flexContainer}>
                <Text>Hi</Text>
            </ScrollView>
        )
    }
}

export default Recipe;

