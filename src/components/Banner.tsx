import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, SIZES } from '../constants';

const {width, height} = Dimensions.get('window');

interface Props {
 navigation: any
}

interface ItemInterface {
 title:string,
 subTitle:string,
 img:any,
 duration:number
}

class Banner extends React.Component<Props> {
  constructor(props:any) {
    super(props);
  }

  playSong = (item:ItemInterface) => {
    this.props.navigation.navigate('Player', {item: item});
  };

  render() {

    let banners = [
      {
        title: 'Metal City',
        subTitle: 'Dead April',
        img: require('../assets/images/b1.jpg'),
        duration: 201.6,
      },
      {
        title: 'Return To Forever',
        subTitle: '',
        img: require('../assets/images/b2.jpg'),
        duration: 201.6,
      },
      {
        title: 'Your Love Remains',
        subTitle: 'The Rock Music',
        img: require('../assets/images/b4.jpg'),
        duration: 201.6,
      },
    ];

    return (
      <View style={{ height: 250, backgroundColor: COLORS.white, elevation: 15 }}>
        <FlatList
          data={banners}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <View style={{ height: 230, width:width }} key={index}>
                <ImageBackground source={item.img} style={{ width: 100, height: 250 }}>
                  <TouchableOpacity
                    onPress={() => {
                      this.playSong(item);
                    }}>
                    <Icon name="play" size={18} color="#000" />
                    <Text style={{ marginLeft: SIZES.padding * 2}}>Play Now</Text>
                  </TouchableOpacity>
                </ImageBackground>
              </View>
            );
          }}
        />
      </View>
    );
  }
}

export default Banner;
