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

interface ItemData {
  id: number;
  icon: ImageTypes;
  text: string;
  onPress: () => void
}
interface ItemNavigate {
  title: string;
  icon: ImageTypes;
  text: string;
  check?: boolean;
  measure: string;
  number1: number;
  number2?: number;
  text_input1: string;
  text_input2?: string;
  check_button?: boolean;
}

export const AddScreen: FC<
  NativeStackScreenProps<NavigatorParamList, 'add'>
> = ({navigation}) => {
  const onPressTransport = () => {
    navigation.navigate('add_emission_detail', {data: DATA_TRANSPORT});
  };
  const onPressMeal = () => {
    navigation.navigate('add_emission_detail', {data: DATA_MEAL});
  };
  const onPressPurchase = () => {
    navigation.navigate('add_emission_detail', {data: DATA_PURCHASE});
  };
  const onPressFood = () => {
    navigation.navigate('add_emission_detail', {data: DATA_FOOD});
  };
  const onPressElectricity = (title: string,title_detail: string, measure: string,number1: number,text_input1:string,number2?: number,text_input2?: string,check_button?: boolean) => {
    navigation.navigate('add_emission_time',{title,title_detail,measure,number1,text_input1})
  }
  const onPressAllow = () => {
    navigation.navigate("allow_camera")
  }
  const DATA: Array<ItemData> = [
    {id: 1, icon: 'IC_RESTAURANT_GREEN', text: 'Meal', onPress: onPressMeal},
    {
      id: 2,
      icon: 'IC_PLANE',
      text: 'Transportation',
      onPress: onPressTransport,
    },
    {
      id: 3,
      icon: 'IC_BARCODE',
      text: 'Scan product',
      onPress: ()=>{},
    },
    {id: 4, icon: 'IC_PLAY', text: 'Streaming', onPress: onPressAllow},
    {id: 5, icon: 'IC_CARD', text: 'Purchase', onPress: onPressPurchase},
    {id: 6, icon: 'IC_APPLE', text: 'Food', onPress: onPressFood},
    {id: 7, icon: 'IC_T_SHIRF', text: 'Fashion', onPress: () => {}},
    {id: 8, icon: 'IC_ELECTRICITY', text: 'Electricity', onPress: ()=>onPressElectricity('Electricity','Custom','Quantity',200,' Kwh')},
  ];
  const DATA_TRANSPORT: Array<ItemNavigate> = [
    {
      title: 'Transport',
      icon: 'IC_PLANE',
      text: 'Plane',
      check: true,
      measure: 'Duration',
      number1: 1,
      text_input1: 'h',
      check_button: true,
    },
    {
      title: 'Transport',
      icon: 'IC_CAR',
      text: 'Car',
      check: true,
      measure: 'Distance',
      number1: 150,
      text_input1: 'km',
    },
    {
      title: 'Transport',
      icon: 'IC_TRAIN',
      text: 'Train',
      check: true,
      measure: 'Duration',
      number1: 1,
      text_input1: 'h',
    },
    {
      title: 'Transport',
      icon: 'IC_BOAT',
      text: 'Boat',
      check: true,
      measure: 'Duration',
      number1: 1,
      text_input1: 'h',
    },
    {
      title: 'Transport',
      icon: 'IC_MOTORBIKE',
      text: 'Motorbike',
      check: true,
      measure: 'Duration',
      number1: 1,
      text_input1: 'h',
    },
  ];
  const DATA_MEAL: Array<ItemNavigate> = [
    {
      title: 'Meal',
      icon: 'IC_31DAY',
      text: 'Hight Meat',
      check: false,
      measure: 'Quantity',
      number1: 150,
      text_input1: 'km',
    },
    {
      title: 'Meal',
      icon: 'IC_31DAY',
      text: 'Medium Meat',
      check: false,
      measure: 'Quantity',
      number1: 150,
      text_input1: 'km',
    },
    {
      title: 'Meal',
      icon: 'IC_31DAY',
      text: 'Low Meat',
      check: false,
      measure: 'Quantity',
      number1: 150,
      text_input1: 'km',
    },
    {
      title: 'Meal',
      icon: 'IC_31DAY',
      text: 'Pescetarian',
      check: false,
      measure: 'Quantity',
      number1: 150,
      text_input1: 'km',
    },
    {
      title: 'Meal',
      icon: 'IC_31DAY',
      text: 'Vegetarian',
      check: false,
      measure: 'Quantity',
      number1: 150,
      text_input1: 'km',
    },
    {
      title: 'Meal',
      icon: 'IC_31DAY',
      text: 'Vegan',
      check: false,
      measure: 'Quantity',
      number1: 1,
      text_input1: ' meal(s)',
    },
  ];
  const DATA_PURCHASE: Array<ItemNavigate> = [
    {
      title: 'Purchase',
      icon: 'IC_31DAY',
      text: 'Smartphone',
      check: false,
      measure: 'Quantity',
      number1: 1,
      text_input1: ' item(s)',
    },
    {
      title: 'Purchase',
      icon: 'IC_31DAY',
      text: 'Laptop',
      check: false,
      measure: 'Quantity',
      number1: 1,
      text_input1: 'h',
    },
    {
      title: 'Purchase',
      icon: 'IC_31DAY',
      text: 'Tablet',
      check: false,
      measure: 'Quantity',
      number1: 1,
      text_input1: 'h',
    },
    {
      title: 'Purchase',
      icon: 'IC_31DAY',
      text: 'Computer',
      check: false,
      measure: 'Quantity',
      number1: 1,
      text_input1: 'h',
    },
    {
      title: 'Purchase',
      icon: 'IC_31DAY',
      text: 'Television',
      check: false,
      measure: 'Quantity',
      number1: 1,
      text_input1: 'h',
    },
    {
      title: 'Purchase',
      icon: 'IC_31DAY',
      text: 'Electric Car',
      check: false,
      measure: 'Quantity',
      number1: 1,
      text_input1: 'h',
    },
    {
      title: 'Purchase',
      icon: 'IC_31DAY',
      text: 'Fossil Fuel Car',
      check: false,
      measure: 'Quantity',
      number1: 1,
      text_input1: 'h',
    },
    {
      title: 'Purchase',
      icon: 'IC_31DAY',
      text: 'Hybrid Car',
      check: false,
      measure: 'Quantity',
      number1: 1,
      text_input1: 'h',
    },
    {
      title: 'Purchase',
      icon: 'IC_31DAY',
      text: 'Smartphone',
      check: false,
      measure: 'Quantity',
      number1: 1,
      text_input1: 'h',
    },
  ];
  const DATA_FOOD: Array<ItemNavigate> = [
    {
      title: 'Purchase',
      icon: 'IC_31DAY',
      text: 'Read Meat',
      check: false,
      measure: 'Quantity',
      number1: 200,
      text_input1: ' grams',
    },
    {
      title: 'Purchase',
      icon: 'IC_31DAY',
      text: 'White Meat',
      check: false,
      measure: 'Quantity',
      number1: 1,
      text_input1: 'h',
    },
    {
      title: 'Purchase',
      icon: 'IC_31DAY',
      text: 'Coffee',
      check: false,
      measure: 'Quantity',
      number1: 1,
      text_input1: 'h',
    },
    {
      title: 'Purchase',
      icon: 'IC_31DAY',
      text: 'Chocolate',
      check: false,
      measure: 'Quantity',
      number1: 1,
      text_input1: 'h',
    },
    {
      title: 'Purchase',
      icon: 'IC_31DAY',
      text: 'Fish',
      check: false,
      measure: 'Quantity',
      number1: 1,
      text_input1: 'h',
    },
    {
      title: 'Purchase',
      icon: 'IC_31DAY',
      text: 'Lamb',
      check: false,
      measure: 'Quantity',
      number1: 1,
      text_input1: 'h',
    },
    {
      title: 'Purchase',
      icon: 'IC_31DAY',
      text: 'Beef',
      check: false,
      measure: 'Quantity',
      number1: 1,
      text_input1: 'h',
    },
    {
      title: 'Purchase',
      icon: 'IC_31DAY',
      text: 'Cheese',
      check: false,
      measure: 'Quantity',
      number1: 1,
      text_input1: 'h',
    },
  ];
  const renderItem: ListRenderItem<ItemData> = ({item}) => (
    <ItemAdd
      icon={item.icon}
      text={item.text}
      onPress={item.onPress}
      check={true}
    />
  );
  return (
    <View style={ROOT}>
      <Text text="Select a category" preset="h1" style={TEXT_CONTENT} />
      <FlatList
        style={FLATLISH}
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
  marginBottom: hp(8),
};
const VIEW_ITEM: ViewStyle = {
  marginTop: hp(28),
};
const FLATLISH: ViewStyle = {
  marginTop: 8,
};
