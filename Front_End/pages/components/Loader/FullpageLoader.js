import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import {CommonCSS,LoaderComponentStyle} from './../Style'

function FullPageLoader(props) {
    return (
        <View style={LoaderComponentStyle.loaderContainer}>
            <View style={CommonCSS.bothDirectionCenter}>
                
                <Image source={require('./../../../assets/images/loader.gif')} 
                style={{width:150,height:150}}/>
                {/* <Text style={{fontSize:20}}>Loading......</Text> */}
                
            </View>
        </View>
    );
}

export default FullPageLoader;
