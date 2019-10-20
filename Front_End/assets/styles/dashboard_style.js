import { StyleSheet} from 'react-native';
import { Layout, AppColor, FontFamily } from './../../pages/helper/dimenstion'
import { text } from '@fortawesome/fontawesome-svg-core';

const DashboardPageCSS = StyleSheet.create({
    dashBoardApp: {
        position: 'relative',
        height: Layout.height - 80,
        backgroundColor: 'red'
    },
    dashBoardAppMidwrapper:{
        position:'absolute',
        left:10,
        top:40,
        height:200,
        width:200,
        backgroundColor:'blue',
        zIndex:12
    },
    bannerWrapper: {
        position: 'relative'
    },
    bannerImage: {
        width: Layout.width,
        height: 200,
    },
    userDeatails: {
        position: 'absolute',
        width: Layout.width,
        paddingVertical: 70,
    },
    centered: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    userName: {
        color: AppColor.white,
        fontSize: 22
    },
    tileSection: {
        position: 'relative',
        top: -50,
        left: 50,
        right: 50,
        width: Layout.width - 100,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom:-50,
    },
    tileItem: {
        width: Layout.width / 2,
        backgroundColor: AppColor.white,
        height: 100,
        flexBasis: '48%',
        marginBottom: 10,
        borderRadius: 5,
        elevation: 2,
    },
    circle: {
        marginTop: 15,
        width: 50,
        height: 50,
        left: 50,
        borderRadius: 25,
        backgroundColor: AppColor.secondaryColor,
        position: 'relative'
    },
    itemCount: {
        position: 'absolute',
        top: 10,
        left: 15,
        fontSize: 20,
        color: AppColor.white
    },
    tag: {
        paddingTop: 5,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        fontSize: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontFamily: FontFamily.bold
    },
    recipeTile: {
        position: 'relative'
    },
    buttonwrapper:{
        justifyContent:"center",
        alignItems:"center",
        padding:10,
        elevation:1,
        borderColor:AppColor.elivationBlack,
        backgroundColor:AppColor.halfWhite
    },
    footerBtton:{
        padding:15,
        borderRadius:300 / 2,
        backgroundColor: AppColor.secondaryColor,
        color:AppColor.white,
        textAlign:'center',
        fontFamily:FontFamily.bold,
        fontSize:16,
    }
})

export { DashboardPageCSS }  
