import { StyleSheet,Dimensions } from 'react-native';

const win = Dimensions.get('window');
const width = win.width;
const height = win.height;

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

export { HomeCSS }  