import React, {Component} from 'react';
import {Surface} from 'react-native-paper';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  FlatList,
  TouchableWithoutFeedback,
  ImageBackground,
} from 'react-native';

import { COLORS, FONTS  } from '../constants';

const {width, height} = Dimensions.get('window');

interface Props {
    navigation:any
}

interface ItemInterface {
    title:string,
    subTitle:string,
    duration:number,
    img:any,
    navigation:any
   }

class SongsComponent extends Component<Props> {
  constructor(props:any) {
    super(props);
  }

  separator = () => {
    return <View style={{height: 10}} />;
  };
 
  render() {
    const songs: { title: string; subTitle: string; duration: number; img:any }[] = [
        {
            title: 'Inner peace',
            subTitle: 'Sami Yousuf',
            duration: 201.6,
            img: require('../assets/images/Artist1.png'),
          },
          {
            title: 'Salam',
            subTitle: 'Yasin Skekh',
            duration: 201.6,
            img: require('../assets/images/Artist2.png'),
          },
          {
            title: "World",
            subTitle: 'Neaz Ab',
            duration: 201.6,
            img: require('../assets/images/Artist1.png'),
          },
          {
            title: 'Not Afraid',
            subTitle: 'Eminem',
            duration: 201.6,
            img: require('../assets/images/Artist2.png'),
          },
          {
            title: 'I Will Survive',
            subTitle: 'Gloria Gaynor',
            duration: 201.6,
            img: require('../assets/images/s5.jpeg'),
          },
      ];

    return (
      <View style={styles.container}>
       <FlatList
         data={songs}
         horizontal={true}
         showsHorizontalScrollIndicator={false}
         renderItem={({item, index}) => {
           return (
             <TouchableWithoutFeedback 
           //   onPress={() => this.goToDetails(item)}
             >
               <Surface style={[styles.surface, {elevation: 0}]}>
                 <ImageBackground
                   source={item.img}
                   style={styles.img}
                   >     
                 </ImageBackground>
                 <Text style={[styles.name ,{ color: COLORS.white, ...FONTS.h4 }]}>{item.title}</Text>
                 <Text style={[styles.secondName ,{ color: COLORS.white, ...FONTS.body4 }]}>{item.subTitle}</Text>
                 
               </Surface>
             </TouchableWithoutFeedback>
           );
         }}
       />
     </View>
    );
  }
}

export default SongsComponent;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 230,
    marginTop: 15,
  },
  subContainer: {
    width:365,
    height:50,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    margin: 10,
    marginLeft: 15,
  },
  surface: {
    elevation: 15,
    height: 200,
    width: 138,
    marginRight: 10,
    marginLeft: 30,
    overflow: 'hidden',
    backgroundColor:'#141D10',
    shadowOpacity:0

  },
  img: {
    height: 138,
    width: 138,
  },
  name: {
    position: 'absolute',
    fontWeight:'bold',
    top:150,
    left:10,
    color: '#fff',
  },
  secondName: {
    position:'relative',
    top:30,
    left:10
  }
});
