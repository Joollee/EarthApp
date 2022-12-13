import { View,ViewStyle,TextStyle } from 'react-native'
import React from 'react'
import { color } from '../../../themes'
import { hp, wp } from '../../../utils'
import { Text } from '../../../components'

export  const ACT1Screen = () => {
  return (
    <View style={ROOT}>
      <Text text='Eating seasonal fruits and vegetables' preset='h1'style={TEXT}/>
      <Text text='We all love tomatoes. But eating tomatoes during the whole year is not sustainable. During winter, we eat imported tomatoes or cultivated in greenhouses. And that’s a pity : tomatoes are more juicy and tasteful during summer. Respecting nature by eating seasonal fruit and vegetables can be a very interesting challenge to make you discover new ingredients such as black radish, lotus root or winter melon.'
      preset='default' style={TEXT}/>
      <Text text='Fun fact : cheese are also seasonal.' preset='default' style={TEXT}></Text>
      <Text text='Eating locally' preset='h1'style={TEXT}/>
      <Text text='You’re already eating less meat or you’re already vegetarian? Great! Next step, you can become a locavore, which means that the food you’re eating is limited from an area of 50 to 200 kilometres. Of course, it’s easier to eat locally when you leaving in the countryside than in a big town. But it is still possible!'
      preset='default' style={TEXT}/>
    </View>
  )
}
const ROOT: ViewStyle = {
 flex: 1,
 backgroundColor: color.palette.white,
 paddingHorizontal: wp(18),
 paddingTop: hp(18)
}
const TEXT: TextStyle= {
    marginBottom: hp(8)
}