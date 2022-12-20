import { View,ViewStyle,TextStyle,ImageStyle} from 'react-native'
import React from 'react'
import { color } from '../../../themes'
import { hp, wp } from '../../../utils'
import { Text } from '../../../components'
import { ItemEmission } from '../components'

export const JuneEmissionsScreen =() => {
  return (
    <View style= {ROOT}>
      <View style={CONTENT}>
        <Text text='981 kgCO2eq' preset='h2' style={KILOGRAM}/>
        <Text text='109 % of budget' preset='h3' style={PERCENT}/>
      </View>
      <ItemEmission icon='IC_RESTAURANT' text_1='Vegetarian meal' text_2='2 kgCO2eq' text_3='Offset'/>
      <ItemEmission icon='IC_FILM' text_1='Netflix and chill' text_2='826 kgCO2eq •' text_3='Offset'/>
      <ItemEmission icon='IC_CAR' text_1='Car ride to summer house' text_2='826 kgCO2eq •' text_3='Offset'/>
      <ItemEmission icon='IC_PLANE' text_1='Flight from Paris to New York' text_2='826 kgCO2eq' text_3=''/>
      <ItemEmission icon='IC_RESTAURANT' text_1='Meal with family' text_2='13 kgCO2eq' text_3=''/> 
      <ItemEmission icon='IC_ELECTRICITY' text_1='Summer house electricity' text_2='71 kgCO2eq' text_3=''/> 
    </View>
  )
}
const ROOT:ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1
}
const CONTENT: ViewStyle ={
  height: hp(54),
  borderBottomWidth: 2,
  borderBottomColor: color.palette.primary10,
  paddingHorizontal: wp(16),
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row'
}
const KILOGRAM:TextStyle = {
  color: color.palette.black70
}
const PERCENT:TextStyle = {
  color: color.palette.warning
}