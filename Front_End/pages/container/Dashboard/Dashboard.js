import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux'
import HeaderBar from './../../components/Header'
import { CommonCSS } from '../../../assets/styles/common_style'
import { DashboardPageCSS } from '../../../assets/styles/dashboard_style'
import RecipeTile from './../../components/Tile/RecipeTile'
import RecentLViewed from './component/RecentViewed'
import { Button } from 'react-native-paper';
import { RecipeTileComponentCSS } from '../../components/Style';
class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    static navigationOptions = {
        headerTitle: <HeaderBar headerTitle="Dashboard" isSearchNeeded={true} />,
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
            <View style={CommonCSS.container}>
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

                    {/* Recently Viewed Recipes */}
                    <RecentLViewed />
                    {/* Recently Viewed Recipes */}
                    {/* Recently Viewed Recipes */}
                    <RecentLViewed />
                    {/* Recently Viewed Recipes */}
                </ScrollView>
                <View style={[CommonCSS.fixedBar,DashboardPageCSS.buttonwrapper]}>
                    <TouchableOpacity style={{width:300}}>
                        <Text style={DashboardPageCSS.footerBtton}>Browse Recipes</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default Dashboard;
