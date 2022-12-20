import { View,ViewStyle} from 'react-native'
import React from 'react'
import { Text } from '../../../components'
import { color } from '../../../themes'
import { ItemEmission } from '../components'

export const RecurringEmissionsScreen = () => {
  return (
    <View style={ROOT}>
      <ItemEmission icon='IC_RESTAURANT' text_1='Vegetarian meal' text_2='2 kgCO2eq' text_3=''/>
      <ItemEmission icon='IC_FILM' text_1='Netflix and chill' text_2='826 kgCO2eq •' text_3='Offset'/>
      <ItemEmission icon='IC_CAR' text_1='Car ride to summer house' text_2='21 kgCO2eq' text_3=''/>
    </View>
  )
}
const ROOT:ViewStyle = {
  flex:1,
  backgroundColor: color.palette.white,
  paddingHorizontal: 16
}