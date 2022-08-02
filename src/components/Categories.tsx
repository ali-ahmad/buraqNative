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
import {COLORS, SIZES, FONTS, icons, images} from '../constants';

const {width, height} = Dimensions.get('window');
const ArrowNext = require('../assets/images/ArrowNext.png');

interface Props {
  navigation: any;
}

interface ItemInterface {
  name: string;
  img: any;
}

class CatogComponent extends React.Component<Props> {
  constructor(props: any) {
    super(props);
  }

  //   goToDetails = (item:ItemInterface) => {
  //     this.props.navigation.navigate('Details', {item: item});
  //   };

  render() {
    let categories = [
      {
        name: 'Barakh',
        img: require('../assets/images/Album1.png'),
      },
      {
        name: 'Sunnah',
        img: require('../assets/images/Album2.png'),
      },
      {
        name: 'Peace',
        img: require('../assets/images/Album3.png'),
      },
      {
        name: 'Deen',
        img: require('../assets/images/c4.jpg'),
      },
      {
        name: 'Classic',
        img: require('../assets/images/c5.jpg'),
      },
    ];
    return (
      <View style={{width: width, height: 200, marginTop: SIZES.padding * 2}}>
        <View
          style={{
            width: 365,
            height: 30,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={[
              {
                color: COLORS.white,
                ...FONTS.h3,
                paddingLeft: 20,
                fontWeight: 'bold',
              },
            ]}>
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
              <TouchableWithoutFeedback
              //   onPress={() => this.goToDetails(item)}
              >
                <Surface
                  style={{
                    elevation: 0,
                    backgroundColor: COLORS.primary,
                    margin: SIZES.padding * 2.5,
                    height: 130,
                  }}>
                  <ImageBackground
                    source={item.img}
                    style={{height: 85, width: 85}}></ImageBackground>
                  <Text
                    style={[
                      {
                        color: COLORS.white,
                        ...FONTS.body4,
                        padding: SIZES.padding * 2,
                      },
                    ]}>
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

export default CatogComponent;
