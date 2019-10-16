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
    grayColor: '#a09d9d',
    white: "#fff",
    black:"#000",
    primaryBorderColor:'#ddd',
    textColor:'#394150'
}

const FontFamily = {
    normal : 'RobotoRegular',
    bold:'RobotoBold',
    Black:'RobotoBlack',
}
export { Layout,AppColor,FontFamily };