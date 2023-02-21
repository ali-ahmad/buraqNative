import * as React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../views/HomeScreen/Home';
import AuthScreen from '../views/AuthScreen/AuthScreen';
import LoginScreen from '../views/LoginScreen/LoginScreen';
import ArtistScreen from '../views/Events/Events';

import {View} from 'react-native';
import {COLORS, SIZES} from '../constants';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Events from '../views/Events/Events';

import Styles from './styles';

const Tab = createBottomTabNavigator();

const HomeStackNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: '#e67a15',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: COLORS.primary,
          height: 90,
          borderWidth: 1,
          borderTopColor: COLORS.gredient,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderBottomWidth: 0,
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused, color}) => (
            <View style={Styles.container}>
              <TouchableOpacity style={Styles.subContent}>
                <Icon name="home" size={25} color={COLORS.white} />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Events"
        component={Events}
        options={{
          tabBarIcon: ({focused, color}) => (
            <View style={Styles.tabContainer}>
              <TouchableOpacity style={Styles.tabIcons}>
                <Icon name="event" size={25} color={COLORS.white} />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="calendar"
        component={AuthScreen}
        options={{
          tabBarIcon: ({focused, color}) => (
            <View style={Styles.calender}>
              <TouchableOpacity style={Styles.msNote}>
                <Icon name="music-note" size={25} color={COLORS.white} />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="book"
        component={LoginScreen}
        options={{
          tabBarIcon: ({focused, color}) => (
            <View style={Styles.bkContainer}>
              <TouchableOpacity style={Styles.bkTab}>
                <Icons name="bookshelf" size={25} color={COLORS.white} />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="user"
        component={ArtistScreen}
        options={{
          tabBarIcon: ({focused, color}) => (
            <View style={Styles.userContainer}>
              <TouchableOpacity style={Styles.userTab}>
                <Icons
                  name="account-multiple-outline"
                  size={25}
                  color={COLORS.white}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeStackNavigator;
