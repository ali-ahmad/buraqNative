import React from 'react';
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  TouchableWithoutFeedback,
  Image,
  GestureResponderEvent,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Surface} from 'react-native-paper';

import Icons from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../../../constants';
import dummy from './dummy';

import Schedule from '../Schedule/Schedule';
import Location from '../Location/Location';

const Artist1 = require('../../../assets/images/Artist2.png');
const Artist2 = require('../../../assets/images/Artist2.png');
const Artist3 = require('../../../assets/images/Artist1.png');

import Styles from './styles';

interface Props {
  setUrl:React.Dispatch<React.SetStateAction<string>>;
  navigation:any;
  onPress: (event: GestureResponderEvent) => void;
  url:string;
}

class Featured extends React.Component<Props> {
  constructor(props: any) {
    super(props);
  }
  render() {
   const {setUrl, navigation, url} = this.props;
    return (
     <>
      <View style={Styles.container}>
        <View style={Styles.featuresSection}>
          <Text style={Styles.fParentText}>Featured</Text>
          <Icons name='arrow-forward'/>
        </View>
        <FlatList
          data={dummy}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <TouchableWithoutFeedback>
                <TouchableOpacity onPress={()=> {setUrl("detail"); navigation.navigate('EventDetails', url)}}>
                <Surface style={Styles.surface} >
                  <View style={Styles.poster} >
                    <ImageBackground
                      source={item.img}
                      style={Styles.reSize}>
                    </ImageBackground>
                  <Text style={Styles.date}>{item.date}</Text>
                   <View>
                   </View>
                  </View>
                  <Text style={Styles.name}>{item.name}</Text>
                  <Text style={Styles.heading}>Artists Performing</Text>
                  <View style={Styles.artistImg}>
                    <Image source={Artist1} style={Styles.imgRadius}/>
                    <Image source={Artist2} style={Styles.imgRadius}/>
                    <Image source={Artist3} style={Styles.imgRadius}/>
                    <View style={Styles.icon}><Icons name='share' size={20} color={COLORS.yellow}/></View> 
                  </View>
                </Surface>
                </TouchableOpacity>
              </TouchableWithoutFeedback>
            );
          }}
        />
      </View>
      <Schedule/>
      <Location/>
     </>
    );
  }
}

export default Featured;
