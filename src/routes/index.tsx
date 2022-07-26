import * as React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from '../views/HomeScreen/Home';
import AuthScreen from '../views/AuthScreen/AuthScreen';
import LoginScreen from '../views/LoginScreen/LoginScreen';
import AudioScreen from '../views/Audios/Audios';
import ArtistScreen from '../views/Artists/Artist';

const Tab = createBottomTabNavigator();

const HomeStackNavigator = () => {
  return (
     <Tab.Navigator initialRouteName='Home' screenOptions={({ route }) => ({
      headerShown: false,
      tabBarActiveTintColor: '#e67a15',
      tabBarInactiveTintColor: 'gray',
      tabBarShowLabel:false,
      tabBarStyle:{
        backgroundColor:'#fff',
        height:60,
        paddingBottom:12
      }
    })}>
      <Tab.Screen name='Home' component={Home} options={{
        tabBarIcon:({focused, color}) => (
          <Icon name={focused ? 'home' : 'home-outline'}  size={25} color="#000" />
        )
       }}/>
        <Tab.Screen name='music-circle' component={AudioScreen} options={{
        tabBarIcon:({focused, color}) => (
          <Icon name='music' size={25} color='#000'/>
        )
       }}/>
        <Tab.Screen name='calendar' component={AuthScreen} options={{
        tabBarIcon:({focused, color}) => (
          <Icon name='calendar' size={25} color='#000'/>
        )
       }}/>
        <Tab.Screen name='book' component={LoginScreen} options={{
        tabBarIcon:({focused, color}) => (
          <Icon name='book' size={25} color='#000'/>
        )
       }}/>
        <Tab.Screen name='user' component={ArtistScreen} options={{
        tabBarIcon:({focused, color}) => (
          <Icon name='users' size={25} color='#000'/>
        )
       }}/>
     </Tab.Navigator>
  );
};

export default HomeStackNavigator;
