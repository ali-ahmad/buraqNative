import { StyleSheet, Dimensions } from "react-native";
import { COLORS, FONTS, SIZES } from '../../../constants';

const {width, height} = Dimensions.get('window');

const Styles = StyleSheet.create ({
   
    container: {
        width: width,
        height:height,
        margin:SIZES.padding * 1.5,
    },

    heading: {
        color:COLORS.white,
        fontSize:SIZES.body1,
        fontWeight:'bold',
        marginLeft:SIZES.padding * 9
    },
    
    contentContainer: {
        height:height / 10,
        width:width / 1.2,
        margin: SIZES.padding * 1.1,
        flexDirection:'column',
        alignItems:'center',
    },

    imgContainer: {
        borderRadius: SIZES.radius / 0.1,
        height:height / 8,
        width: width / 4,
        backgroundColor:COLORS.black,
        borderWidth:1,
        borderColor:COLORS.white
    },

    subHeading: {
        color:COLORS.yellow,
        fontSize:SIZES.body3,
        fontWeight:'bold',
        textAlign:'center',
        marginTop: SIZES.padding * 1
    },

    authContainer: {
        color: COLORS.white,
        textAlign:'center'
    },

    ltContainer: {
        backgroundColor: COLORS.yellow,
        width: width / 1.2,
        margin:SIZES.padding * 1,
        marginTop:SIZES.padding * 10
    },

    locationContainer: {
        marginHorizontal:SIZES.padding * 1,
        marginTop:SIZES.padding * 1,
        width:width / 1.3 ,
        flexDirection: 'column',
        alignItems:'center',
        textAlign:'center'
    },

    childContent: {
        flexDirection:'row',
    },

    locationText: {
        color:COLORS.white
    }
})
export default Styles;