import React from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  ImageBackground,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';

import {Surface} from 'react-native-paper';
import {COLORS, SIZES, FONTS, icons, images} from '../../../constants';

const {width, height} = Dimensions.get('window');
const ArrowNext = require('../../../assets/images/ArrowNext.png');
import Styles from './styles';

class Schedule extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    let categories = [
      {
        name: 'Weeks',
      },
      {
        name: 'Days',
      },
      {
        name: 'Hours',
      },
      {
        name: 'Seconds'
      },
      {
        name: 'Minutes'
      }
    ];
    return (
      <View style={Styles.container}>
        <View
          style={Styles.section}>
          <Text
            style={Styles.heading}>
            Recent
          </Text>
          <Image source={ArrowNext} />
        </View>
        <FlatList
          data={categories}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <TouchableWithoutFeedback>
                <Surface
                  style={Styles.boxContainer}>
                  <Text
                    style={Styles.itemName}>
                    {item.name}
                  </Text>
                </Surface>
              </TouchableWithoutFeedback>
            );
          }}
        />
      </View>
    );
  }
}

export default Schedule;
