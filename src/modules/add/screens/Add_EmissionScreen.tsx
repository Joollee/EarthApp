import {View, ViewStyle, FlatList, ListRenderItem} from 'react-native';
import React, {FC} from 'react';
import {color} from '../../../themes';
import {hp, ImageTypes, wp} from '../../../utils';
import {ItemAdd} from '../components/ItemAdd';
import {Text} from '../../../components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigatorParamList} from '../../../navigators/bottom-tab';

interface ItemNavigate {
  title: string,
  icon: ImageTypes;
  text: string;
  check?: boolean;
  measure: string;
  number1: number,
  number2?: number,
  text_input1: string,
  text_input2?: string,
  check_button?: boolean
}


export const Add_EmissionScreen: FC<
  NativeStackScreenProps<NavigatorParamList, 'add_emission_detail'>
> = ({navigation, route}) => {
  const onPress = (title: string,title_detail: string, measure: string,number1: number,text_input1:string,number2?: number,text_input2?: string,check_button?: boolean) => () => {
    console.log({title,measure,number1,text_input1})
    navigation.navigate('add_emission_time', {title,title_detail,measure,number1,text_input1,check_button});
  };
  const {data} = route.params;
 
  const renderItem: ListRenderItem<ItemNavigate> = ({item}) => {
    return (
      <ItemAdd
        icon={item.icon}
        text={item.text}
        onPress={onPress(item.title,item.text,item.measure,item.number1,item.text_input1,item.number2,item.text_input2,item.check_button)}
        check={item.check}
      />
    );
  };
  return (
    <View style={ROOT}>
      <Text text="Select a sub-category" preset="h1" />
      <FlatList
        renderItem={renderItem}
        data={data}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
const ROOT: ViewStyle = {
  flex: 1,
  backgroundColor: color.palette.white,
  paddingHorizontal: wp(24),
  paddingTop: hp(34),
};
