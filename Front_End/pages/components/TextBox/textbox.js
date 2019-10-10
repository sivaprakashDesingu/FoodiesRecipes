import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Text, Animated } from 'react-native';

class TextBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            topValue: new Animated.Value(15),
            fontValue:new Animated.Value(16)
        }
    }
    enableFloating() {
        this.state.topValue.setValue(-10);
        Animated.timing(this.state.topValue, {
            toValue: -20,
            delay: 0,
            duration: 300
        }).start()
    }
    FloatingLable() {
        let topValue = 15;
        let fontValue = 16
        const { value } = this.state
        if (value.length >= 1) {
            topValue = -20
            fontValue = 14
        }
        this.state.topValue.setValue(topValue);
        this.state.fontValue.setValue(fontValue);
        Animated.parallel([
            Animated.timing(this.state.topValue, {
                toValue: topValue,
                duration: 500
            }),
            Animated.timing(this.state.fontValue, {
                toValue: fontValue,
                duration: 500
            })
        ]).start(() => {
            // callback
        });
    }
    render() {
        const { topValue,fontValue } = this.state
        //alert(JSON.stringify(this.props.value))
        return (
            <Animated.View style={style.inputwrapper}>
                <TextInput
                    style={style.inputField}
                    onFocus={this.enableFloating.bind(this)}
                    onBlur={this.FloatingLable.bind(this)}
                    onChangeText={(value) => this.props.onTextValue({ value })}
                    value={this.props.value}
                />
                <Animated.Text onClick={this.FloatingLable.bind(this)} 
                style={[style.floatlable, { top: topValue,fontSize:fontValue }]}>
                    {this.props.label}
                </Animated.Text>
            </Animated.View>
        )
    }
}

const style = StyleSheet.create({
    inputwrapper: {
        position: 'relative',
        marginTop:20,
        marginBottom:40,
    },
    inputField: {
        padding: 10,
        paddingLeft: 0,
        paddingBottom:5,
        width: '100%',
        borderWidth: 1,
        borderBottomColor: '#fff',
        borderColor: "transparent",
        borderStyle: 'solid',
        color: '#fff',
        fontSize: 16,
    },
    floatlable: {
        position: 'absolute',
        color: '#fff',
       
    }

})
export default TextBox;

