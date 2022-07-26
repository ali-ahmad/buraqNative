import React, {Component} from "react";

import { NavigationContainer, DefaultTheme} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';

import HomeStackNavigator from "./src/routes";
import SignUp from '../buraqNative/src/views/AuthScreen/AuthScreen';
import Login from '../buraqNative/src/views/LoginScreen/LoginScreen';

interface Props {
    navigation: any
  }

  class App extends Component<Props>  {
    constructor(props:any) {
        super(props)
    }
   goToTabs() {
    this.props.navigation.navigate('Tabs');
  }
  render(){
    return (
          <>
           <Login navigation={this.props.navigation}/>
          </>
        
       );
  }
};

const Stack = createStackNavigator();

function Stacks() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="App"
        component={App}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Tabs"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
        }}
      />
       <Stack.Screen
        name="Signup"
        component={SignUp}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent",
    },
};
function MainScreen(){
    return(
        <NavigationContainer theme={theme}>
            <Stacks/>
        </NavigationContainer>
    )
}

export default MainScreen;