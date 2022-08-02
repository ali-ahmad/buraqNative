import React from 'react';
import {View, StyleSheet, Text, Dimensions, Image} from 'react-native';

import {COLORS, FONTS} from '../constants';

const backArrow = require('../assets/images/backArrow.png');
const Shape = require('../assets/images/Shape.png');

const {width, height} = Dimensions.get('window');

interface Props {
  navigation: any;
}

interface ItemInterface {
  title: string;
  subTitle: string;
  img: any;
  duration: number;
}

class RecentSearch extends React.Component<Props> {
  constructor(props: any) {
    super(props);
  }

  playSong = (item: ItemInterface) => {
    this.props.navigation.navigate('Player', {item: item});
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={backArrow} />
        <Text style={[styles.title, {color: COLORS.white, ...FONTS.h3}]}>
          Nasheed Today
        </Text>
        <Image source={Shape} />
      </View>
    );
  }
}

export default RecentSearch;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 70,
    backgroundColor: '#141D10',
    elevation: 15,
    padding: 25,
  },
  title: {
    fontWeight: 'bold',
  },
  banner: {
    height: 230,
    width: width,
  },
  bannerImage: {
    height: 250,
    width: '100%',
  },
  btn: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 24,
    flexDirection: 'row',
  },
  text: {
    marginLeft: 5,
  },
});
