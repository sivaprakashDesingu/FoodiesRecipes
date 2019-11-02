import React from 'react';
import ReactDOM from 'react-dom';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, Image, TouchableOpacity, ScrollView, Animated, Easing } from 'react-native';
import SearchBox from '../../components/TextBox/SearchBox'
import { CommonCSS, headerComponentCSS } from './../Style'
import { Layout } from './../../helper/dimenstion'

class HeaderBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchBar: false,
            text: '',
            height: new Animated.Value(0),
        }
    }


    isSearchBarEnabled() {
        const { searchBar } = this.state
        if (searchBar) {
            this.state.height.setValue(0);
            Animated.timing(this.state.height, {
                toValue: 0,
                duration: 500,
                easing: Easing.linear
            }).start()
            this.setState({ searchBar: false })
        } else {
            this.state.height.setValue(Layout.height);
            Animated.timing(this.state.height, {
                toValue: Layout.height,
                duration: 500,
                easing: Easing.linear
            }).start()
            this.setState({ searchBar: true })
        }

    }
    getTheRecipeCategoryRepeatedCount(result) {
        if (result.categoryList !== undefined) {
            result.categoryList.forEach((x, i) => {
                result.categoryList[i].count = 0 //setting up the default count as 0
                result.recipes.forEach(y => {
                    if (y.recipeCategoryId.includes(x._id)) {
                        result.categoryList[i].count = result.categoryList[i].count + 1
                    }
                });
            });
        } else {
            return 0
        }
        return result
    }
    renderRecipeResult(data) {

        if (data.length === 0) {
            return (
                null
            )
        } else {
            const props = this.props
            const result = data.map(function (data, i) {
                return (
                    <TouchableOpacity
                        onPress={() => [props.navigatePage(data._id, 'RecipeDetails', 'Category'), this.isSearchBarEnabled()]}
                        key={data._id}
                        style={[headerComponentCSS.resultItem, CommonCSS.flexDirectionRow]}>
                            
                        <View style={[headerComponentCSS.resultItemTag, CommonCSS.flexDirectionColumn]}>
                            <Text>Recipe</Text>
                        </View>
                        <View style={[headerComponentCSS.resultItemRecipe, CommonCSS.flexDirectionColumn]}>
                            <Text>{data.recipeTitle}</Text>
                        </View>

                    </TouchableOpacity>
                )
            }.bind(this))
            return result;
        }
    }

    renderEmptyResult() {
        return (
            <View style={[headerComponentCSS.resultWrapper]}>
                <Text>No data Found</Text>
            </View>
        )
    }

    renderCategoryResult(data) {

        if (data === 0) {
            return (
                null
            )
        } else {
            const props = this.props
            const { text } = this.state

            const result = data.categoryList.map(function (data, i) {
                return (
                    <TouchableOpacity onPress={() => [props.navigatePage(data._id, 'RecipeListing', 'Category'), , this.isSearchBarEnabled()]} key={data._id} style={[headerComponentCSS.resultItem, CommonCSS.flexDirectionRow]}>
                        <View style={[headerComponentCSS.resultItemTag, CommonCSS.flexDirectionColumn]}>
                            <Text>Category</Text>
                        </View>
                        <View style={[headerComponentCSS.resultItemRecipe, CommonCSS.flexDirectionColumn]}>
                            <Text>{data.CategoryName}</Text>
                        </View>
                        <View style={[headerComponentCSS.resultItemCount, CommonCSS.flexDirectionColumn]}>
                            <Text>{data.count} Recipes</Text>
                        </View>
                    </TouchableOpacity>
                )
            }.bind(this))
            return result;
        }

    }

    render() {
        const { headerTitle, showSearch, searchResultData } = this.props
        const { searchBar, text, height } = this.state
        const categoryResult = this.getTheRecipeCategoryRepeatedCount(searchResultData === undefined ? 0 : searchResultData.suggestionRecipeByCategory)
        return (
            <View style={[CommonCSS.fixedHeaderBar, searchBar ? { height: Layout.height } : { height: 80 }]}>
                <View style={[CommonCSS.container]}>
                    <View style={[headerComponentCSS.headerSection, CommonCSS.flexDirectionRow]}>
                        <TouchableOpacity style={CommonCSS.flexDirectionColumn} onPress={() => { this.props.goBack() }}>
                            <Icon name="ios-arrow-round-back" color="#fff" size={45} />
                        </TouchableOpacity>
                        <View style={[{ flex: 1 }, CommonCSS.bothDirectionCenter]}>
                            <Text style={headerComponentCSS.title}>{headerTitle}</Text>
                        </View >
                        {showSearch ? <TouchableOpacity style={[CommonCSS.flexDirectionColumn]}
                            onPress={this.isSearchBarEnabled.bind(this)}>
                            <Icon name="ios-search" color="#fff" size={40} />
                        </TouchableOpacity> : null}

                    </View>


                    <Animated.ScrollView style={[{ height: height }, headerComponentCSS.searchBox,
                    searchBar ? headerComponentCSS.activesearchBox :
                        headerComponentCSS.inActivesearchBox]}>
                        <View style={headerComponentCSS.searchFieldWrapper}>
                            <View>
                                <SearchBox
                                    searchActive={(key) => this.props.searchActive(key)}
                                    label={"Search"}
                                    type={"search"}
                                    value={text}
                                    onTextValue={(value) => this.setState({ text: value })}
                                    searchByCategory={(id) =>
                                        [this.props.navigatePage(id, 'RecipeListing', 'key'),
                                        this.isSearchBarEnabled()]
                                    }
                                />
                            </View>
                        </View>
                        <View style={headerComponentCSS.searchCloseIconSection}>
                            <TouchableOpacity
                                onPress={this.isSearchBarEnabled.bind(this)}
                                style={headerComponentCSS.searchCloseIconInnerSection}>
                                <Icon name="ios-close" color="#fff" size={40} />
                            </TouchableOpacity>
                        </View>
                        <ScrollView style={headerComponentCSS.resultContainer}>

                            <View style={[CommonCSS.flexDirectionRow, { marginBottom: 15 }]}>
                                <Text style={headerComponentCSS.KeyWordSearchTag}>KeyWord Search For: </Text>
                                <Text style={headerComponentCSS.KeyWordSearchValue}>{text.length >= 1 ? `"${text}"` : null}</Text>
                            </View>
                            <View style={[CommonCSS.flexDirectionRow, { marginBottom: 15 }]}>
                                <Text style={headerComponentCSS.KeyWordSearchTag}>SUGGESTIONS </Text>

                            </View>
                            {this.props.showSearch ? <View style={[headerComponentCSS.resultWrapper]}>
                                {categoryResult === 0 && searchResultData.suggestionRecipe.length === 0
                                    ? this.renderEmptyResult() :
                                    [this.renderCategoryResult(categoryResult), this.renderRecipeResult(searchResultData.suggestionRecipe)]}
                            </View>
                                : null}



                        </ScrollView>


                    </Animated.ScrollView>

                </View>

            </View>
        )
    }

}

export default HeaderBar;

