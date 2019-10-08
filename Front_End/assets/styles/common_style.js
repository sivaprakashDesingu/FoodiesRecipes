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
    }

})
export { CommonCSS }  