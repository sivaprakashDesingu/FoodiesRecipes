import { StyleSheet, Dimensions } from 'react-native';
import { Layout, AppColor } from './../../pages/helper/dimenstion'

const RecipePageCSS = StyleSheet.create({
    recipeBannerImage: {
        alignItems: 'flex-start',
        width: Layout.width,
        height: 300
    },
    desciptoinWrapper: {
        padding: 20,
        position: 'relative',
        top: -100,
        marginBottom: -100,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        backgroundColor: AppColor.white,
        elevation: 5,
    },
    heading: {
        fontSize: 20,
        fontFamily: 'RobotoBold'
    },
    ownDes: {
        fontSize: 14,
        color: AppColor.grayColor
    },
    ownDesName: {
        fontSize: 14,
        color: AppColor.primaryColor
    },
    recipeTags: {
        backgroundColor: '#fffaf9',
        padding: 5,
        color: AppColor.textColor,
        borderWidth: 1,
        borderStyle: 'solid',
        textAlign: 'center',
        borderColor: '#f1e1de',
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 10,
        marginRight: 6,
        minWidth: 70,
        fontSize: 16,
    },
    horizontalCenteredLine: {
        height: 1,
        width: 180,
        backgroundColor: AppColor.primaryBorderColor,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 30,
    },
    ingredientHeading: {
        fontSize: 18,
        marginTop: 30,
        fontFamily: "RobotoBold",
        paddingBottom: 10,
    }


})

export { RecipePageCSS }  
