import React, { useEffect, useState } from 'react'
import { Animated, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

// util imports
import colors from '../../../utils/colors'
import { screenWidth, vh, vw } from '../../../utils/dimensions';

const tutorialData = [
  {
    _id: '1',
    image: '',
    header: `pay bills \nget rewards`,
    subHeader: 'earn assured cashbacks and rewards \nevery time you pay a credit card bill'
  },
  {
    _id: '2',
    image: '',
    header: `unlock special offers on \ntop brands`,
    subHeader: 'use CRED coins for claiming member only  \ndiscounts'
  },
  {
    _id: '3',
    image: '',
    header: `say goodbye to \nlate fees`,
    subHeader: 'never miss a due date with timely \npayment reminders on whatsapp'
  },
];

export const TutorialScreen = (props) => {
  const animValue = React.createRef(new Animated.Value(0));
  const [ focusedIndex, setFocusedIndex ] = useState(0);
  const [ indexMovingTo, setIndexMovingTo ] = useState(0);
  const [ xOffSet, setxOffSet ] = useState(0);
  const [ increaseBy, setIncreaseBy ] = useState(0);
  console.log('index moving to ', indexMovingTo, xOffSet);
  
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.renderView} >
        <Text style={styles.headerStyle} >{item?.header}</Text>
        <Text style={styles.subHeader} >{item?.subHeader}</Text>
      </View>
    );
  };

  
  return (
    <SafeAreaView style={styles.mainContainer} >
      <View style={styles.flatListContainer} >
        <FlatList
          data={tutorialData}
          onScroll={(e) => {
            const {nativeEvent} = e;
            //don't update the focusedIndex unless we get a value 0 , 1 or 2 ( we are avoiding decimals )
            if( (nativeEvent?.contentOffset?.x/screenWidth) === 0 || (nativeEvent?.contentOffset?.x/screenWidth) === 1 || (nativeEvent?.contentOffset?.x/screenWidth) === 2 ){
            setFocusedIndex( (nativeEvent?.contentOffset?.x/screenWidth)  );
            console.log('stop scroll : ');
            setxOffSet(0);
            setIncreaseBy(0);
            }

            //we are using this to know the index of item the user is scrolling to 
            setIndexMovingTo( nativeEvent?.contentOffset?.x/screenWidth > 0 && nativeEvent?.contentOffset?.x/screenWidth <= 1 
              ? 1
              : nativeEvent?.contentOffset?.x/screenWidth > 1 && nativeEvent?.contentOffset?.x/screenWidth <= 2 
              ? 2
              : nativeEvent?.contentOffset?.x/screenWidth > 2 && nativeEvent?.contentOffset?.x/screenWidth <= 3  
              ? 3 
              : 0 );
              
            if( xOffSet < nativeEvent?.contentOffset?.x ||  xOffSet > nativeEvent?.contentOffset?.x ){
            setxOffSet( nativeEvent?.contentOffset?.x );
            if( increaseBy <= 20 )
            setIncreaseBy( increaseBy+1 );
            } 
            
          } }
          horizontal
          pagingEnabled
          keyExtractor={(item) => item?._id}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.indicatorHolder} >
      {
        tutorialData?.map((item, index) => <View  key={item?._id} style={ index === focusedIndex ? [styles.focusedView, {width:  xOffSet !==0 ? vw(40) - increaseBy : vw(40)}] : index === indexMovingTo ?  [styles.unFocusedView, {width: xOffSet !== 0 ? vw(20) + increaseBy : vw(20) }] : styles.unFocusedView } ></View>)
      }
      </View>
      <View style={styles.buttonHolder} >
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} >{'Become a member'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor: colors.black
  },
  button:{
    backgroundColor: colors.WHITE,
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: vh(16)
  },
  buttonText: {
    fontSize: vw(13),
    fontWeight: '600',
  },
  buttonHolder:{
    position: 'absolute',
    bottom:vh(60),
    width: '100%',
  },
  flatListContainer:{
    flex:0.8
  },
  renderView:{
    width: screenWidth,
    justifyContent: 'flex-end',
    paddingHorizontal: vw(30),
    paddingVertical: vh(10)
  },
  headerStyle:{
    fontSize: vw(26),
    fontWeight: 'bold',
    letterSpacing: 0.5,
    color: colors.WHITE
  },
  subHeader:{
    color: colors.ALTO,
    fontSize: vw(13),
    marginTop: vh(16),
    lineHeight: vh(20)
  },
  indicatorHolder:{
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: vw(30)
  },
  focusedView:{
    width: vw(40),
    height: vh(5),
    borderWidth: 1,
    borderColor: colors.ALTO_05,
    marginLeft: vw(5)
  },
  unFocusedView: {
    width: vw(20),
    height: vh(5),
    backgroundColor: colors.ALTO_05,
    marginLeft: vw(5)
  }
})