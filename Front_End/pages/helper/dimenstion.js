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
    halfPrimaryColor: '#fa7776',
    secondaryColor: '#44a7c6',
    midGrayColor: '#9c9c9c',
    grayColor: '#a09d9d',
    white: "#fff",
    halfWhite: 'rgba(255,255,255,0.5)',
    black: "#000",
    elivationBlack: 'rgba(0,0,0,.06)',
    primaryBorderColor: '#ddd',
    textColor: '#394150',
    //set colors
    orangeDark: '#e11c37',
    orangeMid: '#f98202',
    orangeLight: '#fad700',
    blueDark: '#2630a8',
    blueMid: '#3786f8',
    blueLight: '#4cdfcb',
    greenDark: '#178160',
    greenMid: '#51c11b',
    greenLight: '#51c11b',
    greyDark: '#1c1f2a',
    greyMid: '#8d8f91',
    greyLight: '#d9d9d6'
}

const FontFamily = {
    normal: 'RobotoRegular',
    bold: 'RobotoBold',
    Black: 'RobotoBlack',
}
export { Layout, AppColor, FontFamily };