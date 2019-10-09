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
    textColor:'#394150'
}
export { Layout,AppColor };