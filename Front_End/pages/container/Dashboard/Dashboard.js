import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    StatusBar,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux'
import HeaderBar from './../../components/Header/Header'
import { CommonCSS } from '../../../assets/styles/common_style'
import { DashboardPageCSS } from '../../../assets/styles/dashboard_style'
import {
    fetchSuggestionSearch,
    setActiveRecipeId
} from '../../../service/action/header-action'
import RecentLViewed from './component/RecentViewed'
import { Button } from 'react-native-paper';
/*import { RecipeTileComponentCSS } from '../../components/Style';*/


class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    
    searchActive(key){
        const {UserDetailsReducer} = this.props
        const {accessToken} = UserDetailsReducer.userDetails
        this.props.fetchSuggestionSearch(accessToken,key)
    }
    navigatePage(id,page){
        this.props.setActiveRecipeId(id,page)
        this.props.navigation.navigate(page)
    }
    render() {
        return (
            <View style={CommonCSS.container}>
                <StatusBar backgroundColor="blue" barStyle="light-content" />
                {/* <View >
                    
                </View> */}
                <HeaderBar
                    searchActive={(key) => this.searchActive(key)}
                    goBack={() => { this.props.navigation.goBack() }}
                    headerTitle={"Dash board"}
                    showSearch={true}
                    searchResultData = {this.props.headerSearchResult}
                    navigatePage = {(id,page) => this.navigatePage(id,page)}
                />
                <ScrollView style={CommonCSS.fixedMidwrapper}>
                    {/* Hero banner section */}
                    <View style={DashboardPageCSS.bannerWrapper}>
                        <Image source={require(`../../../assets/images/user_cooking.jpeg`)} style={DashboardPageCSS.bannerImage} />
                        <View style={[CommonCSS.overlay, CommonCSS.Whiteoverlay]}></View>
                        <View style={DashboardPageCSS.userDeatails}>
                            <View style={DashboardPageCSS.centered}>
                                <Text style={DashboardPageCSS.userName}>Hi , Sivaprakash</Text>
                            </View>

                        </View>
                    </View>
                    {/* Hero banner section */}
                    {/* User Stats Section*/}
                    <View style={DashboardPageCSS.tileSection}>
                        <View style={DashboardPageCSS.tileItem}>
                            <View style={DashboardPageCSS.circle}>
                                <Text style={DashboardPageCSS.itemCount}>30</Text>
                            </View>
                            <View style={DashboardPageCSS.tag}>
                                <Text>Viewed Recipe </Text>
                            </View>
                        </View>

                        <View style={DashboardPageCSS.tileItem}>
                            <View style={DashboardPageCSS.circle}>
                                <Text style={DashboardPageCSS.itemCount}>30</Text>
                            </View>
                            <View style={DashboardPageCSS.tag}>
                                <Text>Shorlisted Recipe </Text>
                            </View>
                        </View>
                        <View style={DashboardPageCSS.tileItem}>
                            <View style={DashboardPageCSS.circle}>
                                <Text style={DashboardPageCSS.itemCount}>30</Text>
                            </View>
                            <View style={DashboardPageCSS.tag}>
                                <Text>Viewed Recipe </Text>
                            </View>
                        </View>
                        <View style={DashboardPageCSS.tileItem}>
                            <View style={DashboardPageCSS.circle}>
                                <Text style={DashboardPageCSS.itemCount}>30</Text>
                            </View>
                            <View style={DashboardPageCSS.tag}>
                                <Text>Viewed Recipe </Text>
                            </View>
                        </View>
                    </View>
                    {/* User Stats Section*/}

                    {/* Latest Viewed Recipes */}
                    <RecentLViewed
                        title={'Recently Visited Recipe'}
                    />
                    {/* Latest Viewed Recipes */}
                    {/* Popular Recipes */}
                    <RecentLViewed
                        title={'Popular Recipe'}
                    />
                    {/* Popular Recipes */}
                    {/*  Recipes */}
                    <RecentLViewed
                        title={'Latest Recipe'}
                    />
                    {/* Popular Recipes */}
                </ScrollView>

                {/* Fixed Button Logic */}
                <View style={[CommonCSS.fixedBar, DashboardPageCSS.buttonwrapper]}>
                    <TouchableOpacity style={{ width: 300 }}

                        onPress={() => this.props.navigation.navigate("RecipeListing")}>
                        <Text style={DashboardPageCSS.footerBtton}>Browse Recipes</Text>
                    </TouchableOpacity>
                </View>
                {/* Fixed Button Logic */}
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        UserDetailsReducer: state.UserDetailsReducer,
        headerSearchResult : state.HeaderReducer
    }
}

const mapDispatchToProps = dispatch => ({
    fetchSuggestionSearch: (accessToken,keyword) =>
        dispatch(fetchSuggestionSearch(accessToken,keyword)),
    setActiveRecipeId:(id,page) => dispatch(setActiveRecipeId(id,page)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

