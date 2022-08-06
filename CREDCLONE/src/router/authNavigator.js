import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';

//util imports
import screenNames from '../utils/screenNames';

//screen imports
import { TutorialScreen } from '../modules/tutorial';
import { LoginScreen } from '../modules/auth';


const StackNavigator = createNativeStackNavigator();
export const AuthNavigator = (props) => {
  return (
    <StackNavigator.Navigator  screenOptions={{
      headerShown: false
    }} >
        <StackNavigator.Screen
        name={screenNames.TUTORIAL_SCREEN}
        component={TutorialScreen}
        />
         <StackNavigator.Screen
        name={screenNames.LOGIN_SCREEN}
        component={LoginScreen}
        />
    </StackNavigator.Navigator>
  )
}
