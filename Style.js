import { StyleSheet,Dimensions } from 'react-native';

const win = Dimensions.get('window');
const width = win.width;
const height = win.height;
const CommonCSS = StyleSheet.create({
    padding10:{
        paddingTop:10
    },
    marginTop30:{
        marginTop:30
    },
    flexContainer:{
        flex:1
    }
})
const HomeCSS = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
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

export { HomeCSS, CommonCSS }  