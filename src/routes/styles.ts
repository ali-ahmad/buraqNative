import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

const {width, height} = Dimensions.get('window');

const Styles = StyleSheet.create({
   
    container: {
        borderWidth: 5,
        borderRadius: SIZES.radius,
        height: 63,
        width: 62,
        borderColor: COLORS.primary,
    },

    subContent: {
        borderWidth: 4,
        borderRadius: SIZES.radius,
        height: 53,
        width: 53,
        borderColor: COLORS.gredient,
        padding: SIZES.padding * 1,
        backgroundColor: COLORS.lime,
    },
    
    tabContainer: {
        borderWidth: 5,
        borderRadius: SIZES.radius,
        height: 63,
        width: 62,
        borderColor: COLORS.primary,
    },

    tabIcons: {
        borderWidth: 4,
        borderRadius: SIZES.radius,
        height: 53,
        width: 53,
        borderColor: COLORS.gredient,
        padding: SIZES.padding * 1,
        backgroundColor: COLORS.lime,
    },

    calender: {
        borderWidth: 5,
        borderRadius: SIZES.radius,
        height: 63,
        width: 62,
        borderColor: COLORS.primary,
    },

    msNote: {
        borderWidth: 4,
        borderRadius: SIZES.radius,
        height: 53,
        width: 53,
        borderColor: COLORS.gredient,
        padding: SIZES.padding * 1,
        backgroundColor: COLORS.lime,
    },

    bkContainer: {
        borderWidth: 5,
        borderRadius: SIZES.radius,
        height: 63,
        width: 62,
        borderColor: COLORS.primary,
    },

    bkTab: {
        borderWidth: 4,
        borderRadius: SIZES.radius,
        height: 53,
        width: 53,
        borderColor: COLORS.gredient,
        padding: SIZES.padding * 1,
        backgroundColor: COLORS.lime,
    },

    userContainer: {
        borderWidth: 5,
        borderRadius: SIZES.radius,
        height: 63,
        width: 64,
        borderColor: COLORS.primary,
    },

    userTab: {
        borderWidth: 4,
        borderRadius: SIZES.radius,
        height: 52,
        width: 53,
        borderColor: COLORS.gredient,
        padding: SIZES.padding * 1,
        backgroundColor: COLORS.lime,
    }
});
export default Styles;
