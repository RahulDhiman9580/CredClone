import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import colors from '../../../utils/colors'

export const TutorialScreen = (props) => {
  return (
    <SafeAreaView style={styles.mainContainer} >
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor: colors.black
  }
})