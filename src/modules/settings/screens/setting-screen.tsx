import {View, ViewStyle, TextStyle, ImageStyle, Alert, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {color, typography} from '../../../themes';
import {Text} from '../../../components';
import {hp, IMAGES, wp} from '../../../utils';
import {Icon} from '../../../components/icon/icon';
import {NavigatorParamList} from '../../../navigators/bottom-tab';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export const SettingScreen : FC<
NativeStackScreenProps<NavigatorParamList, 'setting'>
> = ({navigation}) => {
  const pressAbout = () => {
    navigation.navigate('faq')
  };
  const renderItem = (item: string, onPress: () => void) => {
    return (
      <TouchableOpacity style={VIEW_TEXT} onPress={onPress}>
        <Text text={item} preset="default" />
        <Icon icon="IC_VECTOR_STROKE" style={ICON} />
      </TouchableOpacity>
    );
  };
  return (
    <View style={ROOT}>
      {renderItem('About', null)}
      {renderItem('My data',null)}
      {renderItem('Notifications', null)}
      {renderItem('My location', null)}
      {renderItem('FAQ', pressAbout)}
      {renderItem('Support us!', null)}
      {renderItem('Roadmap',null)}
      {renderItem('NMF.earth',null)}
      {renderItem('Help translation',null)}
      {renderItem('Feedback',null)}
      {renderItem('Terms of use',null)}
      <View style={VIEW_NFM}>
        <Text text="NMF" style={TEXT_NMF} />
        <Text text="." style={TEXT_DOTS} />
        <Text text="earth" style={TEXT_NMF} />
      </View>
      <Text text="version 0.7.3-31" preset="default" style={TEXT_VERSION} />
    </View>
  );
};
const ROOT: ViewStyle = {
  flex: 1,
  backgroundColor: color.palette.white,
  paddingHorizontal: wp(16),
};
const ICON: ImageStyle = {
  width: wp(6),
  height: hp(6),
};
const VIEW_TEXT: ViewStyle = {
  height: hp(49),
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  borderBottomColor: color.palette.black10,
  borderBottomWidth: 1,
};
const IMAGE: ImageStyle = {
  marginTop: hp(30),
  marginLeft: wp(109.5),
};
const VIEW_NFM: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  marginTop: hp(30),
};
const TEXT_NMF: TextStyle = {
  fontFamily: typography.primaryBold,
  fontSize: 30,
  lineHeight: 36,
  color: color.palette.black,
};
const TEXT_DOTS: TextStyle = {
  fontFamily: typography.primaryBold,
  fontSize: 30,
  lineHeight: 36,
  color: color.palette.primary,
};
const TEXT_VERSION: TextStyle = {
  color: color.palette.black70,
  textAlign: 'center',
  marginTop: hp(10),
};
