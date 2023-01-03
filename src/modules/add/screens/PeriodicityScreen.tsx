import {View, ViewStyle, TextStyle, TouchableOpacity} from 'react-native';
import React, {FC, useCallback, useMemo, useState} from 'react';
import {color} from '../../../themes';
import {Button, Text} from '../../../components';
import {hp, wp} from '../../../utils';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigatorParamList} from '../../../navigators/bottom-tab';
interface ItemData {
  id: number;
  title: string;
  selected?: boolean;
}
export const PeriodicityScreen: FC<
  NativeStackScreenProps<NavigatorParamList, 'periodicity'>
> = ({navigation}) => {
  const [dataOften, setDataOften] = useState<Array<ItemData>>([
    {id: 1, title: 'Monthly'},
    {id: 2, title: 'Weekly'},
  ]);
  const [dataDayRepeat, setDataDayRepeat] = useState<Array<ItemData>>([
    {id: 1, title: 'Monday'},
    {id: 2, title: 'Tuesday'},
    {id: 3, title: 'Wednesday'},
    {id: 4, title: 'Thursday'},
    {id: 5, title: 'Friday'},
    {id: 6, title: 'Saturday'},
    {id: 7, title: 'Sunday'},
  ]);
  const [dataOccurrences, setDataOccurrences] = useState<Array<ItemData>>([
    {id: 1, title: '1 time'},
    {id: 2, title: '2 time'},
    {id: 3, title: '3 time'},
  ]);

  const checkColorButton = useMemo(() => {
    if (
      dataOften.find(i => i.selected) &&
      dataDayRepeat.find(i => i.selected) &&
      dataOccurrences.find(i => i.selected)
    )
      return true;
    return false;
  }, [dataOften, dataDayRepeat, dataOccurrences]);

  const pressOften = (id: number) => () => {
    setDataOften(prev =>
      prev.map(i => ({...i, selected: i.id === id ? true : false})),
    );
  };
  const pressDayRepeat = (id: number) => () => {
    setDataDayRepeat(prev =>
      prev.map(i => ({...i, selected: i.id === id ? !i.selected : i.selected})),
    );
  };
  const pressOccurrences = (id: number) => () => {
    setDataOccurrences(prev =>
      prev.map(i => ({...i, selected: i.id === id ? true : !true})),
    );
  };
  const onPress = () => {
    let title = '';
    for (let i = 0; i < dataOften.length; i++) {
      if (dataOften[i].selected) title += dataOften[i].title + ' - '; // title = "Monthly"
    }
    title = dataDayRepeat.reduce(
      (giatrihientai, phantu) => (phantu.selected ? (giatrihientai += phantu.title + ' ') : giatrihientai),
      title, // Monthly - Monday
    );
    title += '- '+dataOccurrences.find(i => i.selected)?.title || '';
    navigation.navigate('add_emission_end', {title});
  };
  const renderItem =
    (onPress: (id: number) => () => void) =>
    (item: ItemData, index: number) => {
      return (
        <TouchableOpacity
          style={[VIEW_ITEM, item.selected && VIEW_SELECTED]}
          key={index.toString()}
          onPress={onPress(item.id)}>
          <Text text={item.title} preset="primaryBold" style={TEXT_ITEM} />
        </TouchableOpacity>
      );
    };

  return (
    <View style={ROOT}>
      <Text
        text="How often this emission happens?"
        preset="h2"
        style={TEXT_QUESTION}
      />
      <View style={VIEW_WRAP}>{dataOften.map(renderItem(pressOften))}</View>
      <Text
        text="Which days is this emission repeat?"
        preset="h2"
        style={TEXT_QUESTION}
      />
      <View style={VIEW_WRAP}>
        {dataDayRepeat.map(renderItem(pressDayRepeat))}
      </View>
      <Text text="Occurrences?" preset="h2" style={TEXT_QUESTION} />
      <View style={VIEW_WRAP}>
        {dataOccurrences.map(renderItem(pressOccurrences))}
      </View>
      <Button
        text="Confirm"
        style={[BUTTON, checkColorButton && BUTTON_SELECTED]}
        onPress={onPress}
        disabled={!checkColorButton}
      />
    </View>
  );
};
const ROOT: ViewStyle = {
  flex: 1,
  backgroundColor: color.palette.white,
  paddingHorizontal: 16,
  paddingTop: 8,
};
const TEXT_QUESTION: TextStyle = {
  marginTop: hp(8),
};
const VIEW_ITEM: ViewStyle = {
  height: hp(32),
  paddingVertical: 4,
  paddingHorizontal: 10,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: color.palette.black10,
  borderRadius: 6,
  borderWidth: 1,
  borderColor: color.palette.black20,
  marginRight: wp(24),
  marginTop: hp(24),
};
const TEXT_ITEM: TextStyle = {
  color: color.palette.black70,
  textAlign: 'center',
};
const VIEW_WRAP: ViewStyle = {
  flexDirection: 'row',
  marginTop: 8,
  alignItems: 'center',
  flexWrap: 'wrap',
};
const BUTTON: ViewStyle = {
  marginTop: hp(238),
  backgroundColor: color.palette.black20,
};
const VIEW_SELECTED: ViewStyle = {
  backgroundColor: color.palette.primary20,
};
const BUTTON_SELECTED: ViewStyle = {
  backgroundColor: color.primary,
};
