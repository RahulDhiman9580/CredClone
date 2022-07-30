import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';

//util imports
import screenNames from '../utils/screenNames';
import { AuthNavigator } from './authNavigator';

const StackNavigator = createNativeStackNavigator();

export const MainRouter = (props) => {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator screenOptions={{
        headerShown: false
      }} >
        <StackNavigator.Screen
          name={screenNames.AUTH_NAVIGATOR}
          component={AuthNavigator}
        />
      </StackNavigator.Navigator>
    </NavigationContainer>
  )
}
