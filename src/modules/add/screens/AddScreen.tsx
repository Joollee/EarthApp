import {
  TextStyle,
  View,
  ViewStyle,
  FlatList,
  ListRenderItem,
} from 'react-native';
import React, {FC} from 'react';
import {color} from '../../../themes';
import {hp, ImageTypes, wp} from '../../../utils';
import {Text} from '../../../components';
import {ItemAdd} from '../components/ItemAdd';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigatorParamList} from '../../../navigators/bottom-tab';
import { Icon } from '../../../components/icon/icon';
interface ItemData {
  id: number;
  icon: ImageTypes;
  text: string;
  onPress: () => void;
}
interface ItemNavigate {
  icon: ImageTypes;
  text: string;
  check?:boolean
}

export const AddScreen: FC<
  NativeStackScreenProps<NavigatorParamList, 'add'>
> = ({navigation}) => {
  const onPressTransport = () => {
    navigation.navigate('add_emission_detail',{data: DATA_TRANSPORT});
  };
  const onPressMeal = () => {
    navigation.navigate("add_emission_detail", {data:DATA_MEAL})
  }
  const DATA: Array<ItemData> = [
    {id: 1, icon: 'IC_RESTAURANT_GREEN', text: 'Meal', onPress: onPressMeal},
    {id: 2, icon: 'IC_PLANE', text: 'Transportation', onPress: onPressTransport},
    {id: 3, icon: 'IC_BARCODE', text: 'Scan product', onPress: () => {}},
    {id: 4, icon: 'IC_PLAY', text: 'Streaming', onPress() {}},
    {id: 5, icon: 'IC_CARD', text: 'Purchase', onPress() {}},
    {id: 6, icon: 'IC_APPLE', text: 'Food', onPress() {}},
    {id: 7, icon: 'IC_ELECTRICITY', text: 'Electricity', onPress() {}},
  ];
  const DATA_TRANSPORT: Array<ItemNavigate> = [
    {icon: 'IC_PLANE', text: 'Plane',check: true},
    {icon: 'IC_CAR', text: 'Car', check: true},
    {icon: 'IC_TRAIN', text: 'Train', check: true},
    {icon: 'IC_BOAT', text: 'Boat', check: true},
    {icon: 'IC_MOTORBIKE', text: 'Motorbike', check: true},
  ];
  const DATA_MEAL: Array<ItemNavigate> = [
    {icon: 'IC_31DAY', text: 'Hight Meat', check: false},
    {icon: 'IC_31DAY', text: 'Medium Meat', check: false},
    {icon: 'IC_31DAY', text: 'Low Meat', check: false},
    {icon: 'IC_31DAY', text: 'Pescetarian', check: false},
    {icon: 'IC_31DAY', text: 'Vegetarian', check: false},
    {icon: 'IC_31DAY', text: 'Vegan', check: false}
  ]
  const renderItem: ListRenderItem<ItemData> = ({item}) => (
    <ItemAdd icon={item.icon} text={item.text} onPress={item.onPress} check={true}/>
  );
  return (
    <View style={ROOT}>
      <Text text="Select a category" preset="h1" style={TEXT_CONTENT} />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}></FlatList>
    </View>
  );
};

const ROOT: ViewStyle = {
  flex: 1,
  backgroundColor: color.palette.white,
  paddingHorizontal: wp(24),
};
const TEXT_CONTENT: TextStyle = {
  marginTop: hp(34),
};
const VIEW_ITEM: ViewStyle = {
  marginTop: hp(28),
};
