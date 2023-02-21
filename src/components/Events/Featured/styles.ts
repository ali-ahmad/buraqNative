import { StyleSheet, Dimensions } from "react-native";
import { COLORS, FONTS, SIZES } from '../../../constants';

const {width, height} = Dimensions.get('window');

const Styles = StyleSheet.create ({
   
    container: {
        width: width,
        marginTop:SIZES.padding * 2
    },
   
    featuresSection: {
        width: 365,
        height: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
   
    fParentText: {
        color: COLORS.white,
        ...FONTS.h3,
        paddingLeft: 20,
        fontWeight: 'bold',
    },

    surface: {
        elevation: 0,
        backgroundColor: COLORS.lime,
        margin: SIZES.padding * 2.5,
        height: 190,
        width: 140,
        borderWidth: 0.2,
        borderColor: COLORS.lime,
        borderTopEndRadius: 30,
    },

    poster: {
        flexDirection: 'row'
    },
    
    reSize: {
        height: 90,
        width: 90,
        margin: SIZES.padding * 1,
    },

    name: {
        color: COLORS.yellow,
        ...FONTS.body3,
        padding: SIZES.padding * 0,
        marginHorizontal: SIZES.padding * 1.3,
    },

    artistImg: {
        flexDirection:'row',
        marginHorizontal: SIZES.padding * 1.3,    
    },

    imgRadius: {
        margin:SIZES.padding * 0.3,
        width:25, 
        height:25
    },

    date: {
        color:COLORS.primary,
        padding:0,
        fontSize:SIZES.body5,
        backgroundColor:COLORS.yellow,
        marginHorizontal:SIZES.padding * -0.9,
        marginVertical: SIZES.padding * 5,
        height:height / 50,
        borderRadius:SIZES.radius * 0.1
    },

    heading: {
        color:COLORS.white,
        fontSize:SIZES.body5,
        paddingHorizontal:SIZES.padding * 1.2
    },

    icon: {
        padding:SIZES.padding * 0.3
    }
})
export default Styles;