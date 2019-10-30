import React, { Component } from 'react';
import { View, Text, Image, ScrollView, Animated, TouchableOpacity, StatusBar } from 'react-native';
import { connect } from 'react-redux'
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

    // static navigationOptions = {
    //     headerTitle: <HeaderBar headerTitle="Recipe" isSearchNeeded={true} />,
    //     headerStyle: {
    //         backgroundColor: "#fa7776"
    //     },
    //     headerTintColor: "#fff",
    //     headerTitleStyle: {
    //         fontWeight: "bold"
    //     }
    // };

    componentDidMount() {
        const { selectedRecipe } = this.props.HeaderReducer
        const { UserDetailsReducer } = this.props
        const { accessToken } = UserDetailsReducer.userDetails
        //console.warn(selectedRecipe)
        this.props.fetchRecipeDetails(selectedRecipe.recipeId, accessToken)
    }
    componentWillReceiveProps(nextProps) {
        //console.warn(nextProps.RecipeReducer)

        // const {HeaderReducer} = this.props
        // if(nextProps.HeaderReducer.selectedRecipe.queryString !== HeaderReducer.selectedRecipe.queryString ||
        //     nextProps.HeaderReducer.selectedRecipe.recipeId !== HeaderReducer.selectedRecipe.recipeId ||){

        //     }
    }
    renderRecipeProcess(steps) {
        const steprItem = steps.map(function (item, i) {
            return (
                <View key={i} style={[CommonCSS.listWrapper]}>
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

    renderMidpage(data) {

        const _recipeTags = data.recipe.Recipetags.map(function (item, i) {
            return (
                <Text key={i} style={RecipePageCSS.recipeTags}>{item}</Text>
            )
        });
        const _recipIngredients = data.ingredients && data.ingredients[0].map(function (item, i) {
            return (
                <Text key={item.id} style={RecipePageCSS.recipeTags} >{item.Name}</Text>
            )
        });

        return (
            <View>
                <View>
                    <Image
                        source={{ uri: 'https://foodwithfeeling.com/wp-content/uploads/2017/01/Vegan-Tikka-Masala-8.jpg' }}
                        style={RecipePageCSS.recipeBannerImage} />
                </View>
                <View style={RecipePageCSS.desciptoinWrapper}>
                    <Text style={RecipePageCSS.heading}>{data.recipe.recipeTitle}</Text>
                    <View>
                        <Text style={RecipePageCSS.ownDes}>
                            Recipe by
                        <Text style={RecipePageCSS.ownDesName}> {data.userName[0]}</Text>
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
                    {data.process.length>=1 ? <View>
                        <Text style={RecipePageCSS.ingredientHeading}>Steps to Prepare Recipe.</Text>

                        <View>
                            {this.renderRecipeProcess(data.process[0].steps)}
                        </View>
                    </View> : null}


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
    //alert(JSON.stringify(state))
    //console.error(state)
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

