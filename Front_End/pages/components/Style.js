import { StyleSheet, Dimensions } from 'react-native';
import {Layout,AppColor} from '../helper/dimenstion'
const win = Dimensions.get('window');
const width = win.width;
const height = win.height;

const appColor = {
    primaryColor: '#ec4242',
    grayColor: '#a09d9d',
    white: "#fff",
    textColor: '#394150',
    borderColors: '#ddd'
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
    heading18px:{
        fontSize:18,
        fontFamily:"RobotoBold",
        paddingBottom:10,
    }

})

const headerComponentCSS = StyleSheet.create({
    title: {
        fontSize: 20,
        color: appColor.white,
        fontFamily: 'RobotoBold',
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
        backgroundColor:'blue',
        zIndex:3
    },
    activesearchBox: {
        padding: 30,
        //backgroundColor: appColor.white,
    },
    searchText: {
        paddingLeft: 0,
        paddingRight: 0,
        backgroundColor: appColor.white,
        borderBottomColor: appColor.borderColors
    },
    searchTag: {
        color: appColor.primaryColor,
        borderBottomColor: appColor.borderColors,
        borderBottomWidth: 1,
        borderStyle: 'solid'
    },
    searchResultItem: {
        flex: 1,
        color: appColor.textColor,
        padding: 10,
        borderBottomColor: appColor.borderColors,
        borderBottomWidth: 1,
        borderStyle: 'solid'
    },


})
const slideToggleComponentCSS = StyleSheet.create({
    container: {
        position:'relative',
        overflow: 'hidden',
        flexDirection: 'row',
        width:Layout.width
    },
    buttonImage: {
        width: 30,
        height: 25
    }
})
export { headerComponentCSS, CommonCSS, slideToggleComponentCSS }  