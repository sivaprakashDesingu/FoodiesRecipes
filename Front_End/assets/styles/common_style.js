import { StyleSheet, Dimensions } from 'react-native';
import {Layout,AppColor} from './../../pages/helper/dimenstion'
import { layer } from '@fortawesome/fontawesome-svg-core';

const CommonCSS = StyleSheet.create({
    padding10: {
        paddingTop: 10
    },
    fixedBar:{
        width:Layout.width,
        borderTopWidth: 5,
        backgroundColor: 'rgba(255,255,255,0.6)',
        borderColor:'#fff',
        elevation:2
    },
    fixedMidwrapper:{
        flex:1
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
    marginCenter:{
        marginLeft:'auto',
        marginBottom:0,
        marginTop:0,
        marginRight:'auto'
    },
    flexDirectionRow:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap'
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
        backgroundColor:AppColor.black,
        height:'100%',
        width:'100%',
        opacity:0.7,
    },
    Whiteoverlay:{
        opacity:0.5
    }
})
export { CommonCSS }  