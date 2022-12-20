import {
  View,
  ViewStyle,
  ImageStyle,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import React, {FC} from 'react';
import {color} from '../../../themes';
import {Icon} from '../../../components/icon/icon';
import {hp, ImageTypes, wp} from '../../../utils';
import {Text} from '../../../components';
import {NavigatorParamList} from '../../../navigators/bottom-tab';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ItemEmission} from '../components';

export const AddEmissionScreen: FC<
  NativeStackScreenProps<NavigatorParamList, 'add_emission'>
> = ({navigation}) => {
  const pressAbout = () => {
    navigation.navigate('recurring_emissions');
  };

  const renderContent = (text: string, onPress?: () => void) => {
    return (
      <TouchableOpacity style={MEMBER} onPress={onPress}>
        <Text text={text} preset="h2" style={TEXT_MEMBER} />
        <Icon icon={'IC_VECTOR_STROKE'} style={ICON_CONTENT}></Icon>
      </TouchableOpacity>
    );
  };
  return (
    <View style={ROOT}>
      <View style={ITEM}>
        {renderContent('Recurring emissions', pressAbout)}
        <ItemEmission
          icon="IC_RESTAURANT"
          text_1="Vegetarian meal"
          text_2="2 kgCO2eq"
          text_3=""
        />
        <ItemEmission
          icon="IC_FILM"
          text_1="Netflix and chill"
          text_2="826 kgCO2eq •"
          text_3="Offset"
        />
        <ItemEmission
          icon="IC_CAR"
          text_1="Car ride to summer house"
          text_2="826 kgCO2eq •"
          text_3="Offset"
        />
      </View>
      <View style={ITEM}>
        {renderContent('Future emissions')}
        <ItemEmission
          icon="IC_PLANE"
          text_1="Flight from Paris to New York"
          text_2="826 kgCO2eq"
          text_3=""
        />
        <ItemEmission
          icon="IC_RESTAURANT"
          text_1="Meal with family"
          text_2="13 kgCO2eq"
          text_3=""
        />
        <ItemEmission
          icon="IC_ELECTRICITY"
          text_1="Summer house electricity"
          text_2="826 kgCO2eq •"
          text_3="Offset"
        />
      </View>
      <View style={ITEM}>
        {renderContent('August 2022')}
        <ItemEmission
          icon="IC_CAR"
          text_1="Road trip in France"
          text_2="826 kgCO2eq"
          text_3="Offset"
        />
        <ItemEmission
          icon="IC_RESTAURANT"
          text_1="Meal"
          text_2="4 kgCO2eq"
          text_3=""
        />
      </View>
    </View>
  );
};
const ROOT: ViewStyle = {
  flex: 1,
  backgroundColor: color.palette.white,
  paddingHorizontal: 16,
};
const MEMBER: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingVertical: hp(15.5),
  borderBottomColor: color.palette.primary10,
  borderBottomWidth: 1,
};
const ICON_CONTENT: ImageStyle = {
  width: 12,
  height: 12,
  tintColor: color.palette.secondary,
};
const TEXT_MEMBER: TextStyle = {
  color: color.palette.secondary,
};
const ITEM: ViewStyle = {
  marginBottom: 16,
};
