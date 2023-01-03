import {View, ViewStyle, TextStyle, ImageStyle, TouchableOpacity} from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import {color} from '../../../themes';
import {Button, Text} from '../../../components';
import {hp, wp} from '../../../utils';
import {Icon} from '../../../components/icon/icon';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigatorParamList } from '../../../navigators/bottom-tab';

export const Add_Emission_EndScreen:FC<NativeStackScreenProps<NavigatorParamList,"add_emission_end">> = ({navigation, route}) => {
  const {title} = route.params || {}

  const [text, setText] = useState('Text mau')

  useEffect(() => {
    if(title) setText(title)
  }, [title])

  const onPress = () => navigation.navigate("periodicity")
  const onPressButton = () => navigation.navigate("add")

  return (
    <View style={ROOT}>
      <Text style={TEXT_EMIT}>
        <Text text="You emitted :" preset="h1" />
        <Text text=" 2,1 kgCO2eq" preset="h2" style={TEXT_KG} />
      </Text>
      <View style={VIEW_NAME}>
        <Icon icon="IC_ADD" style={ICON_NAME} />
        <Text text="Name this emission" preset="h3" style={TEXT_NAME} />
      </View>
      <Text text="Date" preset="h1" style={TEXT_DATE_CONTENT} />
      <View style={VIEW_DATE}>
        <Icon icon="IC_31DAY" style={ICON_DATE} />
        <Text text="Friday 25th December 2021" preset="h3" style={TEXT_DATE} />
        <Icon icon="IC_EDIT" style={ICON_EDIT} />
      </View>
      <Text text="Periodicity" preset="h1" style={TEXT_PERIODIC} />
      <TouchableOpacity style={VIEW_PERIODIC} onPress={onPress}>
        <Icon icon="IC_REPEAT" style={ICON_REPEAT} />
        <Text
          text={text}
          preset="h3"
          style={TEXT_DAY}
        />
        <Icon icon="IC_EDIT" style={ICON_EDIT_DAY} />
      </TouchableOpacity>
      <Button text="Add this emission" onPress={onPressButton} style={BUTTON} />
    </View>
  );
};
const ROOT: ViewStyle = {
  flex: 1,
  paddingHorizontal: 16,
  backgroundColor: color.palette.white,
};
const TEXT_EMIT: TextStyle = {
  marginTop: hp(35),
  justifyContent: 'center',
  flexDirection: 'row',
};
const TEXT_KG: TextStyle = {
  color: color.palette.black60,
};
const ICON_NAME: ImageStyle = {
  width: wp(14),
  height: hp(14),
  tintColor: color.primary,
};
const TEXT_NAME: TextStyle = {
  color: color.primary,
  marginLeft: 8,
};
const VIEW_NAME: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  height: hp(35),
  marginTop: hp(25),
};
const TEXT_DATE_CONTENT: ViewStyle = {
  marginTop: hp(20),
};
const ICON_DATE: ImageStyle = {
  width: wp(14),
  height: hp(14),
  tintColor: color.palette.secondary,
};
const TEXT_DATE: TextStyle = {
  color: color.palette.black70,
  marginLeft: 8,
};
const ICON_EDIT: ImageStyle = {
  width: 14,
  height: 14,
  tintColor: color.primary,
  marginLeft: 8,
};
const VIEW_DATE: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 12,
  height: hp(35),
};
const TEXT_PERIODIC: TextStyle = {
  marginTop: 20,
};
const ICON_REPEAT: ImageStyle = {
  width: 14,
  height: 14,
};
const VIEW_PERIODIC: ViewStyle = {
  paddingHorizontal: 0.5,
  paddingVertical: 8,
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
};
const TEXT_DAY: TextStyle = {
  color: color.palette.black70,
  width: wp(300),
  height: hp(38)
};
const ICON_EDIT_DAY: ImageStyle = {
  width: 14,
  height: 14,
  tintColor: color.primary,
};
const BUTTON: ViewStyle = {
  marginTop: hp(272),
};
