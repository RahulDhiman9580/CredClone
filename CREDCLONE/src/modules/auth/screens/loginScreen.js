
import React, { useState } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

//util import
import colors from '../../../utils/colors'
import localImages from '../../../utils/localImages'
import { vw, vh } from '../../../utils/dimensions'
import Animated, { FadeInDown, FadeInUp, Layout, LightSpeedInLeft } from 'react-native-reanimated'


const termsText = 'you agree to allow CRED to check  your credit information with';
const hyperTest = 'RBI approved credit bureaus';
const secondTermText = 'we need to check if you are a credit card holder and are aboce our accepted credit score threshold. it will not impact your credit score.'

const header = 'give us your \nmobile number';
const subHeader = 'to apply, we need your mobile number \nlinked to your credit cards'

export const LoginScreen = (props) => {
  const [termsAccepted, setTermsAccepted] = useState(false);

  const onPressCheckBox = () => {
    setTermsAccepted(!termsAccepted);
  };

  const onPressAgree = () => {

  };

  return (
    <SafeAreaView style={styles.mainContainer} >
      <Animated.View entering={LightSpeedInLeft} layout={Layout.springify()} style={styles.topView} >
        <Text>HELLO</Text>
      </Animated.View>
      <View style={styles.bottomView} >
        <TouchableOpacity onPress={onPressCheckBox} >
          <Image source={termsAccepted ? localImages.filled_checkbox : localImages?.unfilled_checkbox} style={styles.checkBox} />
        </TouchableOpacity>
        <Text style={styles.termsText} >{`${termsText} `}<Text style={styles.hyperText} >{hyperTest}</Text></Text>
        <Text style={[styles.termsText, { marginTop: vh(20) }]} >{secondTermText}</Text>

        <View style={styles.buttonHolder} >
          <TouchableOpacity onPress={onPressAgree} style={styles.button} >
            <Text style={styles.buttonText} >{'Agree & Continue'}</Text>
            <Image source={localImages.right_arrow} style={{ width: vw(20), height: vw(10), marginLeft: vw(10), marginTop: vh(4) }} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors?.black,
  },
  topView: {
    flex: 1,
    backgroundColor: colors.RED,
    paddingHorizontal: vw(20)
  },
  bottomView: {
    flex: 1,
    paddingHorizontal: vw(20),
    justifyContent: 'flex-end'
  },
  checkBox: {
    tintColor: colors.WHITE,
    width: vw(25),
    height: vw(25),
    marginBottom: vh(20)
  },
  termsText: {
    fontSize: vw(12),
    color: colors.GRAY_ALTO,
    fontWeight: '400'
  },
  hyperText: {
    fontSize: vw(13),
    color: colors.WHITE,
    textDecorationLine: 1,
    fontWeight: '500'
  },
  button:{
    backgroundColor: colors.WHITE,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: vh(16)
  },
  buttonText: {
    fontSize: vw(13),
    fontWeight: '700',
  },
  buttonHolder:{
    // position: 'absolute',
    // bottom:vh(40),
    width: '100%',
    alignSelf:'center',
    marginTop: vh(20)
  },
})