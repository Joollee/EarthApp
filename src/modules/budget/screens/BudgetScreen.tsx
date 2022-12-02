import {View, Text, ViewStyle} from 'react-native';
import React, { FC, useLayoutEffect } from 'react';
import { BudgetForMonth } from '../components';
import { color } from '../../../themes';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomNavigatorParamList } from '../../../navigators/bottom-tab';

export const BudgetScreen: FC<NativeStackScreenProps<BottomNavigatorParamList, 'budget'>> = ({navigation}) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Carbon budget'
    })
  }, [navigation])

  return (
    <View style={ROOT}>
      <BudgetForMonth style={VIEW_BUDGET_FOR_MONTH}/>
    </View>
  );
};

const ROOT: ViewStyle = {
  flex: 1,
  backgroundColor: color.palette.white
};
const VIEW_BUDGET_FOR_MONTH: ViewStyle ={
  marginHorizontal: 20,
  marginVertical: 25
}