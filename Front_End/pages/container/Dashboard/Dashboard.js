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
            <ScrollView style={CommonCSS.container}>
                <ScrollView style={DashboardPageCSS.dashBoardApp} >
                    <View style={DashboardPageCSS.bannerWrapper}>
                        <Image source={require(`../../../assets/images/user_cooking.jpeg`)} style={DashboardPageCSS.bannerImage} />
                        <View style={[CommonCSS.overlay,CommonCSS.Whiteoverlay]}></View>
                        <View style={DashboardPageCSS.userDeatails}>
                            <View style={DashboardPageCSS.centered}>
                                <Text style={DashboardPageCSS.userName}>Hi , Sivaprakash</Text>
                            </View>
                            
                        </View>
                    </View>

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
                    <View style={{padding:15,marginTop:-50,}}>
                        <Text style={DashboardPageCSS.sectionTitle}>Recently viewed recipe</Text>
                        <ScrollView horizontal={true}>
                            <View style={DashboardPageCSS.recipeTile}>
                            </View>
                        </ScrollView>
                    </View>

                </ScrollView>
            </ScrollView>
        )
    }
}

export default Dashboard;

