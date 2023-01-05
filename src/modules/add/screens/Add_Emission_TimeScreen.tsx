import {
  View,
  ViewStyle,
  TextStyle,
  ImageStyle,
  TouchableOpacity,
} from 'react-native';
import React, {FC, useState} from 'react';
import {color} from '../../../themes';
import {hp, wp} from '../../../utils';
import {Button, Text} from '../../../components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigatorParamList} from '../../../navigators/bottom-tab';
import {Icon} from '../../../components/icon/icon';

export const Add_Emission_TimeScreen: FC<
  NativeStackScreenProps<NavigatorParamList, 'add_emission_time'>
> = ({navigation, route}) => {
  const {
    title,
    title_detail,
    number1,
    measure,
    text_input1,
    text_input2,
    number2,
    check_button,
  } = route.params;
  console.log(title);
  const [hour, setHour] = useState(number1);
  const handlerClickDown = () => {
    if (hour <= 0) {
      setHour(0);
      setMin(0);
    } else setHour(hour - 1);
  };
  const handlerClickPus = () => setHour(hour + 1);
  const [min, setMin] = useState(30);
  const handlerClickMinDown = () => {
    if (min <= 0) {
      if (hour <= 0) {
        setHour(0);
        setMin(0);
      } else {
        setHour(hour - 1);
        setMin(59);
      }
    } else setMin(min - 1);
  };
  const handlerClickMinPus = () => {
    if (min < 59) {
      setMin(min + 1);
    } else {
      setHour(hour + 1);
      setMin(0);
    }
  };
  const onPress = () => {
    navigation.navigate('add_emission_end');
  };
  return (
    <View style={ROOT}>
      <View style={CHOSEN}>
      <Text text={title} preset="h1" />
      <Text text={title_detail} preset="h3" style={TEXT_TITLE} />
      <Text text={measure} preset="h1" style={TEXT_DURATION} />
      <View style={INPUT}>
        <TouchableOpacity onPress={handlerClickDown}>
          <Icon icon="IC_CIRCLE_BUTTON" style={ICON} />
        </TouchableOpacity>
        <View style={VALUE}>
          <Text text={`${hour}${text_input1}`} preset="h2" style={TEXT_VALUE} />
        </View>
        <TouchableOpacity onPress={handlerClickPus}>
          <Icon icon="IC_PLUS" style={ICON} />
        </TouchableOpacity>
      </View>
      {check_button && (
        <View style={INPUT}>
          <TouchableOpacity onPress={handlerClickMinDown}>
            <Icon icon="IC_CIRCLE_BUTTON" style={ICON} />
          </TouchableOpacity>
          <View style={VALUE}>
            <Text text={`${min} min`} preset="h2" style={TEXT_VALUE} />
          </View>
          <TouchableOpacity onPress={handlerClickMinPus}>
            <Icon icon="IC_PLUS" style={ICON} />
          </TouchableOpacity>
        </View>
      )}
      </View>
      <Button text="Continue" onPress={onPress} style={BUTTON} />
    </View>
  );
};
const ROOT: ViewStyle = {
  flex: 1,
  backgroundColor: color.palette.white,
  paddingHorizontal: 16,
  paddingTop: hp(19),
  paddingBottom: hp(24),
  justifyContent: 'space-between'
};
const TEXT_TITLE: TextStyle = {
  marginTop: 4,
  color: color.palette.black70,
};
const TEXT_DURATION: TextStyle = {
  marginTop: hp(22),
};
const INPUT: ViewStyle = {
  marginTop: hp(27),
  paddingHorizontal: wp(42),
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
};
const ICON: ImageStyle = {
  width: wp(44),
  height: hp(44),
};
const VALUE: ViewStyle = {
  borderColor: color.primary,
  borderRadius: 10,
  borderWidth: 1,
  width: wp(154),
  height: hp(54),
  alignItems: 'center',
  justifyContent: 'center',
};
const TEXT_VALUE: TextStyle = {
  alignItems: 'center',
  justifyContent: 'center',
};
const BUTTON: ViewStyle = {
  marginTop: hp(270),
};
const CHOSEN: ViewStyle = {

}