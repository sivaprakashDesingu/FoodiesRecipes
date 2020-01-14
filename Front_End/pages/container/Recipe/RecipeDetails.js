import React, { Component } from 'react';
import { View, Text, Image, ScrollView, Animated, TouchableOpacity, StatusBar } from 'react-native';
import { connect } from 'react-redux'
import { Video } from './../../components'
import FullPageLoader from './../../components/Loader/FullpageLoader'
import HeaderBar from './../../components/Header/Header'
import {
    fetchSuggestionSearch,
    setActiveRecipeId
} from '../../../service/action/header-action'
import { fetchRecipeDetails } from './../../../service/action'
import { CommonCSS } from '../../../assets/styles/common_style'
import { RecipePageCSS } from '../../../assets/styles/recipe_style'
import { DashboardPageCSS } from '../../../assets/styles/dashboard_style'


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

    componentDidMount() {
        const { selectedRecipe } = this.props.HeaderReducer
        const { UserDetailsReducer } = this.props
        const { accessToken } = UserDetailsReducer.userDetails

        this.props.fetchRecipeDetails(selectedRecipe.recipeId, accessToken)
    }
    componentWillReceiveProps(nextProps) {

    }

    renderRecipeProcess(steps) {
        const steprItem = steps.map(function (item, i) {

            return (
                <View key={i + item} style={[CommonCSS.listWrapper]}>
                    <View style={CommonCSS.listBulllet}>
                        <Text>{'\u2022'}</Text>
                    </View>
                    <View style={CommonCSS.listText}>
                        <Text>{item}</Text>
                    </View>
                </View>
            )
        })
        return steprItem;
    }


    renderHeroImage = (url) => {
        return (
            <Image
                source={{ uri: url }}
                style={RecipePageCSS.recipeBannerImage} />
        )
    }
    renderMidpage(data) {

        const _recipeTags = data.recipe.Recipetags.map(function (item, i) {
            return (
                <Text key={i} style={RecipePageCSS.recipeTags}>{item}</Text>
            )
        });
        const _recipIngredients = data.ingredients && data.ingredients.map(function (item, i) {

            return (
                item.ingItem.name !== undefined ? <Text key={i} style={RecipePageCSS.recipeTags} >{item.ingItem.name}</Text> : null
            )
        });

        console.log(data.recipe)
        return (
            <View>
                <View>
                    {
                        data.recipe.video && data.recipe.video !== undefined
                            ? <Video
                                url={data.recipe.video} />

                            : this.renderHeroImage(data.recipe.images.hero || data.recipe.images.banner)
                    }
                </View>

                <View style={RecipePageCSS.desciptoinWrapper}>
                    <Text style={RecipePageCSS.heading}>{data.recipe.recipeTitle}</Text>
                    <View>
                        <Text style={RecipePageCSS.ownDes}>
                            Recipe by
                        <Text style={RecipePageCSS.ownDesName}> {data.userName}</Text>
                        </Text>

                    </View>

                    <View style={CommonCSS.flexDirectionRow}>
                        {_recipeTags}
                    </View>

                    <View style={RecipePageCSS.horizontalCenteredLine}></View>
                    <View >

                        <Text style={RecipePageCSS.ingredientHeading}>Ingredients</Text>

                        <ScrollView style={CommonCSS.flexDirectionRow} horizontal={true}>
                            {_recipIngredients}
                        </ScrollView>
                    </View>
                    {data.process && data.process._id && <View>
                        <Text style={RecipePageCSS.ingredientHeading}>Steps to Prepare Recipe.</Text>

                        <ScrollView >
                            {this.renderRecipeProcess(data.process.steps)}
                        </ScrollView>
                    </View>}


                </View>
            </View>
        )
    }
    render() {
        const { RecipeReducer } = this.props
        return (
            <View style={CommonCSS.container}>
                <StatusBar backgroundColor="blue" barStyle="light-content" />
                {/* <View >
                    
                </View> */}
                <HeaderBar
                    searchActive={(key) => this.searchActive(key)}
                    goBack={() => { this.props.navigation.goBack() }}
                    headerTitle={"Recipe"}
                    showSearch={true}
                    searchResultData={this.props.HeaderReducer}
                    navigatePage={(id, page) => this.navigatePage(id, page)}
                />
                <ScrollView style={CommonCSS.fixedMidwrapper}>
                    {RecipeReducer.recipeDetails._id !== undefined ?
                        this.renderMidpage(RecipeReducer.recipeDetails)
                        : <FullPageLoader />}

                </ScrollView>
                {/* Fixed Button Logic */}
                <View style={[CommonCSS.fixedBar, DashboardPageCSS.buttonwrapper]}>
                    <TouchableOpacity style={{ width: 300 }}

                        onPress={() => this.props.navigation.navigate("RecipeListing")}>
                        <Text style={DashboardPageCSS.footerBtton}>Order Recipe</Text>
                    </TouchableOpacity>
                </View>
                {/* Fixed Button Logic */}
            </View>

        )
    }
}


function mapStateToProps(state) {

    const { RecipeReducer, HeaderReducer, UserDetailsReducer } = state
    return {
        HeaderReducer,
        RecipeReducer,
        UserDetailsReducer
    }
}
const mapDispatchToProps = dispatch => ({
    fetchRecipeDetails: (recipeId, accessToken) =>
        dispatch(fetchRecipeDetails(recipeId, accessToken))
})

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetails)

