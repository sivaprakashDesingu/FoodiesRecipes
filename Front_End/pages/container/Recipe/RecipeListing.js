import React, { Component } from 'react';
import { View, Text, Image, ScrollView, Animated, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
//import { CommonCSS, RecipePageCSS } from '../../Style'
import { CommonCSS } from '../../../assets/styles/common_style'
import { RecipeListingPageCSS } from '../../../assets/styles/recipe_style'
import { Layout } from '../../helper/dimenstion';

class RecipeListing extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        
        return (
            <View style={CommonCSS.container}>
                <ScrollView style={{ flex: 1 }}>
                    <View style={{ position: 'relative' }}>
                        <View>
                            <TouchableOpacity style={{ position: 'absolute', top: 40, left: 20,zIndex:1 }} onPress={() => { this.props.navigation.goBack() }}>
                                <Icon name="ios-arrow-round-back" color="#fff" size={45} />
                            </TouchableOpacity>
                        </View>
                        <Image
                            source={{ uri: 'https://as1.ftcdn.net/jpg/02/35/58/06/500_F_235580666_idI3WWBg5LfnG3pyBzWuoSvnUbucqqFO.jpg' }}
                            style={{ width: Layout.width, height: 350, }}
                            resizeMode="stretch"

                        />
                        <View style={RecipeListingPageCSS.HeadingSection}>
                            <Text style={RecipeListingPageCSS.categoryHeading}>Sea Bass</Text>
                            <View style={RecipeListingPageCSS.separator}></View>
                            <Text style={RecipeListingPageCSS.categoyBenifit}>80 calories per 100 Kgs</Text>
                        </View>
                        <View style={[CommonCSS.overlay, { opacity: .3 }]}></View>
                    </View>
                    <ScrollView style={RecipeListingPageCSS.resultContainer}>
                        <Text style={RecipeListingPageCSS.containerInfo}>Recipes</Text>
                        <Text style={RecipeListingPageCSS.subInfo}>10 recipes available</Text>
                        <View style={RecipeListingPageCSS.resultWrapper}>
                            <View style={RecipeListingPageCSS.resultItem}>
                                <View style={[CommonCSS.flexDirectionColumn, { justifyContent: "center" }]}>
                                    <Image
                                        source={{ uri: 'https://as1.ftcdn.net/jpg/02/35/58/06/500_F_235580666_idI3WWBg5LfnG3pyBzWuoSvnUbucqqFO.jpg' }}
                                        style={{ width: 80, height: 80, }}
                                        resizeMode="cover"

                                    />
                                </View>
                                <View style={[CommonCSS.flexDirectionColumn, RecipeListingPageCSS.resultContent]}>
                                    <Text style={RecipeListingPageCSS.resultRecipeName}>Grilled Sea bass</Text>
                                    <Text style={RecipeListingPageCSS.resultDisctiption}>8 Mins | 3 servings</Text>
                                </View>
                                <View style={[CommonCSS.flexDirectionColumn, { justifyContent: "center" }]}>
                                    <TouchableOpacity style={CommonCSS.flexDirectionColumn} onPress={() => { this.props.goBack() }}>
                                        <Icon name="md-heart-empty" color="#000" size={30} />
                                    </TouchableOpacity>
                                </View>
                            </View>


                            <View style={RecipeListingPageCSS.resultItem}>
                                <View style={[CommonCSS.flexDirectionColumn, { justifyContent: "center" }]}>
                                    <Image
                                        source={{ uri: 'https://as1.ftcdn.net/jpg/02/35/58/06/500_F_235580666_idI3WWBg5LfnG3pyBzWuoSvnUbucqqFO.jpg' }}
                                        style={{ width: 80, height: 80, }}
                                        resizeMode="cover"

                                    />
                                </View>
                                <View style={[CommonCSS.flexDirectionColumn, RecipeListingPageCSS.resultContent]}>
                                    <Text style={RecipeListingPageCSS.resultRecipeName}>Grilled Sea bass</Text>
                                    <Text style={RecipeListingPageCSS.resultDisctiption}>8 Mins | 3 servings</Text>
                                </View>
                                <View style={[CommonCSS.flexDirectionColumn, { justifyContent: "center" }]}>
                                    <TouchableOpacity style={CommonCSS.flexDirectionColumn} onPress={() => { this.props.goBack() }}>
                                        <Icon name="md-heart-empty" color="#000" size={30} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={RecipeListingPageCSS.resultItem}>
                                <View style={[CommonCSS.flexDirectionColumn, { justifyContent: "center" }]}>
                                    <Image
                                        source={{ uri: 'https://as1.ftcdn.net/jpg/02/35/58/06/500_F_235580666_idI3WWBg5LfnG3pyBzWuoSvnUbucqqFO.jpg' }}
                                        style={{ width: 80, height: 80, }}
                                        resizeMode="cover"

                                    />
                                </View>
                                <View style={[CommonCSS.flexDirectionColumn, RecipeListingPageCSS.resultContent]}>
                                    <Text style={RecipeListingPageCSS.resultRecipeName}>Grilled Sea bass</Text>
                                    <Text style={RecipeListingPageCSS.resultDisctiption}>8 Mins | 3 servings</Text>
                                </View>
                                <View style={[CommonCSS.flexDirectionColumn, { justifyContent: "center" }]}>
                                    <TouchableOpacity style={CommonCSS.flexDirectionColumn} onPress={() => { this.props.goBack() }}>
                                        <Icon name="md-heart-empty" color="#000" size={30} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={RecipeListingPageCSS.resultItem}>
                                <View style={[CommonCSS.flexDirectionColumn, { justifyContent: "center" }]}>
                                    <Image
                                        source={{ uri: 'https://as1.ftcdn.net/jpg/02/35/58/06/500_F_235580666_idI3WWBg5LfnG3pyBzWuoSvnUbucqqFO.jpg' }}
                                        style={{ width: 80, height: 80, }}
                                        resizeMode="cover"

                                    />
                                </View>
                                <View style={[CommonCSS.flexDirectionColumn, RecipeListingPageCSS.resultContent]}>
                                    <Text style={RecipeListingPageCSS.resultRecipeName}>Grilled Sea bass</Text>
                                    <Text style={RecipeListingPageCSS.resultDisctiption}>8 Mins | 3 servings</Text>
                                </View>
                                <View style={[CommonCSS.flexDirectionColumn, { justifyContent: "center" }]}>
                                    <TouchableOpacity style={CommonCSS.flexDirectionColumn} onPress={() => { this.props.goBack() }}>
                                        <Icon name="md-heart-empty" color="#000" size={30} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={RecipeListingPageCSS.resultItem}>
                                <View style={[CommonCSS.flexDirectionColumn, { justifyContent: "center" }]}>
                                    <Image
                                        source={{ uri: 'https://as1.ftcdn.net/jpg/02/35/58/06/500_F_235580666_idI3WWBg5LfnG3pyBzWuoSvnUbucqqFO.jpg' }}
                                        style={{ width: 80, height: 80, }}
                                        resizeMode="cover"

                                    />
                                </View>
                                <View style={[CommonCSS.flexDirectionColumn, RecipeListingPageCSS.resultContent]}>
                                    <Text style={RecipeListingPageCSS.resultRecipeName}>Grilled Sea bass</Text>
                                    <Text style={RecipeListingPageCSS.resultDisctiption}>8 Mins | 3 servings</Text>
                                </View>
                                <View style={[CommonCSS.flexDirectionColumn, { justifyContent: "center" }]}>
                                    <TouchableOpacity style={CommonCSS.flexDirectionColumn} onPress={() => { this.props.goBack() }}>
                                        <Icon name="md-heart-empty" color="#000" size={30} />
                                    </TouchableOpacity>
                                </View>
                            </View>
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

        )
    }
}

export default RecipeListing;

