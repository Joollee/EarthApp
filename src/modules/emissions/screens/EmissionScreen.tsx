import {View, ViewStyle, ImageStyle, TextStyle, Image} from 'react-native';
import React, {FC} from 'react';
import {Button, Text} from '../../../components';
import {hp, IMAGES, wp} from '../../../utils';
import {color} from '../../../themes';
import {NavigatorParamList} from '../../../navigators/bottom-tab';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
interface Props {
  onPress: () => void;
}

export const EmissionScreen: FC<
  NativeStackScreenProps<NavigatorParamList, 'emission'>
> = ({navigation}) => {
  const pressAbout = () => {
    navigation.navigate('add_emission');
  };

  return (
    <View style={ROOT}>
      <Image source={IMAGES.IMG_RESTAURANT} style={IMAGE_RESTAURANT} />
      <Text text="Hi there 👋" preset="title" style={TEXT_TITLE}></Text>
      <Text
        text="Thanks for joining our fight against climate change!"
        preset="default"
        style={TEXT_TXT1}></Text>
      <Text
        text="To start tracking your CO2 emissions, tap the button below."
        preset="default"
        style={TEXT_TXT2}></Text>
      <Button
        icon_button="IC_VECTOR"
        onPress={pressAbout}
        text="Add my first emission"
        style={BUTTON}
      />
    </View>
  );
};
const ROOT: ViewStyle = {
  flex: 1,
  backgroundColor: color.background,
};

const IMAGE_RESTAURANT: ImageStyle = {
  height: hp(216.51),
  width: undefined,
  aspectRatio: 216 / 200,
  marginTop: hp(51),
  alignSelf: 'center',
};
const TEXT_TITLE: TextStyle = {
  textAlign: 'center',
  marginTop: hp(100),
};
const TEXT_TXT1: TextStyle = {
  marginHorizontal: wp(41),
  textAlign: 'center',
  marginTop: hp(24),
};
const TEXT_TXT2: TextStyle = {
  marginHorizontal: hp(41),
  textAlign: 'center',
};
const BUTTON: ViewStyle = {
  marginTop: hp(66),
};
