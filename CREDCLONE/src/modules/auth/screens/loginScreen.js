
import React, { useEffect, useRef, useState } from 'react'
import { Animated, Easing, Image, Keyboard, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

//util import
import colors from '../../../utils/colors'
import localImages from '../../../utils/localImages'
import { vw, vh, screenHeight, screenWidth } from '../../../utils/dimensions'
// import  from 'react-native-reanimated'
import { useIsFocused } from '@react-navigation/native'
import fonts from '../../../utils/fonts'


const termsText = 'you agree to allow CRED to check  your credit information with';
const hyperTest = 'RBI approved credit bureaus';
const secondTermText = 'we need to check if you are a credit card holder and are aboce our accepted credit score threshold. it will not impact your credit score.'

const header = 'give us your \nmobile number';
const subHeader = 'to apply, we need your mobile number \nlinked to your credit cards'

export const LoginScreen = (props) => {
  const isFocused = useIsFocused();
  const animationValue = useRef(new Animated.Value(0)).current;
  const shakeTextAnimValue = useRef(new Animated.Value(0)).current;
  const textInputRef = useRef(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');
  const [textInputFocused, setTextInputFocused] = useState(false);

  useEffect(() => {
    if(isFocused){
      setTimeout(() => {
        startSlideUpAnimaton()
      },10)
    };
  }, [isFocused]);

  /**
   * slide up animation code to slide up the number input area
   */
  const startSlideUpAnimaton = () => {
    Animated.timing(animationValue,{
      duration: 1000,
      toValue: 1,
      easing: Easing.in,
      useNativeDriver: true
    }).start(({finished}) => {
      console.log('is finished : ', finished);
      if(finished)
      textInputRef?.current?.focus()
    });
  }

  const onPressCheckBox = () => {
    setTermsAccepted(!termsAccepted);
  };

  const onPressAgree = () => {
    if( (mobileNumber?.length === 10) && !termsAccepted ){
      Animated.sequence([
        Animated.timing(shakeTextAnimValue, { toValue: 10, duration: 60, useNativeDriver: true }),
        Animated.timing(shakeTextAnimValue, { toValue: -10, duration: 60, useNativeDriver: true }),
        Animated.timing(shakeTextAnimValue, { toValue: 10, duration: 60, useNativeDriver: true }),
        Animated.timing(shakeTextAnimValue, { toValue: 0, duration: 60, useNativeDriver: true })
      ]).start();
    }
  };

  const animatedViewStyle = {
    transform:[{
      translateY: animationValue?.interpolate({
        inputRange: [0,1],
        outputRange: [screenHeight, 10]
      })
    }],
    width: vw(screenWidth),
    height: vw(200),
  };

  const onChangeText = (text) => {
    setMobileNumber(text);
  }

  return (
    <SafeAreaView style={styles.mainContainer} >
      {
       Array(5).fill({})?.map((item, index) =>  <View style={{
        borderWidth: vw(0.2),
        borderColor: colors?.WHITE,
        height: 50*index,
        width: 50*index,
        borderRadius: vw(50*index/2),
        position: 'absolute',
        zIndex:1,
        right: -vw(20*index),
        top: -vw(15*index)
      }} /> )
      }
      <View style={styles.topView} >
        <Animated.View style={animatedViewStyle} >
          <Text style={styles.header} >{`give us your\nmobile number`}</Text>
          <Text style={styles.subHeader} >{`to apply, we need your mobile number\nlinked to your credit cards`}</Text>
          <TextInput
          value={mobileNumber} 
          onChangeText={onChangeText}
          style={{marginTop: vh(30), paddingVertical: vh(20), fontSize: vw(30), fontFamily: fonts?.SEMIBOLD, color: colors.GREY_TEXT_COLOR}}
          placeholderTextColor={colors?.GREY_TEXT_COLOR}
          placeholder={'mobile number'}
          keyboardType={'numeric'}
          maxLength={10}
          ref={textInputRef}
          onFocus={() => setTextInputFocused(true)}
          onBlur={() => setTextInputFocused(false)}
            />
        </Animated.View>
      </View>
      <View style={styles.bottomView} >
        <Animated.View style={{ transform: [ { translateX: shakeTextAnimValue  }] }} >
        <TouchableOpacity onPress={onPressCheckBox} >
          <Image source={termsAccepted ? localImages.filled_checkbox : localImages?.unfilled_checkbox} style={styles.checkBox} />
        </TouchableOpacity>
        <Text style={styles.termsText} >{`${termsText} `}<Text style={styles.hyperText} >{hyperTest}</Text></Text>
        <Text style={[styles.termsText, { marginTop: vh(20) }]} >{secondTermText}</Text>
        </Animated.View>
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
    backgroundColor: colors.LIGHT_BLACK_BG,
    paddingHorizontal: vw(20),
  },
  bottomView: {
    // flex: 1,
    paddingHorizontal: vw(20),
    justifyContent: 'flex-end',
    position:'absolute',
    zIndex:1,
    bottom:vh(0),
    paddingBottom: vh(40),
    backgroundColor: colors.DARK_BLACK_BG,
    height: vh(screenHeight/1.8)
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
  sideLineOverlay:{
    borderWidth: vw(0.2),
    borderColor: colors?.WHITE,
    height: vh(screenHeight/5),
    width: vw(screenHeight/5),
    borderRadius: vw(screenHeight/10),
    zIndex: 1,
    position: 'absolute',
    right: -vw(120),
    top: -vw(60)
  },
  header:{
    fontSize: vw(21),
    color:colors.WHITE,
    fontFamily: fonts?.SEMIBOLD,
    marginTop: vh(40)
  },
  subHeader:{
    fontSize: vw(15),
    color: colors.GREY_TEXT_COLOR,
    marginTop: vh(10),
    fontFamily: fonts?.REGULAR
  },
  placeHolder:{
    fontSize: vw(20),
    color: colors.GREY_TEXT_COLOR
  },
  textInputText:{

  }
})