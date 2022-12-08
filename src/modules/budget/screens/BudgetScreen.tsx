import {View, FlatList, ViewStyle, ListRenderItem} from 'react-native';
import React, {FC, useEffect, useLayoutEffect, useState} from 'react';
import {BudgetForMonth, ItemBudget} from '../components';
import {color} from '../../../themes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigatorParamList} from '../../../navigators/bottom-tab';

export const BudgetScreen: FC<
  NativeStackScreenProps<NavigatorParamList, 'budget'>
> = ({navigation}) => {
  // prop
  // state
  // useEffect
  // cac func xu ly
  // cac func render
  // return

  const [data, setData] = useState<ItemBudget[]>([
    {
      id: 1,
      data: [
        {
          key: 'Food',
          value: 10,
        },
        {
          key: 'Transport',
          value: 20,
        },
        {
          key: 'Stream',
          value: 100,
        },
        {
          key: 'Transport',
          value: 20,
        },
        {
          key: 'Food',
          value: 10,
        },
        {
          key: 'Transport',
          value: 20,
        },
        {
          key: 'Food',
          value: 10,
        },
        {
          key: 'Transport',
          value: 20,
        },
      ],
      month: 0,
      budget_for_month: 400,
    },
    {
      id: 2,
      data: [
        {
          key: 'Food',
          value: 10,
        },
      ],
      month: 2,
      budget_for_month: 400,
    },
    {
      id: 3,
      data: [
        {
          key: 'Food',
          value: 10,
        },
      ],
      month: 3,
      budget_for_month: 400,
    },
    {
      id: 4,
      data: [
        {
          key: 'Food',
          value: 10,
        },
      ],
      month: 4,
      budget_for_month: 400,
    },
    {
      id: 5,
      data: [
        {
          key: 'Food',
          value: 10,
        },
      ],
      month: 5,
      budget_for_month: 400,
    },
    {
      id: 6,
      data: [
        {
          key: 'Food',
          value: 10,
        },
      ],
      month: 6,
      budget_for_month: 400,
    },
  ]);

  const onPress = () => {
    navigation.navigate('monthly_budget');
  };

  const renderItem: ListRenderItem<ItemBudget> = ({item}) => (
    <BudgetForMonth
      style={VIEW_BUDGET_FOR_MONTH}
      onPress={onPress}
      item={item}
    />
  );

  return (
    <View style={ROOT}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

const ROOT: ViewStyle = {
  flex: 1,
  backgroundColor: color.palette.white,
};
const VIEW_BUDGET_FOR_MONTH: ViewStyle = {
  marginHorizontal: 20,
  marginTop: 27,
};
