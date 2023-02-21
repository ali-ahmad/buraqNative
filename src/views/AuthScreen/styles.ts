import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

const {width, height} = Dimensions.get('window');

const Styles = StyleSheet.create({
  container: {
    marginTop: SIZES.padding * 15,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  img: {
    width: '30%',
  },

  formContainer: {
    marginTop: SIZES.padding * 3,
    marginHorizontal: SIZES.padding * 3,
  },

  textContainer: {
    marginTop: SIZES.padding * 2,
  },

  heading: {
    color: COLORS.lightGreen,
    ...FONTS.body3,
  },

  textField: {
    marginVertical: SIZES.padding,
    borderBottomColor: COLORS.white,
    borderBottomWidth: 1,
    height: 40,
    color: COLORS.white,
    ...FONTS.body3,
  },

  passField: {
    marginTop: SIZES.padding * 2,
  },

  touchable: {
    position: 'absolute',
    right: 0,
    bottom: 10,
    height: 30,
    width: 30,
  },

  minImg: {
    height: 20,
    width: 20,
    tintColor: COLORS.white,
  },

  imgContainer: {
    borderRadius: SIZES.radius / 0.1,
    height: height / 8,
    width: width / 4,
    backgroundColor: COLORS.black,
    borderWidth: 1,
    borderColor: COLORS.white,
  },

  btnContainer: {
    margin: SIZES.padding * 3,
  },

  btnText: {
    height: 60,
    backgroundColor: COLORS.black,
    borderRadius: SIZES.radius / 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  signText: {
    color: COLORS.white,
    ...FONTS.h3,
  },

  itemContainer: {
    padding: SIZES.padding,
    flexDirection: 'row',
  },

  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  modalContent: {
    height: 400,
    width: SIZES.width * 0.8,
    backgroundColor: COLORS.lightGreen,
    borderRadius: SIZES.radius,
  },

  modalList: {
    padding: SIZES.padding * 2,
    marginBottom: SIZES.padding * 2,
  },
});
export default Styles;
