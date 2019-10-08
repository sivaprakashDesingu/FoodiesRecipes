import React, { Component } from 'react';
import { View, Text, Image, ScrollView,Animated,TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import HeaderBar from './../components/Header'
//import { CommonCSS, RecipePageCSS } from '../../Style'
import { CommonCSS } from '../../assets/styles/common_style'
import { RecipePageCSS } from '../../assets/styles/recipe_style'

class Recipe extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            height:0,
            toggleItemHeight:0,
            animation: new Animated.Value(0),
            expanded:false,
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

    toggle = () => {
        //alert(this.state.toggleItemHeight)
        const {toggleItemHeight,expanded}= this.state
        expanded ? this.setState({expanded:false,toggleItemHeight:0}) : this.setState({expanded:true,toggleItemHeight:0})
        Animated.timing(this.state.animation, {
            toValue: this.state.toggleItemHeight,
            duration: 1000
        }).start()
    };

    find_dimesions(layout){
        // let {height} = layout; 
        // if(height === 0){
        //     this.setState({height})
        // }else{
        //     this.setState({height:0})
        // }
    }

    toggleContent(layout){
        this.setState({toggleItemHeight:0})
        const {toggleItemHeight,expanded} = this.state
        let {height} = layout; 
        alert(toggleItemHeight)

        alert(height)
        expanded ? this.setState({toggleItemHeight:20}) : 
        this.setState({toggleItemHeight:toggleItemHeight+height+15}) 
       
    }
    
    
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

                    <View  style={CommonCSS.flexDirectionRow}>
                        <Text style={RecipePageCSS.recipeTags}>Lunch</Text>
                        <Text style={RecipePageCSS.recipeTags}>Indian</Text>
                        <Text style={RecipePageCSS.recipeTags}>Vegan</Text>
                    </View>

                    <View style={RecipePageCSS.horizontalCenteredLine}></View>
                    <TouchableOpacity  onPress={this.toggle}>
                        <Text>Show Less</Text>
                    </TouchableOpacity>
                    <Animated.View style={{ height:this.state.animation, overflow: 'hidden',position:'relative'}}
                    onLayout={(event) => { this.find_dimesions(event.nativeEvent.layout) }}>
                       
                        <Text  style={RecipePageCSS.ingredientHeading}>Ingredients</Text>
                        <View style={CommonCSS.flexDirectionRow} >
                            <Text style={RecipePageCSS.recipeTags} onLayout={(event) => { this.toggleContent(event.nativeEvent.layout) }}>Lunch</Text>
                            <Text style={RecipePageCSS.recipeTags} onLayout={(event) => { this.toggleContent(event.nativeEvent.layout) }}>Indian</Text>
                            <Text style={RecipePageCSS.recipeTags} onLayout={(event) => { this.toggleContent(event.nativeEvent.layout) }}>Vegan</Text>
                        </View>
                    </Animated.View>



                    {/* <Text >
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
                    </Text> */}


                </View>
            </ScrollView>
        )
    }
}

export default Recipe;

