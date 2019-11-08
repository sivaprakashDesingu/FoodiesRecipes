import { StyleSheet } from 'react-native';
import {Layout,AppColor} from './../../pages/helper/dimenstion'

const HomeCSS = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        position: 'relative'
    },
    homepageContainer: {
        justifyContent: "center",
        alignItems: "center",
        alignSelf: 'center',
        height: Layout.height,
    },
    heading: {
        fontSize: 24,
        textAlign:"left",
        color: AppColor.white
    },
    subHeading:{
        fontSize: 35,
        marginBottom:10,
        color: AppColor.white
    },
    hasTag: {
        fontSize: 18,
        color: AppColor.white
    },
    loginFormWrapper:{
        width:Layout.width - 50,
        paddingTop:30,
    }
})

export { HomeCSS }  