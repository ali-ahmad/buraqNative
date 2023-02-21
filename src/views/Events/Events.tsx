import React, {Component} from 'react';
import {View, SafeAreaView, TextInput} from 'react-native';

import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../constants';

import EventsOnboarding from '../../components/Events/Index';

import Styles from './styles';

interface Props {
  navigation: any;
}

interface ItemInterface {
  name: string;
  img: any;
  artist: any[];
  date: string;
}

class Events extends Component<Props, ItemInterface> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={Styles.container}>
        <View style={Styles.eventContent}>
          <View style={{width: 20}}>
            <Icon name="arrow-back" color={COLORS.white} size={25} />
          </View>
          <View style={Styles.headingContainer}>
            <Text style={Styles.heading}>Explore Events</Text>
          </View>
        </View>
        <View style={Styles.subContent}>
          <View style={Styles.searchIcon}>
            <Icon
              name="search"
              color={COLORS.white}
              size={25}
              style={Styles.searchImg}
            />
            <TextInput
              placeholder="search"
              placeholderTextColor={COLORS.white}
              style={Styles.searchInput}
            />
            <Icons
              name="filter-variant"
              color={COLORS.white}
              size={25}
              style={Styles.filterIcon}
            />
          </View>
        </View>
        <EventsOnboarding navigation={this.props.navigation} />
      </SafeAreaView>
    );
  }
}

export default Events;
