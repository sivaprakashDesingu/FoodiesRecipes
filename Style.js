import { StyleSheet, Dimensions } from 'react-native';

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
        height:height
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
        borderColor: '#efb0b0',
        height: 60,
        width: width - 20,
        borderRadius: 5,
        margin: 10,
        marginTop:0, 
    },
    acitveButton:{
        borderWidth:1,
        borderColor: '#0f5407',
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

export { HomeCSS, CommonCSS, initialPageCSS }  