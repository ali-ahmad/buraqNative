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
        img: require('../../assets/images/b1.jpg'),
        duration: 201.6,
      },
      {
        title: 'Return To Forever',
        subTitle: '',
        img: require('../../assets/images/b2.jpg'),
        duration: 201.6,
      },
      {
        title: 'Your Love Remains',
        subTitle: 'The Rock Music',
        img: require('../../assets/images/b4.jpg'),
        duration: 201.6,
      },
    ];

    return (
      <View style={styles.container}>
        <FlatList
          data={banners}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <View style={styles.banner} key={index}>
                <ImageBackground source={item.img} style={styles.bannerImage}>
                  <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                      this.playSong(item);
                    }}>
                    <Icon name="play" size={18} color="#000" />
                    <Text style={styles.text}>Play Now</Text>
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

const styles = StyleSheet.create({
  container: {
    height: 250,
    backgroundColor: '#fff',
    elevation: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    margin: 10,
    marginLeft: 15,
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