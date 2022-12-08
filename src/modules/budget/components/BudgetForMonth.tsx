import {
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
  ImageStyle,
} from 'react-native';
import React, {useMemo} from 'react';
import {color} from '../../../themes';
import {Text} from '../../../components';
import ProgressCircle from 'react-native-progress-circle';
import {TextPresets} from '../../../components/text/text.presets';
import {Button} from '../../../components/button/button';

interface ItemData {
  key: string;
  value: number;
}

export interface ItemBudget {
  id: number;
  month: number;
  data: ItemData[];
  budget_for_month: number;
}

interface Props {
  style: StyleProp<ViewStyle>;
  onPress: () => void;
  item: ItemBudget;
}

export const BudgetForMonth = ({style, onPress, item}: Props) => {
  const {budget_for_month, data, month} = item;

  const total = useMemo(() => {
    return data.reduce((a, b) => a + b.value, 0);
  }, [data]);

  const percent = useMemo(() => {
    return (total / budget_for_month) * 100;
  }, [data]);

  const monthName = useMemo(() => {
    switch (month) {
      case 0:
        return 'January';
      case 1:
        return 'February';
      case 2:
        return 'March';
      case 3:
        return 'April ';
      case 4:
        return 'May ';
      case 5:
        return 'June ';
      case 6:
        return 'July ';
      case 7:
        return 'August ';
      case 8:
        return 'September ';
      case 9:
        return 'October ';
      case 10:
        return 'November ';

      default:
        return 'December';
    }
  }, [data]);

  const renderItem = (item: ItemData, index: number) => {
    const {key, value} = item;
    const percentItem = (value / total) * 100;
    return renderDetailItem(
      `${key}: `,
      `${value} kg - ${percentItem.toFixed(0)} %`,
    );
  };

  const renderDetailItem = (
    label: string,
    value: string,
    preset?: TextPresets,
    presetValue?: TextPresets,
  ) => (
    <Text>
      <Text text={label} preset={preset || 'secondary'} style={TXT_LABEL} />
      <Text
        text={` : ${value}`}
        preset={presetValue || 'secondary'}
        style={TXT_VALUE}
      />
    </Text>
  );

  return (
    <View>
      <View style={[ROOT, style]}>
        <Text text={monthName} preset="h1" style={TXT_MONTH} />
        <View style={VIEW_PROGRESS}>
          <ProgressCircle
            percent={percent}
            radius={86}
            borderWidth={12}
            color={percent < 100 ? color.primary : color.palette.warning}
            shadowColor={color.palette.white}
            bgColor={color.palette.white}
            outerCircleStyle={{
              backgroundColor: color.palette.primary20,
            }}>
            <Text style={TXT_PERCENT} preset="title">
              {`${percent}%`}
            </Text>
          </ProgressCircle>
        </View>
        <View style={VIEW_DETAIL}>
          {data.map(renderItem)}
          {renderDetailItem('Total', `${total} kg`)}
        </View>
        <View style={TXT_TOTAL}>
          {renderDetailItem(
            'Budget for December',
            `${budget_for_month}kg`,
            'primaryBold',
            'default',
          )}
        </View>
      </View>
      <View style={TXT_SUM_DAY_OF_MONTH}>
        <Text text="27" preset="h3" style={TXT_DAY} />
        <Text text="days without meat or fish, good job!" preset="h3" />
      </View>
      <View style={VIEW_BUTTON}>
        <Button
          onPress={onPress}
          icon_button="IC_31DAY"
          text="Set monthly budget"
          style={BUTTON}
        />
      </View>
    </View>
  );
};

const ROOT: ViewStyle = {
  borderRadius: 17,
  borderWidth: 2,
  borderColor: color.palette.primary10,
  paddingHorizontal: 20,
  paddingVertical: 27,
};
const TXT_MONTH: TextStyle = {
  textAlign: 'center',
};
const VIEW_PROGRESS: ViewStyle = {
  width: '51%',
  alignSelf: 'center',
  marginTop: 26,
};
const TXT_PERCENT: TextStyle = {
  color: color.palette.black50,
  textAlign: 'center',
};
const VIEW_DETAIL: ViewStyle = {
  alignItems: 'center',
  marginTop: 26,
  justifyContent: 'space-between',
};
const TXT_LABEL: TextStyle = {
  color: color.palette.black90,
  lineHeight: 20,
};
const TXT_VALUE: TextStyle = {
  color: color.palette.black50,
  lineHeight: 20,
};
const TXT_TOTAL: TextStyle = {
  marginTop: 26,
  alignItems: 'center',
};
const TXT_SUM_DAY_OF_MONTH: ViewStyle = {
  alignItems: 'center',
  flexDirection: 'row',
  marginTop: 23,
  justifyContent: 'center',
};
const BUTTON: ViewStyle = {
  marginTop: 23,
};
const TXT_DAY: TextStyle = {
  color: color.palette.primary,
};
const ACTIVE: ImageStyle = {
  tintColor: 'red',
  width: 14,
  height: 14,
};
const VIEW_BUTTON: ViewStyle = {
  marginTop: 23,
};
