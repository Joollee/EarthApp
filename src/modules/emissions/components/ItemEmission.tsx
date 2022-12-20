import {View, ViewStyle, TextStyle, ImageStyle} from 'react-native';
import React from 'react';
import {Text} from '../../../components';
import {Icon} from '../../../components/icon/icon';
import {ImageTypes} from '../../../utils';
import {color} from '../../../themes';
interface Props {
    icon: ImageTypes,
    text_1: string,
    text_2: string,
    text_3: string,
}
export const ItemEmission = (
  {icon,
  text_1,
  text_2,
  text_3,}:Props
) => {
  return (
    <View style={ROOT}>
      <View style={CONTENT}>
        <Icon icon={icon} style={ICON} />
        <View style={VIEW_ITEM_TEXT}>
          <Text text={text_1} preset="default" />
          <Text style={TEXT_CONTENT}>
            <Text text={text_2} preset="secondary" style={TEXT_1} />
            <Text text={text_3} preset="secondary" style={TEXT_2} />
          </Text>
        </View>
      </View>
      <Icon icon="IC_VECTOR_STROKE" style={ICON_VECTOR} />
    </View>
  );
};
const ROOT: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingVertical: 12,
  borderTopWidth: 1,
  borderTopColor: color.palette.black10,
};
const CONTENT: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
};
const ICON: ImageStyle = {
  width: 26,
  height: 26,
  marginLeft: 16,
};
const VIEW_ITEM_TEXT: ViewStyle = {
  marginLeft: 16,
};
const TEXT_CONTENT: TextStyle = {
  marginTop: 4,
};
const TEXT_1: TextStyle = {
  color: color.palette.black,
};
const TEXT_2: TextStyle = {
  color: color.palette.primary90,
};
const ICON_VECTOR: ImageStyle = {
  width: 3.43,
  height: 6,
};
