import { StyleSheet, Dimensions } from 'react-native';
import {Layout,AppColor} from './../../pages/helper/dimenstion'

const CommonCSS = StyleSheet.create({
    padding10: {
        paddingTop: 10
    },
    marginTop30: {
        marginTop: 30
    },
    flexContainer: {
        flex: 1,
        minHeight:Layout.height
    },
    container : {
        flex: 1,
    },
    flexDirectionRow:{
        flex:1,
        flexDirection:'row'
    },
    listWrapper:{
        flex:1,
        flexDirection:'row',
        marginBottom:10,
    },
    listBulllet:{
        width: 10,
        alignSelf:'flex-start'
    },
    listText:{
        fontSize: 16,
    },
    overlay:{
        position:'absolute',
        left:0,
        top:0,
        backgroundColor:'#000',
        height:'100%',
        width:'100%',
        opacity:0.7,
    }
})
export { CommonCSS }  