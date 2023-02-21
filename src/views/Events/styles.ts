import { StyleSheet, Dimensions } from "react-native";
import { COLORS, FONTS, SIZES } from '../../constants';

const {width, height} = Dimensions.get('window');

const Styles = StyleSheet.create ({
   
    container: {
        backgroundColor: COLORS.primary, padding: SIZES.padding * 1
    },

    eventContent: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: SIZES.padding * 2.5,
    },

    headingContainer: {
        width: 300,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    heading: {
        color: COLORS.white, fontSize: SIZES.h3
    },

    img: {
        width: "30%"
    },

    subContent: {
        backgroundColor: COLORS.lime,
        borderWidth: 1,
        borderRadius: 20,
        width: 350,
        borderColor: COLORS.gredient,
        margin: SIZES.padding * 1,
    },
  
    searchIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: SIZES.padding * 0.1,
    },

    searchImg: {
        marginLeft:SIZES.padding * 1
    },
   
    searchInput: {
        color:COLORS.white, width:140
    },
   
    filterIcon: {
        marginHorizontal:SIZES.padding * 13 
    },
   
})
export default Styles;