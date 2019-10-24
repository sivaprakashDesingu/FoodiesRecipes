import { StyleSheet, Dimensions } from 'react-native';
import { Layout, AppColor,FontFamily } from './../../pages/helper/dimenstion'


const RecipePageCSS = StyleSheet.create({
    recipeBannerImage: {
        alignItems: 'flex-start',
        width: Layout.width,
        height: 300
    },
    desciptoinWrapper: {
        padding: 20,
        position: 'relative',
        top: -100,
        marginBottom: -100,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        backgroundColor: AppColor.white,
        elevation: 5,
    },
    heading: {
        fontSize: 20,
        fontFamily: 'RobotoBold'
    },
    ownDes: {
        fontSize: 14,
        color: AppColor.grayColor
    },
    ownDesName: {
        fontSize: 14,
        color: AppColor.primaryColor
    },
    recipeTags: {
        backgroundColor: '#fffaf9',
        padding: 5,
        color: AppColor.textColor,
        borderWidth: 1,
        borderStyle: 'solid',
        textAlign: 'center',
        borderColor: '#f1e1de',
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 10,
        marginRight: 6,
        minWidth: 70,
        fontSize: 16,
    },
    horizontalCenteredLine: {
        height: 1,
        width: 180,
        backgroundColor: AppColor.primaryBorderColor,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 30,
    },
    ingredientHeading: {
        fontSize: 18,
        marginTop: 30,
        fontFamily: "RobotoBold",
        paddingBottom: 10,
    }


})


const RecipeListingPageCSS = StyleSheet.create({
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
    },
    HeadingSection:{
        position:'absolute',
        bottom:60,
        minWidth:150,
        padding:20,
        zIndex:1
    },
    categoryHeading:{
        color:AppColor.white,
        fontSize:22,
        paddingBottom:10,
    },
    separator:{
        borderWidth:1,
        borderStyle:'solid',
        borderColor:'transparent',
        borderTopColor:AppColor.white,
        width:'80%',
        fontFamily:FontFamily.bold
    },
    categoyBenifit:{
        color:'#fff',
        paddingTop:7,
        fontSize:15,
        fontFamily:FontFamily.normal
    },
    resultContainer:{
        position:'relative',
        top : -50,
        marginBottom:-50,
        minHeight:Layout.height - (320 + 50),
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        backgroundColor:AppColor.white,
        width:Layout.width,
        paddingTop:40,
        paddingBottom:20,
        paddingLeft:20,
        paddingRight:20
    },
    containerInfo:{
        fontSize:20,
        fontFamily:FontFamily.Black,
        marginBottom:6
    },
    subInfo:{
        color:AppColor.midGrayColor,
        fontSize:14,
        marginBottom:20
    },
    resultItem:{
        flexDirection:'row',
        marginBottom:20,
    },
    resultContent:{
        justifyContent:"center",
        flex:1,
        paddingLeft:10,
        paddingRight:10
    },
    resultRecipeName:{
        fontSize:18,
        fontFamily:FontFamily.bold,
        paddingBottom:5
    },
    resultDisctiption:{
        fontSize:14,
        color:AppColor.midGrayColor
    }
})

export { RecipePageCSS,RecipeListingPageCSS }  
