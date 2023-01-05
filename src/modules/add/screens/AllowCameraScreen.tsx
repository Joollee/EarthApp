import {View, ViewStyle, TextStyle, ImageStyle, Image} from 'react-native';
import React, {FC} from 'react';
import {NavigatorParamList} from '../../../navigators/bottom-tab';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {color} from '../../../themes';
import {Button, Text} from '../../../components';
import {hp, IMAGES, ImageTypes, wp} from '../../../utils';

export const AllowCameraScreen: FC<
  NativeStackScreenProps<NavigatorParamList, 'allow_camera'>
> = ({navigation}) => {
    const onPress = () => {navigation.navigate("streaming")}
  return (
    <View style={ROOT}>
      <Image source={IMAGES.IMG_CAMERA} style={IMAGE} />
      <Text text="Allow camera permission" preset="h1" style={TEXT_1} />
      <Text
        text="To start scanning a product, you need to give NMF.earth app the permission to use your camera."
        preset="default"
        style={TEXT_2}
      />
      <Button text="Allow" onPress={onPress} style={BUTTON} />
    </View>
  );
};
const ROOT: ViewStyle = {
  flex: 1,
  backgroundColor: color.palette.white,
  alignItems: 'center',
};
const IMAGE: ImageStyle = {
  width: wp(116),
  height: hp(116),
  marginTop: hp(209),
};
const TEXT_1: TextStyle = {
  marginTop: hp(34.46),
};
const TEXT_2: TextStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: wp(82),
};
const BUTTON: ViewStyle = {
  width: wp(327),
  marginTop: hp(132)
}
