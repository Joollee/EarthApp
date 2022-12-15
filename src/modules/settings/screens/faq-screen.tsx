import {View, ViewStyle, TextStyle, ImageStyle} from 'react-native';
import React from 'react';
import {color} from '../../../themes';
import {hp, wp} from '../../../utils';
import {Icon} from '../../../components/icon/icon';
import {Text} from '../../../components';

export default function FaqScreen() {
  return (
    <View style={ROOT}>
      <View style={VIEW_1}>
        <Icon icon="IC_VECTOR_STROKE_HEIGHT" style={ICON}></Icon>
        <Text
          text="How accurate are my carbon emissions?"
          preset="h3"
          style={TEXT_CONTENT}></Text>
      </View>
      <View style={VIEW_2}>
        <View style={VIEW_CONTENT}>
          <Icon icon="IC_VECTOR_STROKE_DOWN" style={ICON_SECOND} />
          <View style={TEXT_CONTAINER_CONTENT}>
            <Text
              text="Why do I have to enter manually my"
              preset="h3"
              style={TEXT_CONTENT_SECOND}></Text>
            <Text
              text="emissions?"
              preset="h3"
              style={TEXT_CONTENT_SECOND}></Text>
          </View>
        </View>
        <Text text="We are working on adding recurrent emissions but we won’t go further than that, meaning you won’t be able to get your carbon footprint automatically calculated from your expenses for example. It’s annoying by design, as a kind reminder to pollute and consume less."
         preset='default' style={TEXT_DETAIL}
        />
      </View>
    </View>
  );
}
const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
};
const VIEW_1: ViewStyle = {
  marginTop: hp(26),
  marginLeft: wp(14),
  width: wp(348),
  height: hp(47),
  alignItems: 'center',
  flexDirection: 'row',
  borderColor: color.palette.primary10,
  borderRadius: 10,
  borderWidth: 1.5,
};
const ICON: ImageStyle = {
  width: wp(12),
  height: hp(6.86),
  marginLeft: wp(12),
};
const TEXT_CONTENT: TextStyle = {
  textAlign: 'center',
  marginLeft: wp(13),
};
const VIEW_2: ViewStyle = {
  marginLeft: wp(12),
  width: wp(348),
  height: hp(165),
  borderRadius: 10,
  borderColor: color.palette.primary10,
  borderWidth: 1.5,
  marginTop: hp(23),
};
const ICON_SECOND: ImageStyle = {
  height: hp(6.86),
  width: wp(12),
  marginLeft: wp(12),
  marginTop: hp(1),
};
const TEXT_CONTENT_SECOND: TextStyle = {
  marginLeft: wp(12),
};
const VIEW_CONTENT: ViewStyle = {
  height: hp(62),
  borderBottomColor: color.palette.primary10,
  borderBottomWidth: 1.5,
  alignItems: 'center',
  flexDirection: 'row',
};
const TEXT_CONTAINER_CONTENT: ViewStyle = {
  flexDirection: 'column',
  justifyContent: 'center',
};
const TEXT_DETAIL: TextStyle = {
  color: color.palette.black70,
  paddingHorizontal: wp(15)
}