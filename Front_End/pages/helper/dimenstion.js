import { Dimensions } from 'react-native';
const win = Dimensions.get('window');
const width = win.width;
const height = win.height;
const Layout = {
    width,
    height
}
const AppColor = {
    primaryColor: '#ec4242',
    halfPrimaryColor:'#fa7776',
    secondaryColor: '#44a7c6',
    grayColor: '#a09d9d',
    white: "#fff",
    halfWhite:'rgba(255,255,255,0.5)',
    black:"#000",
    elivationBlack:'rgba(0,0,0,.06)',
    primaryBorderColor:'#ddd',
    textColor:'#394150'
}

const FontFamily = {
    normal : 'RobotoRegular',
    bold:'RobotoBold',
    Black:'RobotoBlack',
}
export { Layout,AppColor,FontFamily };