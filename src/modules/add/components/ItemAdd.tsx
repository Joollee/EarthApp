import {
  View,
  TouchableOpacity,
  ViewStyle,
  ImageStyle,
  TextStyle,
} from 'react-native';
import React from 'react';
import {hp, ImageTypes, wp} from '../../../utils';
import {color} from '../../../themes';
import {Icon} from '../../../components/icon/icon';
import {Text} from '../../../components';
interface Props {
  icon: ImageTypes;
  text: string;
  check?: boolean
  onPress: () => void;
}
export const ItemAdd = ({icon, text, onPress,check}: Props) => {
  return (
    <TouchableOpacity style={ROOT} onPress={onPress}>
      <View style={[VIEW_ICON_NAME,!check&&VIEW_NO_ICON]}>
        {check&&<Icon icon={icon} style={ICON} />}
        <Text text={text} preset="h3" style={TEXT}/>
      </View>
      <Icon icon="IC_VECTOR_STROKE" style={VECTOR} />
    </TouchableOpacity>
  );
};
const ROOT: ViewStyle = {
  height: hp(48),
  backgroundColor: color.palette.primary10,
  paddingHorizontal: 8,
  justifyContent: 'space-between',
  flexDirection: 'row',
  alignItems: 'center',
  borderRadius: 4,
  borderWidth: 1,
  borderColor: color.palette.primary,
  marginTop: hp(20)
};
const ICON: ImageStyle = {
  width: wp(16),
  height: hp(16),
  tintColor: color.palette.primary,
  
 
};
const VIEW_ICON_NAME: ViewStyle = {
  marginLeft: wp(8),
  alignItems: 'center',
  flexDirection: 'row'
};
const VECTOR: ImageStyle = {
  width: wp(8),
  height: hp(8),
  tintColor: color.palette.primary,
};
const TEXT: TextStyle = {
    marginLeft: wp(16)
}
const VIEW_NO_ICON: ViewStyle = {
  marginLeft:-5
}
