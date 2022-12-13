import {
  View,
  ViewStyle,
  TouchableOpacity,
  TextStyle,
  ImageStyle,
} from 'react-native';
import React, {useState, FC,} from 'react';
import {color} from '../../../themes';
import {Text} from '../../../components';
import {hp} from '../../../utils';
import {Icon} from '../../../components/icon/icon';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigatorParamList} from '../../../navigators/bottom-tab';

export const ACTScreen: FC<
NativeStackScreenProps<NavigatorParamList, 'act'>
> = ({navigation}) =>  {
  const [tag, setTags] = useState<number>();

  const pressTag = (value: number) => () => {
    setTags(value);
  };
  const onPress = () => {
    navigation.navigate('act1');
  };


  return (
    <View style={ROOT}>
      <View style={VIEW_BUTTON}>
        <TouchableOpacity style={[BUTTON, tag === 0 && VIEW_DIGITAL]} onPress={pressTag(0)}>
          <Text text="Kitchen" preset="h3" style={TEXT_CHOSEN}></Text>
        </TouchableOpacity>
        <TouchableOpacity style={[BUTTON, tag === 1 && VIEW_DIGITAL]} onPress={pressTag(1)}>
          <Text text="Digital" preset="h3" style={TEXT_CHOSEN}></Text>
        </TouchableOpacity>
        <TouchableOpacity style={[BUTTON, tag === 2 && VIEW_DIGITAL]} onPress={pressTag(2)}>
          <Text text="Bathroom" preset="h3" style={TEXT_CHOSEN}></Text>
        </TouchableOpacity>
        <TouchableOpacity style={[BUTTON, tag === 3 && VIEW_DIGITAL]} onPress={pressTag(3)}>
          <Text text="Garden" preset="h3" style={TEXT_CHOSEN}></Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={VIEW_BUTTON1} onPress={onPress}>
        <Text text="Install an add blocker" preset="default" />
        <Icon icon="IC_VECTOR_STROKE" style={ICON_BUTTON}></Icon>
      </TouchableOpacity>
      <TouchableOpacity style={VIEW_BUTTON1} onPress={onPress}>
        <Text text="Avoid streaming" preset="default" />
        <Icon icon="IC_VECTOR_STROKE" style={ICON_BUTTON}></Icon>
      </TouchableOpacity>
      <TouchableOpacity style={VIEW_BUTTON1} onPress={onPress}>
        <Text text="Clean your cloud data" preset="default" />
        <Icon icon="IC_VECTOR_STROKE" style={ICON_BUTTON}></Icon>
      </TouchableOpacity>
      <TouchableOpacity style={VIEW_BUTTON1} onPress={onPress}>
        <Text text="Reduce your browsing emissions" preset="default" />
        <Icon icon="IC_VECTOR_STROKE" style={ICON_BUTTON}></Icon>
      </TouchableOpacity>
      <TouchableOpacity style={VIEW_BUTTON1} onPress={onPress}>
        <Text text="Get a phone you can repair/upgrade" preset="default" />
        <Icon icon="IC_VECTOR_STROKE" style={ICON_BUTTON}></Icon>
      </TouchableOpacity>
      <TouchableOpacity style={VIEW_BUTTON1} onPress={onPress}>
        <Text text="Find replacement for internet giants" preset="default" />
        <Icon icon="IC_VECTOR_STROKE" style={ICON_BUTTON}></Icon>
      </TouchableOpacity>
    </View>
  );
};

const ROOT: ViewStyle = {
  flex: 1,
  backgroundColor: color.palette.white,
};
const TEXT_CHOSEN: TextStyle = {
  textAlign: 'center',
  justifyContent: 'center',
  color: color.palette.black60,
};
const VIEW_BUTTON: ViewStyle = {
  height: hp(31),
  flexDirection: 'row',
  marginLeft: hp(8),
  marginTop: hp(30),
  marginBottom: hp(16),
};
const VIEW_DIGITAL: ViewStyle = {
  paddingHorizontal: hp(20),
  height: hp(31),
  borderRadius: hp(10),
  justifyContent: 'center',
  backgroundColor: color.palette.primary10
};
const BUTTON: ViewStyle = {
  height: hp(31),
  paddingHorizontal: hp(12),
  borderRadius: hp(10),
  justifyContent: 'center',
  backgroundColor: color.palette.white,
};
const VIEW_BUTTON1: ViewStyle = {
  height: hp(49),
  marginHorizontal: 16,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottomColor: color.palette.black10,
  borderBottomWidth: 1,
};
const ICON_BUTTON: ImageStyle = {
  width: hp(6),
  height: hp(6),
};
