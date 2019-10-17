import { StyleSheet, Dimensions } from 'react-native';
import { Layout, AppColor,FontFamily } from '../helper/dimenstion'
import { Title } from 'react-native-paper';
const win = Dimensions.get('window');
const width = win.width;
const height = win.height;

const CommonCSS = StyleSheet.create({
    padding10: {
        paddingTop: 10
    },
    marginTop30: {
        marginTop: 30
    },
    flexContainer: {
        flex: 1,
        height: height
    },
    container: {
        flex: 1,
    },
    flexDirectionRow: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    bothDirectionCenter: {
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    heading18px: {
        fontSize: 18,
        fontFamily: FontFamily.bold,
        paddingBottom: 10,
    },
    overlay:{
        position:'absolute',
        left:0,
        top:0,
        backgroundColor:AppColor.black,
        height:'100%',
        width:'100%',
        opacity:0.8,
    },

})

const headerComponentCSS = StyleSheet.create({
    title: {
        fontSize: 20,
        color: AppColor.white,
        fontFamily: FontFamily.bold,
        flex: 1,
        paddingTop: 13,
    },
    searchIcon: {
        width: 40,
        paddingRight: 10,
        paddingTop: 10,
    },
    searchBox: {
        position: 'absolute',
        right: 0,
        top: 0,
        width: width,
        backgroundColor: 'blue',
        zIndex: 3
    },
    activesearchBox: {
        padding: 30,
    },
    searchText: {
        paddingLeft: 0,
        paddingRight: 0,
        backgroundColor: AppColor.white,
        borderBottomColor: AppColor.borderColors
    },
    searchTag: {
        color: AppColor.primaryColor,
        borderBottomColor: AppColor.borderColors,
        borderBottomWidth: 1,
        borderStyle: 'solid'
    },
    searchResultItem: {
        flex: 1,
        color: AppColor.textColor,
        padding: 10,
        borderBottomColor: AppColor.borderColors,
        borderBottomWidth: 1,
        borderStyle: 'solid'
    },


})
const slideToggleComponentCSS = StyleSheet.create({
    container: {
        position: 'relative',
        overflow: 'hidden',
        flexDirection: 'row',
        width: Layout.width
    },
    buttonImage: {
        width: 30,
        height: 25
    }
})

const RecipeTileComponentCSS = StyleSheet.create({
    tileSection : {
        width: 200,
        height: 200,
        position:'relative',
        elevation:2,
        borderRadius:5,
    },
    overlauRadious:{
        borderRadius:5
    },
    postedDate:{
        color:'#9e9ea0',
        fontSize:14,
    },
    topSection:{
        position:'absolute',
        left:0,
        top:0,
        padding:15
        
    },
    Title:{
        marginTop:15,
        fontSize:15,
        color:AppColor.white  ,
        lineHeight: 20,
    },
    ReactionSection :{
        position:'absolute',
        bottom:0,
        left:0,
        elevation:2,
        width:'100%',
        flex:1,
        flexDirection:'row',
        justifyContent:'center'
    },
    button:{
        flexBasis:'50%',
        borderColor:AppColor.primaryColor,
        borderRightWidth:1,
        borderStyle:'solid',
        padding:3,
        color:AppColor.white
    },
    like:{
        backgroundColor:AppColor.primaryColor,
        
    },
    dislike:{
        backgroundColor:AppColor.white,
    },
    likeButtonColor :{
        color:AppColor.white,
        textAlign:"center"
    },
    dislikeButtonColor :{
        color:AppColor.primaryColor,
        textAlign:"center"
    },
    tegSection:{
        position:'absolute',
        bottom:10,
        left:0,
        width:'100%',
        paddingLeft:10,
        paddingRight:10,
        
    },
    tagItems:{
        maxWidth:70,
        color:AppColor.white,
        backgroundColor:'rgba(0, 0, 0, 0.2)',
        borderColor:'#28242f',
        borderWidth:2,
        borderStyle:'solid',
        textAlign:"center",
        borderRadius:10,
    }
})
export {
    headerComponentCSS,
    CommonCSS,
    slideToggleComponentCSS,
    RecipeTileComponentCSS
}  