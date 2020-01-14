import { StyleSheet } from 'react-native';
import { Layout, AppColor, FontFamily } from './../../pages/helper/dimenstion'

const CommonCSS = StyleSheet.create({
    padding10: {
        paddingTop: 10
    },
    fixedHeaderBar: {
        height: 80,
        paddingTop: 20,
        backgroundColor: AppColor.halfPrimaryColor
    },
    fixedBar: {
        width: Layout.width,
        borderTopWidth: 5,
        backgroundColor: 'rgba(255,255,255,0.6)',
        borderColor: AppColor.white,
        elevation: 2
    },
    fixedMidwrapper: {
        flex: 1
    },
    marginTop30: {
        marginTop: 30
    },
    flexContainer: {
        flex: 1,
        minHeight: Layout.height
    },
    container: {
        flex: 1,
    },
    marginCenter: {
        marginLeft: 'auto',
        marginBottom: 0,
        marginTop: 0,
        marginRight: 'auto'
    },
    flexDirectionRow: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    listWrapper: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10,
    },
    listBulllet: {
        width: 10,
        alignSelf: 'flex-start'
    },
    listText: {
        fontSize: 16,
        lineHeight: 20,
    },
    overlay: {
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: AppColor.black,
        height: '100%',
        width: '100%',
        opacity: 0.7,
    },
    Whiteoverlay: {
        position: 'absolute',
        left: 0,
        top: 0,
        opacity: 0.5,
        backgroundColor: AppColor.white,
        height: '100%',
        width: '100%',
        zIndex:1,
        opacity: 0.2,
    },
    verticalHorizalCenter: {
        justifyContent: 'center', 
        alignItems: 'center', 
        flex: 1,
    },
    videoSectionWrapper:{
        alignItems: 'flex-start',
        width: Layout.width,
        height: 300,
        position:"relative"
    },
    videoSection:{
        width: Layout.width,
        height: 300
    },
    videoControlPlaySection:{
        position:'absolute',
        left:(Layout.width / 2) - 40 ,
        top:60,
        zIndex:2,
        width:80,
        height:80
    },
    videoControlScreeningSection:{
        position:'absolute',
        right:20,
        top:15,
        zIndex:2,
        width:40,
        height:40
    },
    controlIcon:{
        display:'flex',
        width:'100%',
        height:'100%'
    }
})
export { CommonCSS }  