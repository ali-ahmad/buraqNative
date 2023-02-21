import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

const {width, height} = Dimensions.get('window');

const Styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: COLORS.primary,
  },

  heading: {
    color: COLORS.yellow,
    fontSize: SIZES.body4,
    fontWeight: 'bold',
    marginLeft: SIZES.padding * 1.5,
  },

  contentContainer: {
    margin: SIZES.padding * 1.1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  imgContainer: {
    borderRadius: SIZES.radius / 0.1,
    height: height / 6,
    width: width / 3,
    backgroundColor: COLORS.black,
    borderWidth: 0.1,
    borderColor: COLORS.white,
  },

  subHeading: {
    width: width / 1.9,
    color: COLORS.white,
    fontSize: SIZES.body1,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  authContainer: {
    color: COLORS.white,
    textAlign: 'center',
  },

  ltContainer: {
    width: width / 1.2,
    height: height / 28,
    margin: SIZES.padding * 1,
    borderBottomColor: COLORS.lime,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderWidth: 0.6,
    flexDirection: 'row',
  },
  trackPlayer: {
    fontSize: SIZES.body3,
    color: COLORS.white,
    fontWeight: 'bold',
    marginLeft: SIZES.padding * 1,
  },

  locationContainer: {
    marginHorizontal: SIZES.padding * 1,
    marginTop: SIZES.padding * 1,
    width: width / 1.3,
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },

  childContent: {
    flexDirection: 'row',
  },

  locationText: {
    color: COLORS.white,
  },

  trackList: {
    backgroundColor: COLORS.yellow,
    flexDirection: 'column',
    height: height / 1.1,
  },

  listContainer: {
    width: width / 1.1,
    height: height / 20,
    elevation: 0,
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: SIZES.padding * 1,
    marginTop: SIZES.padding * 2,
    overflow: 'scroll',
  },
  imgCon: {
    borderRadius: SIZES.radius / 0.1,
    height: height / 20,
    width: width / 10,
    backgroundColor: COLORS.black,
    borderWidth: 0.1,
    borderColor: COLORS.white,
    marginLeft: SIZES.padding * 2,
  },
  items: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    color: COLORS.white,
    ...FONTS.body4,
    marginLeft: SIZES.padding * 3,
  },

  scrollContainer: {
    height: 300,
  },

  listBorder: {
    borderBottomColor: COLORS.yellow,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderWidth: 3,
    fontSize: SIZES.body3,
    color: COLORS.white,
    fontWeight: 'bold',
    marginLeft: SIZES.padding * 1,
  },

  albumContainer: {
    flexDirection: 'column',
  },

  albumSelecter: {
    backgroundColor: COLORS.primary,
  },
  imgHead: {
    height: 200,
    width: 370,
  },
  bottomText: {
    color: COLORS.white,
    marginHorizontal: SIZES.padding * 14,
    marginVertical: SIZES.padding * 1.3,
  },
});
export default Styles;
