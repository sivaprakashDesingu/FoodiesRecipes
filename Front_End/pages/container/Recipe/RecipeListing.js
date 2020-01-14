import React, { Component } from 'react';
import { View, Text, Image, ScrollView, Animated, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux'
//import SkeletonContent from "react-native-skeleton-content";
import FullPageLoader from './../../components/Loader/FullpageLoader'
import { CommonCSS } from '../../../assets/styles/common_style'
import { RecipeListingPageCSS } from '../../../assets/styles/recipe_style'
import { Layout } from '../../helper/dimenstion';

import { fetchRecipeListing, fetchRecipeListingByCategory } from './../../../service/action'

class RecipeListing extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {

        const { HeaderReducer, UserDetailsReducer } = this.props
        const { accessToken } = UserDetailsReducer.userDetails

        if (HeaderReducer.selectedRecipe.queryString.length >= 1 &&
            HeaderReducer.selectedRecipe.searchBy === 'key') {
            this.props.fetchRecipeListing(HeaderReducer.selectedRecipe.queryString, accessToken)
        } else {
            this.props.fetchRecipeListingByCategory(HeaderReducer.selectedRecipe.recipeId, accessToken)
        }
    }

    renderHeading(recipeReducer, headerReducer) {
        const { selectedRecipe } = headerReducer
        if (selectedRecipe.searchBy === 'key') {
            return selectedRecipe.queryString
        } else if (recipeReducer.recipeList && recipeReducer.recipeList.length >= 1) {
            return recipeReducer.recipeList[0].recipeCategoryId[0].CategoryName
        }
    }
    renderHeroImage(recipeReducer, headerReducer) {
        const { selectedRecipe } = headerReducer
        if (selectedRecipe.searchBy === 'key') {
            return (
                <Image
                    source={{ uri: 'https://as1.ftcdn.net/jpg/02/35/58/06/500_F_235580666_idI3WWBg5LfnG3pyBzWuoSvnUbucqqFO.jpg' }}
                    style={{ width: Layout.width, height: 350, }}
                    resizeMode="cover"

                />
            )
        } else if (recipeReducer.recipeList && recipeReducer.recipeList.length >= 1) {
            return (
                <Image
                    source={{ uri: recipeReducer.recipeList[0].recipeCategoryId[0].images.banner }}
                    style={{ width: Layout.width, height: 350, }}
                    resizeMode="cover"

                />
            )
        }

    }
    renderRecipesList(recipeReducer, headerReducer) {
        const { selectedRecipe } = headerReducer
        let _result;
        if (selectedRecipe.searchBy !== 'key' && recipeReducer.recipeList && recipeReducer.recipeList.length >= 1) {
            _result = recipeReducer.recipeList.map(function (item, i) {
                return (

                    <View key={item._id} style={RecipeListingPageCSS.resultItem}>
                        <View style={[CommonCSS.flexDirectionColumn, { justifyContent: "center" }]}>
                            <Image
                                source={{ uri: item.images.hero || item.images.banner }}
                                style={{ width: 80, height: 80, }}
                                resizeMode="cover"
                            />
                        </View>
                        <View style={[CommonCSS.flexDirectionColumn, RecipeListingPageCSS.resultContent]}>
                            <Text style={RecipeListingPageCSS.resultRecipeName}>{item.recipeTitle}</Text>
                            <Text style={RecipeListingPageCSS.resultDisctiption}>{item.cookTime} | 3 servings</Text>
                            <Text style={{ paddingTop: 5 }}>Recipe By <Text style={RecipeListingPageCSS.resultDisctiption}>{item.users.fullName}</Text></Text>

                        </View>
                        <View style={[CommonCSS.flexDirectionColumn, { justifyContent: "center" }]}>
                            <TouchableOpacity style={CommonCSS.flexDirectionColumn} onPress={() => { this.props.goBack() }}>
                                <Icon name="md-heart-empty" color="#000" size={30} />
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            })
        } else if (recipeReducer.recipeList) {
            _result = recipeReducer.recipeList.map(function (item, i) {
                return (
                    <View key={item._id} style={RecipeListingPageCSS.resultItem}>
                        <View style={[CommonCSS.flexDirectionColumn, { justifyContent: "center" }]}>
                            <Image
                                source={{ uri: item.images.hero || item.images.banner }}
                                style={{ width: 80, height: 80, }}
                                resizeMode="cover"

                            />
                        </View>
                        <View style={[CommonCSS.flexDirectionColumn, RecipeListingPageCSS.resultContent]}>
                            <Text style={RecipeListingPageCSS.resultRecipeName}>{item.recipeTitle}</Text>
                            <Text style={RecipeListingPageCSS.resultDisctiption}>{item.cookTime} | 3 servings</Text>
                            <Text style={{ paddingTop: 5 }}>Recipe By <Text style={RecipeListingPageCSS.resultDisctiption}>{item.postedBy}</Text></Text>

                        </View>
                        <View style={[CommonCSS.flexDirectionColumn, { justifyContent: "center" }]}>
                            <TouchableOpacity style={CommonCSS.flexDirectionColumn} onPress={() => { this.props.goBack() }}>
                                <Icon name="md-heart-empty" color="#000" size={30} />
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            })
        }
        return _result;
    }


    render() {
        const { RecipeReducer, HeaderReducer } = this.props
        return (
            RecipeReducer.recipeList && RecipeReducer.recipeList.length >= 1 ?
                <View style={CommonCSS.container}>

                    <ScrollView style={{ flex: 1 }}>
                        <View style={{ position: 'relative' }}>
                            <View>
                                <TouchableOpacity style={{ position: 'absolute', top: 40, left: 20, zIndex: 1 }} onPress={() => { this.props.navigation.goBack() }}>
                                    <Icon name="ios-arrow-round-back" color="#fff" size={45} />
                                </TouchableOpacity>
                            </View>
                            {this.renderHeroImage(RecipeReducer, HeaderReducer)}
                            <View style={RecipeListingPageCSS.HeadingSection}>
                                <Text style={RecipeListingPageCSS.categoryHeading}>{this.renderHeading(RecipeReducer, HeaderReducer)}</Text>
                                <View style={RecipeListingPageCSS.separator}></View>
                                <Text style={RecipeListingPageCSS.categoyBenifit}>80 calories per 100 Kgs</Text>
                            </View>
                            <View style={[CommonCSS.overlay, { opacity: .3 }]}></View>
                        </View>
                        <ScrollView style={RecipeListingPageCSS.resultContainer}>
                            <Text style={RecipeListingPageCSS.containerInfo}>Recipes</Text>
                            <Text style={RecipeListingPageCSS.subInfo}>{RecipeReducer.recipeList.length} recipes available</Text>

                            <View style={RecipeListingPageCSS.resultWrapper}>
                                {this.renderRecipesList(RecipeReducer, HeaderReducer)}
                            </View>
                        </ScrollView>


                    </ScrollView>
                    {/* Fixed Button Logic */}
                    <View style={[CommonCSS.fixedBar, RecipeListingPageCSS.buttonwrapper]}>
                        <TouchableOpacity style={{ width: 300 }}
                            onPress={() => this.props.navigation.navigate("RecipeListing")}>
                            <Text style={RecipeListingPageCSS.footerBtton}>Filter</Text>
                        </TouchableOpacity>
                    </View>
                    {/* Fixed Button Logic */}
                </View>
                : <FullPageLoader />

        )
    }
}


function mapStateToProps(state) {

    const { UserDetailsReducer, HeaderReducer, RecipeReducer } = state
    return {
        UserDetailsReducer,
        HeaderReducer,
        RecipeReducer
    }
}
const mapDispatchToProps = dispatch => ({
    fetchRecipeListing: (keyword, accessToken) =>
        dispatch(fetchRecipeListing(keyword, accessToken)),
    fetchRecipeListingByCategory: (recipeId, accessToken) =>
        dispatch(fetchRecipeListingByCategory(recipeId, accessToken))
})

export default connect(mapStateToProps, mapDispatchToProps)(RecipeListing)
//export default RecipeListing;

