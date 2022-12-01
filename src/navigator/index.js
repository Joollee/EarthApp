import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View, Text } from 'react-native';

import { AppButton } from '../components/elements';
import Textshow  from '../components/elements/TexT';
function HomeScreen (props) {
  return (
    <View style = {styles.container}>
      <View style = {styles.viewWelcom}>
        <View style = {styles.viewImage}></View>
        <View style = {styles.viewTxtWellcom}>
          <Textshow TextshowText = {'wecom'}></Textshow>
        </View>
        <View style = {styles.viewTxt1}></View>
        <View style = {styles.viewTxt2}></View>
      </View>
      <AppButton/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  viewWelcom: {
    height: 549,
    marginTop: 37,
    marginHorizontal: 42,
    backgroundColor: 'red'
  },
  viewImage: {
    marginHorizontal: 34.22,
    backgroundColor: 'yellow',
    height: 200,
    marginTop: 84,
  },
  viewTxtWellcom: {
    height: 24,
    marginTop: 76,
    marginHorizontal: 16,
    marginLeft: 17,
    backgroundColor: 'pink'
  },
  viewTxt1: {
    height: 34,
    marginTop: 25,
    backgroundColor: 'green',
    marginHorizontal: -4,
  },
  viewTxt2: {
    height: 15,
    marginHorizontal: -4,
    marginTop: 7,
    backgroundColor: 'green'

  },
  touchoblae: {
    height: 39,
    marginTop: 119,
    marginHorizontal: 24,
    borderRadius: 20,
    backgroundColor: '#0F853B',
    alignItems: 'center',
    justifyContent: 'center'
  },
  txtTouchable: {
   fontFamily: 'Inter-Regular',
   fontSize: 16,
   textAlign: 'center'
  }
});

export default HomeScreen