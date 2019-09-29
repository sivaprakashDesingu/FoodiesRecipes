import { StyleSheet, Dimensions } from 'react-native';
import { startAsync } from 'expo/build/AR';

const win = Dimensions.get('window');
const width = win.width;
const height = win.height;

const appColor = {
    primaryColor: '#ec4242',
    grayColor: '#a09d9d',
    white: "#fff",
    textColor:'#394150'
}
const CommonCSS = StyleSheet.create({
    padding10: {
        paddingTop: 10
    },
    marginTop30: {
        marginTop: 30
    },
    flexContainer: {
        flex: 1,
        height:height
    },
    container : {
        flex: 1,
    },
    flexDirectionRow:{
        flex:1,
        flexDirection:'row'
    }

})

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
        height: height,
    },
    heading: {
        fontSize: 30,
        color: '#fff'
    },
    subHeading: {
        fontSize: 16,
        color: '#fff'
    }
})

const initialPageCSS = StyleSheet.create({
    heading: {
        fontSize: 24,
        marginTop:20,
        marginLeft: 10,
        marginBottom:20,
        fontFamily:"RobotoBold"
    },
    buttons: {
        flexDirection: 'row',
        fontFamily:"RobotoRegular",
        alignItems: 'center',
        borderWidth:.5,
        borderColor: '#fee3e3',
        height: 60,
        width: width - 20,
        borderRadius: 5,
        margin: 10,
        marginTop:0, 
    },
    acitveButton:{
        borderWidth:1,
        borderColor: appColor.primaryColor,
    },
    getStartedBtnWrapper:{
        backgroundColor:'#fff',
        padding:10,
        borderWidth:1,
        borderStyle:'solid',
        borderColor:'#ddd',
        alignSelf:'flex-end',
        width:'100%',
        marginTop:30,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: '#fff',
        shadowOpacity: 1,
        elevation: 3,
    },
    ImageIconStyle: {
        padding: 20,
        marginLeft:20,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
    },
    TextStyle: {
        color: '#333',
        paddingLeft:15,
        paddingRight:15,
        fontSize:16,
    }
})
const  RecipePageCSS = StyleSheet.create({
    recipeBannerImage : {
        alignItems:'flex-start',
        width:width,
        height:200
    },
    desciptoinWrapper:{
        padding:20
    },
    heading: {
        fontSize:20,
        fontFamily:'RobotoBold'
    },
    ownDes:{
        fontSize:14,
        color:appColor.grayColor
    },
    ownDesName:{
        fontSize:14,
        color:appColor.primaryColor
    },
    recipeTags:{
        backgroundColor:'#fffaf9',
        padding:5,
        color:appColor.textColor,
        borderWidth:1,
        borderStyle:'solid',
        textAlign:'center',
        borderColor:'#f1e1de',
        borderRadius:20,
        marginTop:10,
        marginBottom:10,
        marginRight:6,
        minWidth:70
    },
    recipeFeatureItemImage :{
        width:25,
        height:25,
        marginRight:5,
    },
    recepeFeatureItem:{
        padding:10,
        marginRight:10,
        marginBottom:10
    }
})

export { HomeCSS, CommonCSS, initialPageCSS,RecipePageCSS }  