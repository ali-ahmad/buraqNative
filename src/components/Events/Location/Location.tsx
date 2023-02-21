import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper';
import Icons from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/Ionicons';

import { COLORS } from '../../../constants';
import Styles from './styles'

const Location = () => {
  return (
   <View style={Styles.container}>
        <View style={Styles.textContainer}>
            <Text style={Styles.textHeading}>Location</Text>
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
   </View>
  )
}

export default Location
