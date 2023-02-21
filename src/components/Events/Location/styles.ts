import { StyleSheet, Dimensions } from "react-native";
import { COLORS, FONTS, SIZES } from '../../../constants';

const {width, height} = Dimensions.get('window');

const Styles = StyleSheet.create ({
    container: {
        height:height,
    },

    textContainer: {
        backgroundColor:COLORS.lime,
        marginHorizontal:SIZES.padding * 2,
    },

    textHeading: {
        color:COLORS.white,
        fontSize:SIZES.body4,
        marginHorizontal:SIZES.padding * 1,
        marginVertical:SIZES.padding * 1
    },
    
    locationContainer: {
        marginHorizontal:SIZES.padding * 1,
        flexDirection: 'column',
        alignItems:'center',

    },

    childContent: {
        flexDirection:'row',
    },

    locationText: {
        color:COLORS.white
    }
})

export default Styles;