import React from 'react';
import {
  View, 
  Text
} from 'react-native';
import {CommonCSS} from './../../Style'

export default class Recipe extends React.Component {
  render() {
      const {propsValue} = this.props;
    return (
      <View style = {CommonCSS.flexContainer}>
        <Text>itemId: {JSON.stringify(propsValue)}</Text>
      </View>
    );
  }
}
