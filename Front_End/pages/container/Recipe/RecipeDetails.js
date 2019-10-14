import React, { Component } from 'react';
import { View, Text, Image, ScrollView, Animated, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import HeaderBar from './../../components/Header'
//import { CommonCSS, RecipePageCSS } from '../../Style'
import { CommonCSS } from '../../../assets/styles/common_style'
import { RecipePageCSS } from '../../../assets/styles/recipe_style'

class RecipeDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            height: 0,
            toggleItemHeight: 0,
            animation: new Animated.Value(0),
            expanded: false,
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
                <View>
                    <Image
                        source={{ uri: 'https://foodwithfeeling.com/wp-content/uploads/2017/01/Vegan-Tikka-Masala-8.jpg' }}
                        style={RecipePageCSS.recipeBannerImage} />
                </View>
                <View style={RecipePageCSS.desciptoinWrapper}>
                    <Text style={RecipePageCSS.heading}>Vegiterian Tikka Masala</Text>
                    <View>
                        <Text style={RecipePageCSS.ownDes}>
                            Recipe by
                        <Text style={RecipePageCSS.ownDesName}> Shiva</Text>
                        </Text>

                    </View>

                    <View style={CommonCSS.flexDirectionRow}>
                        <Text style={RecipePageCSS.recipeTags}>Lunch</Text>
                        <Text style={RecipePageCSS.recipeTags}>Indian</Text>
                        <Text style={RecipePageCSS.recipeTags}>Vegan</Text>
                    </View>

                    <View style={RecipePageCSS.horizontalCenteredLine}></View>
                    <View >

                        <Text style={RecipePageCSS.ingredientHeading}>Ingredients</Text>

                        <ScrollView style={CommonCSS.flexDirectionRow} horizontal={true}>
                            <Text style={RecipePageCSS.recipeTags} >Lunch</Text>
                            <Text style={RecipePageCSS.recipeTags} >Indian</Text>
                            <Text style={RecipePageCSS.recipeTags} >Vegan</Text>
                            <Text style={RecipePageCSS.recipeTags} >Lunch</Text>
                            <Text style={RecipePageCSS.recipeTags} >Indian</Text>
                            <Text style={RecipePageCSS.recipeTags} >Vegan</Text>
                            <Text style={RecipePageCSS.recipeTags} >Lunch</Text>
                            <Text style={RecipePageCSS.recipeTags} >Indian</Text>
                            <Text style={RecipePageCSS.recipeTags} >Vegan</Text>
                            <Text style={RecipePageCSS.recipeTags} >Lunch</Text>
                            <Text style={RecipePageCSS.recipeTags} >Indian</Text>
                            <Text style={RecipePageCSS.recipeTags} >Vegan</Text>
                        </ScrollView>
                    </View>
                    <Text style={RecipePageCSS.ingredientHeading}>Steps to Prepare Recipe.</Text>

                    <View>
                        <View style={[CommonCSS.listWrapper]}>
                            <View style={CommonCSS.listBulllet}>
                                <Text>{'\u2022'}</Text>
                            </View>
                            <View style={CommonCSS.listText}>
                                <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</Text>
                            </View>
                        </View>
                        <View style={[CommonCSS.listWrapper]}>
                            <View style={CommonCSS.listBulllet}>
                                <Text>{'\u2022'}</Text>
                            </View>
                            <View style={CommonCSS.listText}>
                                <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</Text>
                            </View>
                        </View>

                        <View style={[CommonCSS.listWrapper]}>
                            <View style={CommonCSS.listBulllet}>
                                <Text>{'\u2022'}</Text>
                            </View>
                            <View style={CommonCSS.listText}>
                                <Text>Lorem Ipsum is simply dummy text of.</Text>
                            </View>
                        </View>
                        <View style={[CommonCSS.listWrapper]}>
                            <View style={CommonCSS.listBulllet}>
                                <Text>{'\u2022'}</Text>
                            </View>
                            <View style={CommonCSS.listText}>
                                <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</Text>
                            </View>
                        </View>
                        <View style={[CommonCSS.listWrapper]}>
                            <View style={CommonCSS.listBulllet}>
                                <Text>{'\u2022'}</Text>
                            </View>
                            <View style={CommonCSS.listText}>
                                <Text>known printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also </Text>
                            </View>
                        </View>
                        <View style={[CommonCSS.listWrapper]}>
                            <View style={CommonCSS.listBulllet}>
                                <Text>{'\u2022'}</Text>
                            </View>
                            <View style={CommonCSS.listText}>
                                <Text>but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets</Text>
                            </View>
                        </View>

                    </View>


                </View>
            </ScrollView>
        )
    }
}

export default RecipeDetails;

