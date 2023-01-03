import {
  View,
  TouchableOpacity,
  ViewStyle,
  StyleProp,
  TextStyle,
  Image,
  ImageStyle,
  TouchableOpacityProps
} from 'react-native';
import React from 'react';
import {color} from '../../themes/color';
import {Text} from '..';

import {IMAGES, ImageTypes} from '../../utils';
import {Icon} from '../icon/icon';

interface Props extends TouchableOpacityProps {
  style?: StyleProp<ViewStyle>;
  text: string;
  icon_button?: ImageTypes;
  onPress: () => void;
}
export const Button = ({
  style,
  text,
  icon_button,
  onPress,
  ...props
}: Props) => {
  return (
    <TouchableOpacity {...props} style={[BUTTON, style]} onPress={onPress}>
      {icon_button && <Icon icon={icon_button} style={ACTIVE} />}
      <Text text={text} preset="h3" style={TXT_BUTTON}></Text>
    </TouchableOpacity>
  );
};
const BUTTON: ViewStyle = {
  borderRadius: 20,
  height: 39,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: color.palette.primary,
  marginHorizontal: 24,
  flexDirection: 'row',
};
const TXT_BUTTON: TextStyle = {
  color: color.palette.white,
  marginLeft: 8,
};
const ACTIVE: ImageStyle = {
  tintColor: color.palette.white,
  width: 14,
  height: 14,
};
