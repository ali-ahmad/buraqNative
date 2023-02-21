import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

const {width, height} = Dimensions.get('window');

const Styles = StyleSheet.create({
   
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
    },

    fontContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 360,
    },

    fontText: {
        marginLeft: SIZES.padding * 2,
        ...FONTS.h3,
        fontWeight: 'bold',
        color: COLORS.white,
    },

    subContent: {
        marginLeft: SIZES.padding * 3,
        backgroundColor: COLORS.primary,
    },

    subContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 340,
    },

    img: {
        position: 'relative',
        top: SIZES.padding * 3,
    },

    subtext: {
        position: 'relative',
        top: SIZES.padding * 3,
    },

    userName: {
        marginTop: 0,
        ...FONTS.body2,
        color: COLORS.white,
        fontWeight: 'bold',
    },

    subName: {
        marginTop: 0,
        ...FONTS.body4,
        color: COLORS.yellow,
    },
    
});
export default Styles;
