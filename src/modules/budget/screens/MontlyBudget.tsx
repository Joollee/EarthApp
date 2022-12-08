import {StyleSheet, View, ViewStyle, TextStyle} from 'react-native';
import React from 'react';
import {Button, Text} from '../../../components';
import {color} from '../../../themes';
import Slider from '@react-native-community/slider';






export function MontlyBudget() {
  const listItem = (country: string,mass: string) =>  {
    return (
      <View style = {TEXT_COUNTRY}>
        <Text text={country} preset='default' style = {TXT_COUNTRY}/>
        <Text text={mass} preset='default' style={TXT_COUNTRY}/>
      </View>
    )
  }
  return (
    <View style={ROOT}>
      <Text
        text="Slide to set your monthly budget"
        preset="h3"
        style={TEXT_SLIDE}
      />
      <Slider
        style={{height: 8, marginHorizontal:24, marginVertical: 15,}}
        minimumValue={0}
        maximumValue={400}
        value={300}
        minimumTrackTintColor={color.palette.primary50}
        maximumTrackTintColor={color.palette.gray0}
      />
      <Text text='200 kgCO2eq' preset='h3' style = {TEXT_CO2}/>
      <Text text='Average monthly emissions per capita in a sample of countries' preset='h3'style={TEXT_AVERAGER}/>
      <View style = {VIEW_AGGREMENT}>
      {listItem('Luxembourg','3.5 tons')}
      {listItem('United States','1.5 tons')}
      {listItem('Japan','900 kg')}
      {listItem('Sweden','595 kg')}
      {listItem('France','575 kg')}
      {listItem('China','522 kg')}
      {listItem('Brazil','208 kg')}
      {listItem('India','139 kg')}
      {listItem('Ethiopia','8.3 kg')}
      </View>
      <View style= {VIEW_1}>
        <Text text='If you wish to respect the Paris agreement (to keep the rise in global average temperature below 2 degrees), set your monthly budget at :' preset='default'
        style = {TXT_1} />
        <Text text='166 kgCO2eq' preset='primaryBold' style = {TXT_2}/>
      </View>
      <Button text='Save' icon_button= {'IC_SAVE'} style = {BUTTON} onPress = {null}/>
    </View>
  );
}

const ROOT: ViewStyle = {
  flex: 1,
  backgroundColor: color.palette.white,
};
const TEXT_SLIDE: TextStyle = {
  marginTop: 22,
  marginLeft: 15,
};
const TEXT_CO2: TextStyle = {
  marginLeft: 19,
  marginTop: 16,
  color: color.palette.secondary
}
const TEXT_AVERAGER: TextStyle = {
  marginHorizontal: 24,
  
  marginTop: 28,
  justifyContent: 'center',
  alignItems: 'center'
}
const TXT_COUNTRY: TextStyle = {

}
const TEXT_COUNTRY: TextStyle = {
  paddingHorizontal: 95,
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 12

}
const VIEW_AGGREMENT: ViewStyle= {
  marginTop: 29
}
const TXT_2: TextStyle = {
  color: color.palette.primary
}
const VIEW_1: ViewStyle = {
  marginHorizontal: 24,
  flexDirection: 'column',
  alignItems: 'center'
}
const TXT_1: TextStyle = {
  textAlign: 'center'
}
const BUTTON: ViewStyle = {
  marginTop: 20
}
