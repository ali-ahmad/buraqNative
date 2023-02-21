import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../../constants';

const {width, height} = Dimensions.get('window');

const Styles = StyleSheet.create({
  container: {
    marginTop: SIZES.padding * -1,
  },

  boxContainer: {
    elevation: 0,
    backgroundColor: COLORS.yellow,
    margin: SIZES.padding * 2.5,
    height: height / 10,
  },

  section: {
    width: 365,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  heading: {
    color: COLORS.white,
    ...FONTS.h3,
    paddingLeft: 20,
    fontWeight: 'bold',
  },

  itemName: {
    color: COLORS.gredient,
    ...FONTS.body4,
    fontWeight: 'bold',
    padding: SIZES.padding * 2.5,
  },
});
export default Styles;
