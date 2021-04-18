import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import loginscreen from "./screens/loginscreen";
import feedback from './screens/feedback';

const Stack = createStackNavigator();

const globalScreenOptions ={
  headerStyle: {backgroundColor:"#FCC5E0"},
  headerTitleStyle: { color: "white"},
  headerTintColor: "black",

};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "loginscreen" screenOptions={globalScreenOptions}>
      <Stack.Screen name= 'Hey' component={loginscreen} />
      <Stack.Screen name= 'feedback' component={feedback} />
      </Stack.Navigator>      
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
