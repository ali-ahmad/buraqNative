import React, { Component } from 'react';

import { View, Image, GestureResponderEvent } from 'react-native';
import { Text } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../../constants';

const Sky = require('../../../assets/images/sky1.jpg');

import Styles from '../EventDetails/styles';

interface Props {
    setUrl:React.Dispatch<React.SetStateAction<string>>;
    navigation:any;
    onPress: (event: GestureResponderEvent) => void;
    url:string;
}

export default class EventDetails extends Component<Props> {
    constructor(props:any){
        super(props)
    }
  render() {
    const {setUrl, navigation} = this.props;
    return (
        <View style={Styles.container}>
            <Text style={Styles.heading}>Performers</Text>
            <View style={Styles.contentContainer}>
                <View>
                <TouchableOpacity onPress={()=> setUrl('artistProfile')}>
                <Image source={Sky} resizeMode={"cover"} style={Styles.imgContainer}/>
                </TouchableOpacity>
                    <Text style={Styles.subHeading}>Sky</Text>
                    <Text style={Styles.authContainer}>Lead Singer</Text>
                </View>
            </View>
            <View style={Styles.ltContainer}>
                <Text>
                  Make Art and Cry is a Boston based collective comprised of husband and wife artist duo Carlie and Febo. As a collective, Make Art and Cry examines the world around them and how they exist in it. Specifically, they think about how they exist in relation to each other, to other people, and to space. This is done by creating intentional experiences that explore fear, healing, vulnerability, growth, and what it means to be fully heard and seen internally and externally. 
                </Text>
            </View>
            <View style={Styles.locationContainer}>
               <View style={Styles.childContent}>
               <Icons name='location' size={20} color={COLORS.yellow}/>
                <View>
                    <Text style={Styles.locationText}>2 Swanston st, Melbourne VIC 3004 Australia</Text>
                </View>
               </View>
               <View style={Styles.childContent}>
               <Icon name='time-outline' color={COLORS.yellow} size={20}/>
                <View>
                    <Text style={Styles.locationText}>Nov 27, 2021, 10:00 am-10:00 pm</Text>
                </View>
               </View>
            </View>
        </View>
    )
  }
}
