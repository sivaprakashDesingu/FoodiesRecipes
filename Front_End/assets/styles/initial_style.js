import { StyleSheet } from 'react-native';
import {Layout,AppColor} from './../../pages/helper/dimenstion'

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
        width: Layout.width - 20,
        borderRadius: 5,
        margin: 10,
        marginTop:0, 
    },
    pageWrapper:{
        flex:1,
        width:Layout.width,
        minHeight:Layout.height -80,
        flexDirection:'column',
    },
    acitveButton:{
        borderWidth:1,
        borderColor: AppColor.primaryColor,
    },
    getStartedBtnWrapper:{
        backgroundColor:'#fff',
        padding:10,
        borderWidth:1,
        borderStyle:'solid',
        borderColor:'#ddd',
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 0,
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

export { initialPageCSS }  