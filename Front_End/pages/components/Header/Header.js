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
    
    render() {
        const { headerTitle, showSearch } = this.props
        const { searchBar, text, height } = this.state
        
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
                                <Text style={headerComponentCSS.KeyWordSearchValue}>"Briyani"</Text>
                            </View>
                            <View style={[CommonCSS.flexDirectionRow, { marginBottom: 15 }]}>
                                <Text style={headerComponentCSS.KeyWordSearchTag}>SUGGESTIONS </Text>

                            </View>

                            <View style={[headerComponentCSS.resultWrapper]}>
                                {/* Result Item */}
                                <View style={[headerComponentCSS.resultItem, CommonCSS.flexDirectionRow]}>
                                    <View style={[headerComponentCSS.resultItemTag, CommonCSS.flexDirectionColumn]}>
                                        <Text>Recipe</Text>
                                    </View>
                                    <View style={[headerComponentCSS.resultItemRecipe, CommonCSS.flexDirectionColumn]}>
                                        <Text>How to prepare Mutton briyani</Text>
                                    </View>
                                    <View style={[headerComponentCSS.resultItemCount, CommonCSS.flexDirectionColumn]}>
                                        <Text>200 Recipes</Text>
                                    </View>
                                </View>
                                {/* Result Item */}

                                {/* Result Item */}
                                <View style={[headerComponentCSS.resultItem, CommonCSS.flexDirectionRow]}>
                                    <View style={[headerComponentCSS.resultItemTag, CommonCSS.flexDirectionColumn]}>
                                        <Text>Recipe</Text>
                                    </View>
                                    <View style={[headerComponentCSS.resultItemRecipe, CommonCSS.flexDirectionColumn]}>
                                        <Text>How to prepare Mutton briyani</Text>
                                    </View>
                                    <View style={[headerComponentCSS.resultItemCount, CommonCSS.flexDirectionColumn]}>
                                        <Text>200 Recipes</Text>
                                    </View>
                                </View>
                                {/* Result Item */}{/* Result Item */}
                                <View style={[headerComponentCSS.resultItem, CommonCSS.flexDirectionRow]}>
                                    <View style={[headerComponentCSS.resultItemTag, CommonCSS.flexDirectionColumn]}>
                                        <Text>Recipe</Text>
                                    </View>
                                    <View style={[headerComponentCSS.resultItemRecipe, CommonCSS.flexDirectionColumn]}>
                                        <Text>How to prepare Mutton briyani</Text>
                                    </View>
                                    <View style={[headerComponentCSS.resultItemCount, CommonCSS.flexDirectionColumn]}>
                                        <Text>200 Recipes</Text>
                                    </View>
                                </View>
                                {/* Result Item */}{/* Result Item */}
                                <View style={[headerComponentCSS.resultItem, CommonCSS.flexDirectionRow]}>
                                    <View style={[headerComponentCSS.resultItemTag, CommonCSS.flexDirectionColumn]}>
                                        <Text>Recipe</Text>
                                    </View>
                                    <View style={[headerComponentCSS.resultItemRecipe, CommonCSS.flexDirectionColumn]}>
                                        <Text>How to prepare Mutton briyani</Text>
                                    </View>
                                    <View style={[headerComponentCSS.resultItemCount, CommonCSS.flexDirectionColumn]}>
                                        <Text>200 Recipes</Text>
                                    </View>
                                </View>
                                {/* Result Item */}{/* Result Item */}
                                <View style={[headerComponentCSS.resultItem, CommonCSS.flexDirectionRow]}>
                                    <View style={[headerComponentCSS.resultItemTag, CommonCSS.flexDirectionColumn]}>
                                        <Text>Recipe</Text>
                                    </View>
                                    <View style={[headerComponentCSS.resultItemRecipe, CommonCSS.flexDirectionColumn]}>
                                        <Text>How to prepare Mutton briyani</Text>
                                    </View>
                                    <View style={[headerComponentCSS.resultItemCount, CommonCSS.flexDirectionColumn]}>
                                        <Text>200 Recipes</Text>
                                    </View>
                                </View>
                                {/* Result Item */}{/* Result Item */}
                                <View style={[headerComponentCSS.resultItem, CommonCSS.flexDirectionRow]}>
                                    <View style={[headerComponentCSS.resultItemTag, CommonCSS.flexDirectionColumn]}>
                                        <Text>Recipe</Text>
                                    </View>
                                    <View style={[headerComponentCSS.resultItemRecipe, CommonCSS.flexDirectionColumn]}>
                                        <Text>How to prepare Mutton briyani</Text>
                                    </View>
                                    <View style={[headerComponentCSS.resultItemCount, CommonCSS.flexDirectionColumn]}>
                                        <Text>200 Recipes</Text>
                                    </View>
                                </View>
                                {/* Result Item */}{/* Result Item */}
                                <View style={[headerComponentCSS.resultItem, CommonCSS.flexDirectionRow]}>
                                    <View style={[headerComponentCSS.resultItemTag, CommonCSS.flexDirectionColumn]}>
                                        <Text>Recipe</Text>
                                    </View>
                                    <View style={[headerComponentCSS.resultItemRecipe, CommonCSS.flexDirectionColumn]}>
                                        <Text>How to prepare Mutton briyani</Text>
                                    </View>
                                    <View style={[headerComponentCSS.resultItemCount, CommonCSS.flexDirectionColumn]}>
                                        <Text>200 Recipes</Text>
                                    </View>
                                </View>
                                {/* Result Item */}{/* Result Item */}
                                <View style={[headerComponentCSS.resultItem, CommonCSS.flexDirectionRow]}>
                                    <View style={[headerComponentCSS.resultItemTag, CommonCSS.flexDirectionColumn]}>
                                        <Text>Recipe</Text>
                                    </View>
                                    <View style={[headerComponentCSS.resultItemRecipe, CommonCSS.flexDirectionColumn]}>
                                        <Text>How to prepare Mutton briyani</Text>
                                    </View>
                                    <View style={[headerComponentCSS.resultItemCount, CommonCSS.flexDirectionColumn]}>
                                        <Text>200 Recipes</Text>
                                    </View>
                                </View>
                                {/* Result Item */}{/* Result Item */}
                                <View style={[headerComponentCSS.resultItem, CommonCSS.flexDirectionRow]}>
                                    <View style={[headerComponentCSS.resultItemTag, CommonCSS.flexDirectionColumn]}>
                                        <Text>Recipe</Text>
                                    </View>
                                    <View style={[headerComponentCSS.resultItemRecipe, CommonCSS.flexDirectionColumn]}>
                                        <Text>How to prepare Mutton briyani</Text>
                                    </View>
                                    <View style={[headerComponentCSS.resultItemCount, CommonCSS.flexDirectionColumn]}>
                                        <Text>200 Recipes</Text>
                                    </View>
                                </View>
                                {/* Result Item */}{/* Result Item */}
                                <View style={[headerComponentCSS.resultItem, CommonCSS.flexDirectionRow]}>
                                    <View style={[headerComponentCSS.resultItemTag, CommonCSS.flexDirectionColumn]}>
                                        <Text>Recipe</Text>
                                    </View>
                                    <View style={[headerComponentCSS.resultItemRecipe, CommonCSS.flexDirectionColumn]}>
                                        <Text>How to prepare Mutton briyani</Text>
                                    </View>
                                    <View style={[headerComponentCSS.resultItemCount, CommonCSS.flexDirectionColumn]}>
                                        <Text>200 Recipes</Text>
                                    </View>
                                </View>
                                {/* Result Item */}{/* Result Item */}
                                <View style={[headerComponentCSS.resultItem, CommonCSS.flexDirectionRow]}>
                                    <View style={[headerComponentCSS.resultItemTag, CommonCSS.flexDirectionColumn]}>
                                        <Text>Recipe</Text>
                                    </View>
                                    <View style={[headerComponentCSS.resultItemRecipe, CommonCSS.flexDirectionColumn]}>
                                        <Text>How to prepare Mutton briyani</Text>
                                    </View>
                                    <View style={[headerComponentCSS.resultItemCount, CommonCSS.flexDirectionColumn]}>
                                        <Text>200 Recipes</Text>
                                    </View>
                                </View>
                                {/* Result Item */}{/* Result Item */}
                                <View style={[headerComponentCSS.resultItem, CommonCSS.flexDirectionRow]}>
                                    <View style={[headerComponentCSS.resultItemTag, CommonCSS.flexDirectionColumn]}>
                                        <Text>Recipe</Text>
                                    </View>
                                    <View style={[headerComponentCSS.resultItemRecipe, CommonCSS.flexDirectionColumn]}>
                                        <Text>How to prepare Mutton briyani</Text>
                                    </View>
                                    <View style={[headerComponentCSS.resultItemCount, CommonCSS.flexDirectionColumn]}>
                                        <Text>200 Recipes</Text>
                                    </View>
                                </View>
                                {/* Result Item */}{/* Result Item */}
                                <View style={[headerComponentCSS.resultItem, CommonCSS.flexDirectionRow]}>
                                    <View style={[headerComponentCSS.resultItemTag, CommonCSS.flexDirectionColumn]}>
                                        <Text>Recipe</Text>
                                    </View>
                                    <View style={[headerComponentCSS.resultItemRecipe, CommonCSS.flexDirectionColumn]}>
                                        <Text>How to prepare Mutton briyani</Text>
                                    </View>
                                    <View style={[headerComponentCSS.resultItemCount, CommonCSS.flexDirectionColumn]}>
                                        <Text>200 Recipes</Text>
                                    </View>
                                </View>
                                {/* Result Item */}
                                {/* Result Item */}{/* Result Item */}
                                <View style={[headerComponentCSS.resultItem, CommonCSS.flexDirectionRow]}>
                                    <View style={[headerComponentCSS.resultItemTag, CommonCSS.flexDirectionColumn]}>
                                        <Text>Recipe</Text>
                                    </View>
                                    <View style={[headerComponentCSS.resultItemRecipe, CommonCSS.flexDirectionColumn]}>
                                        <Text>How to prepare Mutton briyani</Text>
                                    </View>
                                    <View style={[headerComponentCSS.resultItemCount, CommonCSS.flexDirectionColumn]}>
                                        <Text>200 Recipes</Text>
                                    </View>
                                </View>
                                {/* Result Item */}{/* Result Item */}
                                <View style={[headerComponentCSS.resultItem, CommonCSS.flexDirectionRow]}>
                                    <View style={[headerComponentCSS.resultItemTag, CommonCSS.flexDirectionColumn]}>
                                        <Text>Recipe</Text>
                                    </View>
                                    <View style={[headerComponentCSS.resultItemRecipe, CommonCSS.flexDirectionColumn]}>
                                        <Text>How to prepare Mutton briyani</Text>
                                    </View>
                                    <View style={[headerComponentCSS.resultItemCount, CommonCSS.flexDirectionColumn]}>
                                        <Text>200 Recipes</Text>
                                    </View>
                                </View>
                                {/* Result Item */}{/* Result Item */}
                                <View style={[headerComponentCSS.resultItem, CommonCSS.flexDirectionRow]}>
                                    <View style={[headerComponentCSS.resultItemTag, CommonCSS.flexDirectionColumn]}>
                                        <Text>Recipe</Text>
                                    </View>
                                    <View style={[headerComponentCSS.resultItemRecipe, CommonCSS.flexDirectionColumn]}>
                                        <Text>How to prepare Mutton briyani</Text>
                                    </View>
                                    <View style={[headerComponentCSS.resultItemCount, CommonCSS.flexDirectionColumn]}>
                                        <Text>200 Recipes</Text>
                                    </View>
                                </View>
                                {/* Result Item */}{/* Result Item */}
                                <View style={[headerComponentCSS.resultItem, CommonCSS.flexDirectionRow]}>
                                    <View style={[headerComponentCSS.resultItemTag, CommonCSS.flexDirectionColumn]}>
                                        <Text>Recipe</Text>
                                    </View>
                                    <View style={[headerComponentCSS.resultItemRecipe, CommonCSS.flexDirectionColumn]}>
                                        <Text>How to prepare Mutton briyani</Text>
                                    </View>
                                    <View style={[headerComponentCSS.resultItemCount, CommonCSS.flexDirectionColumn]}>
                                        <Text>200 Recipes</Text>
                                    </View>
                                </View>
                                {/* Result Item */}{/* Result Item */}
                                <View style={[headerComponentCSS.resultItem, CommonCSS.flexDirectionRow]}>
                                    <View style={[headerComponentCSS.resultItemTag, CommonCSS.flexDirectionColumn]}>
                                        <Text>Recipe</Text>
                                    </View>
                                    <View style={[headerComponentCSS.resultItemRecipe, CommonCSS.flexDirectionColumn]}>
                                        <Text>How to prepare Mutton briyani</Text>
                                    </View>
                                    <View style={[headerComponentCSS.resultItemCount, CommonCSS.flexDirectionColumn]}>
                                        <Text>200 Recipes</Text>
                                    </View>
                                </View>
                                {/* Result Item */}{/* Result Item */}
                                <View style={[headerComponentCSS.resultItem, CommonCSS.flexDirectionRow]}>
                                    <View style={[headerComponentCSS.resultItemTag, CommonCSS.flexDirectionColumn]}>
                                        <Text>Recipe</Text>
                                    </View>
                                    <View style={[headerComponentCSS.resultItemRecipe, CommonCSS.flexDirectionColumn]}>
                                        <Text>How to prepare Mutton briyani</Text>
                                    </View>
                                    <View style={[headerComponentCSS.resultItemCount, CommonCSS.flexDirectionColumn]}>
                                        <Text>200 Recipes</Text>
                                    </View>
                                </View>
                                {/* Result Item */}{/* Result Item */}
                                <View style={[headerComponentCSS.resultItem, CommonCSS.flexDirectionRow]}>
                                    <View style={[headerComponentCSS.resultItemTag, CommonCSS.flexDirectionColumn]}>
                                        <Text>Recipe</Text>
                                    </View>
                                    <View style={[headerComponentCSS.resultItemRecipe, CommonCSS.flexDirectionColumn]}>
                                        <Text>How to prepare Mutton briyani</Text>
                                    </View>
                                    <View style={[headerComponentCSS.resultItemCount, CommonCSS.flexDirectionColumn]}>
                                        <Text>200 Recipes</Text>
                                    </View>
                                </View>
                                {/* Result Item */}{/* Result Item */}
                                <View style={[headerComponentCSS.resultItem, CommonCSS.flexDirectionRow]}>
                                    <View style={[headerComponentCSS.resultItemTag, CommonCSS.flexDirectionColumn]}>
                                        <Text>Recipe</Text>
                                    </View>
                                    <View style={[headerComponentCSS.resultItemRecipe, CommonCSS.flexDirectionColumn]}>
                                        <Text>How to prepare Mutton briyani</Text>
                                    </View>
                                    <View style={[headerComponentCSS.resultItemCount, CommonCSS.flexDirectionColumn]}>
                                        <Text>200 Recipes</Text>
                                    </View>
                                </View>
                                {/* Result Item */}{/* Result Item */}
                                <View style={[headerComponentCSS.resultItem, CommonCSS.flexDirectionRow]}>
                                    <View style={[headerComponentCSS.resultItemTag, CommonCSS.flexDirectionColumn]}>
                                        <Text>Recipe</Text>
                                    </View>
                                    <View style={[headerComponentCSS.resultItemRecipe, CommonCSS.flexDirectionColumn]}>
                                        <Text>How to prepare Mutton briyani</Text>
                                    </View>
                                    <View style={[headerComponentCSS.resultItemCount, CommonCSS.flexDirectionColumn]}>
                                        <Text>200 Recipes</Text>
                                    </View>
                                </View>
                                {/* Result Item */}{/* Result Item */}
                                <View style={[headerComponentCSS.resultItem, CommonCSS.flexDirectionRow]}>
                                    <View style={[headerComponentCSS.resultItemTag, CommonCSS.flexDirectionColumn]}>
                                        <Text>Recipe</Text>
                                    </View>
                                    <View style={[headerComponentCSS.resultItemRecipe, CommonCSS.flexDirectionColumn]}>
                                        <Text>How to prepare Mutton briyani</Text>
                                    </View>
                                    <View style={[headerComponentCSS.resultItemCount, CommonCSS.flexDirectionColumn]}>
                                        <Text>200 Recipes</Text>
                                    </View>
                                </View>
                                {/* Result Item */}
                            </View>


                        </ScrollView>


                    </Animated.ScrollView>

                </View>

            </View>
        )
    }

}

export default HeaderBar;

