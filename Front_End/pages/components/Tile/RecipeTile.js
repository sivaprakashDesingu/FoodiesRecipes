import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    Animated,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { CommonCSS, RecipeTileComponentCSS } from './../Style'
import { Title } from 'react-native-paper';

function RecipeTile(props) {

    const { imgSrc, date, author, recipeTitle, tags } = props
    const tagList = tags.split(",")

    return (
        <View style={RecipeTileComponentCSS.tileSection}>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Image
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaeUkOrvZDZIVRcNiS5y8jBqSP-HdKsGw4p6qYzocnJVuFhxb_' }}
                    style={{ width: 200, height: 200, borderRadius: 5 }}
                    resizeMode="stretch"

                />
            </View>
            <View style={[CommonCSS.overlay, RecipeTileComponentCSS.overlauRadious]}></View>
            <View style={RecipeTileComponentCSS.topSection}>
                <Text style={RecipeTileComponentCSS.postedDate}>
                    {`Posted On ${date}`}
                </Text>
                <Title style={RecipeTileComponentCSS.Title}>
                    {recipeTitle}
                </Title>
            </View>
            <ScrollView horizontal style={[RecipeTileComponentCSS.tegSection]}>
                <View style={[CommonCSS.bothDirectionCenter,]}>
                    {tagList.map(function (data, i) {
                        return (
                           
                                <Text numberOfLines={1} key={i} style={RecipeTileComponentCSS.tagItems}>
                                    {data}
                                </Text>
                            

                        )
                    })}
                </View>
            </ScrollView>
        </View>
    );
    //}
}


export default RecipeTile;
