import { StyleSheet, Dimensions } from "react-native";
import { COLORS, FONTS, SIZES } from '../../constants';

const {width, height} = Dimensions.get('window');

const Styles = StyleSheet.create ({
   
    container: {
        flexDirection: 'row',
        alignItems: "center",
        marginTop: SIZES.padding * 6,
        paddingHorizontal: SIZES.padding * 2
    },

    bgBack: {
        width: 20,
        height: 20,
        tintColor: COLORS.white
    },
    
    signUp: {
        marginLeft: SIZES.padding * 1.5, color: COLORS.white, ...FONTS.h4
    },

    logoContainer: {
        marginTop: SIZES.padding * 5,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },

    formContainer: {
        marginTop: SIZES.padding * 3,
        marginHorizontal: SIZES.padding * 3,
    },

    subContainer: {
        marginTop: SIZES.padding * 3 
    },

    heading: {
        color: COLORS.lightGreen, ...FONTS.body3
    },

    textInput: {
        marginVertical: SIZES.padding,
        borderBottomColor: COLORS.white,
        borderBottomWidth: 1,
        height: 40,
        color: COLORS.white,
        ...FONTS.body3
    },

    passContainer: {
        marginTop: SIZES.padding * 2
    },

    passField: {
        color: COLORS.lightGreen, ...FONTS.body3
    },

    passInput: {
        marginVertical: SIZES.padding,
        borderBottomColor: COLORS.white,
        borderBottomWidth: 1,
        height: 40,
        color: COLORS.white,
        ...FONTS.body3
    },

    passContent: {
        position: 'absolute',
        right: 0,
        bottom: 10,
        height: 30,
        width: 30
    },

    tintContent: {
        height: 20,
        width: 20,
        tintColor: COLORS.white
    },

    btnText: {
        height: 60,
        backgroundColor: COLORS.black,
        borderRadius: SIZES.radius / 1.5,
        alignItems: 'center',
        justifyContent: 'center'
    },

    btnContainer: {
        margin: SIZES.padding * 3
    },
    
    btnTxt: {
        color: COLORS.white, ...FONTS.h3 
    },

    renderItem: {
        padding: SIZES.padding, flexDirection: 'row'
    },

    renderImg: {
        width: 30,
        height: 30,
        marginRight: 10
    },

    modal: {
        flex: 1, alignItems: 'center', justifyContent: 'center' 
    },

    modalContent: {
        height: 400,
        width: SIZES.width * 0.8,
        backgroundColor: COLORS.lightGreen,
        borderRadius: SIZES.radius
    },

    modalList: {
        padding: SIZES.padding * 2,
        marginBottom: SIZES.padding * 2
    }
})
export default Styles;