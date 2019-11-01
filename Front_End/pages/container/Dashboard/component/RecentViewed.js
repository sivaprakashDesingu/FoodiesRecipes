import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux'
import HeaderBar from './../../../components/Header/Header'
import { CommonCSS } from '../../../../assets/styles/common_style'
import { DashboardPageCSS } from '../../../../assets/styles/dashboard_style'
import RecipeTile from './../../../components/Tile/RecipeTile'

function RecentLViewed(props) {

    return (
        <View style={{ padding: 15 }}>
            <Text style={DashboardPageCSS.sectionTitle}>{props.title}</Text>
            <ScrollView onResponderMove={() => { alert('outer responding'); }} horizontal={true} style={{ marginTop: 20 }}>
                <View style={[CommonCSS.flexDirectionRow, { marginRight: 20 }]}>
                    <RecipeTile
                        imgSrc={'priyani.jpg'}
                        date={'Sep 16 2019'}
                        author={'Sivaprakash'}
                        recipeTitle={'How to prepare mutton briyani'}
                        tags={'SounthIndian,Lunch,Dinner,SounthIndian,Lunch,Dinner'}
                        style={{ marginRight: 20 }}
                    />
                </View>
                <View style={[CommonCSS.flexDirectionRow, { marginRight: 15 }]}>
                    <RecipeTile
                        imgSrc={'priyani.jpg'}
                        date={'Sep 16 2019'}
                        author={'Sivaprakash'}
                        recipeTitle={'How to prepare mutton briyani'}
                        tags={'SounthIndian,Lunch,Dinner,SounthIndian,Lunch,Dinner'}
                    />
                </View>
                <View style={[CommonCSS.flexDirectionRow, { marginRight: 15 }]}>
                    <RecipeTile
                        imgSrc={'priyani.jpg'}
                        date={'Sep 16 2019'}
                        author={'Sivaprakash'}
                        recipeTitle={'How to prepare mutton briyani'}
                        tags={'SounthIndian,Lunch,Dinner,SounthIndian,Lunch,Dinner'}
                    />
                </View>
                <View style={[CommonCSS.flexDirectionRow, { marginRight: 15 }]}>
                    <RecipeTile
                        imgSrc={'priyani.jpg'}
                        date={'Sep 16 2019'}
                        author={'Sivaprakash'}
                        recipeTitle={'How to prepare mutton briyani'}
                        tags={'SounthIndian,Lunch,Dinner,SounthIndian,Lunch,Dinner'}
                    />
                </View>
            </ScrollView>
        </View>
    )

}


export default RecentLViewed;
