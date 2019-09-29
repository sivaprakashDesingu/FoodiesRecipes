import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { View, Text, Image, ScrollView, } from 'react-native';
import HeaderBar from './../components/Header'
import { CommonCSS, RecipePageCSS } from '../../Style'

class Recipe extends React.Component {
    constructor(props) {
        super(props)
    }

    static navigationOptions = {
        headerTitle: <HeaderBar headerTitle="Recipe" />,
        headerStyle: {
            backgroundColor: "#fa7776"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
            fontWeight: "bold"
        }
    };

    render() {
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
                    <Text >
                        <Text style={RecipePageCSS.recepeFeatureItem}>
                            <Image
                                style={RecipePageCSS.recipeFeatureItemImage}
                                source={require('../../assets/images/rewind-time.png')} />
                            <Text > 30 Mins </Text>
                        </Text>

                        <Text style={RecipePageCSS.recepeFeatureItem}>
                            <Image
                                style={RecipePageCSS.recipeFeatureItemImage}
                                source={require('../../assets/images/bell-covering-hot-dish.png')} />
                            <Text > 4 Serving </Text>
                        </Text>
                    </Text>


                </View>
            </ScrollView>
        )
    }
}

export default Recipe;

