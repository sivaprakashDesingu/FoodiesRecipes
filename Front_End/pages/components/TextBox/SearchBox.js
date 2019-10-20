import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Text, Animated, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Layout, AppColor } from '../../helper/dimenstion';
import { CommonCSS } from '../Style';
import { ScrollView } from 'react-native-gesture-handler';

class SearchBox extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {
        const { value, type,label } = this.props

        return (

            <View style={{ flexDirection: 'row', justifyContent: "center", position: 'relative' }}>

                <TextInput
                    style={style.searchField}
                    onChangeText={(value) => this.props.onTextValue(type === 'search' ? value : { value })}
                    value={value}
                    placeholder ={label}
                />

                <TouchableOpacity
                    style={style.searchIconSection}>
                    <Icon name="md-arrow-forward" color="#fff" size={35} />
                </TouchableOpacity>
               
            </View>
            
        )
    }
}

const style = StyleSheet.create({
    inputwrapper: {
        position: 'relative',
        marginTop: 20,
        marginBottom: 40,
    },
    searchwrapper: {
        width: Layout.width - 100
    },
    searchField: {
        width: Layout.width - 100,
        backgroundColor: AppColor.white,
        borderRadius: 10,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 80,
        color: AppColor.black,
        fontSize: 16,
    },
    searchIconSection: {
        position: 'absolute',
        width: 60,
        height: 68,
        backgroundColor: AppColor.secondaryColor,
        right: 20,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        flexDirection:'row',
        justifyContent:"center",
        alignItems:"center"
    },
    inputField: {
        padding: 10,
        paddingLeft: 0,
        paddingBottom: 5,
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
export default SearchBox;

