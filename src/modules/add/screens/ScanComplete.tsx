import {View, ViewStyle, TextStyle, ImageStyle, Image} from 'react-native';
import React from 'react';
import {color} from '../../../themes';
import {Button, Text} from '../../../components';
import {hp, IMAGES, wp} from '../../../utils';
import Slider from '@react-native-community/slider';
import { Icon } from '../../../components/icon/icon';
export const ScanComplete = () => {
  return (
    <View style={ROOT}>
      <Text text="Name" preset="h2" style={TEXT_NAME} />
      <Text text="Lint Dark Chocolate" preset="h3" style={TEXT_NAME_DETAIL} />
      <Text text="Quantity" preset="h2" style={TEXT_QUANTITY} />
      <Text text="7 item(s)" preset="default" style={TEXT_NAME_DETAIL} />
      <Slider
        style={SLIDER}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor={color.palette.primary50}
        maximumTrackTintColor={color.palette.primary10}
        value={70}
      />
      <Text text="Total" preset="h2" style={TEXT_TOTAL} />
      <View style={VIEW_TOTAL_DETAIL}>
        <Text text="45,89 " preset="h2" style={TEXT_TOTAL_DETAIL} />
        <Text text="kgCO2eq" style={TEXT_TOTAL_DETAIL} />
      </View>
      <Text text='Date' preset='h1' style={TEXT_DATE}/>
      <View style={VIEW_DATE_DETAIl}>
        <Icon icon='IC_31DAY' style={ICON_31DAY}/>
        <Text text='Friday 25th December 2021' preset='h3' style={TEXT_DATE_DETAIL}/>
        <Icon icon='IC_EDIT' style={ICON_EDIT}/>
      </View>
      <Text text='Data from OPEN FOOD FACTS' preset='link' style={TEXT_IMAGE}/>
      <View style={VIEW_IMAGE}>
        <Image source={IMAGES.IMG_NUTRI_SCORE} style={IMAGE_NUTRI_SCORE}></Image>
        <Image source={IMAGES.IMG_NOVA} style={IMAGE_NOVA}/>
        <Image source={IMAGES.IMG_ECO_SCORE} style={IMAGE_ECO_SCORE}/>
      </View>
      <Button text='Add emission' onPress={()=>{}} style={BUTTON}/>
    </View>
  );
};
const ROOT: ViewStyle = {
  flex: 1,
  backgroundColor: color.palette.white,
  paddingHorizontal: 16,
};
const TEXT_NAME: TextStyle = {
  marginTop: hp(18),
};
const TEXT_NAME_DETAIL: TextStyle = {
  marginTop: 6,
  color: color.palette.black70,
};
const TEXT_QUANTITY: TextStyle = {
  marginTop: hp(14),
};
const SLIDER: ViewStyle = {
  width: wp(327),
  height: hp(24),
  marginTop: hp(24),
};
const TEXT_TOTAL: TextStyle = {
  marginTop: hp(24),
};
const VIEW_TOTAL_DETAIL: ViewStyle = {
  marginTop: 6,
  flexDirection: 'row',
  alignItems: 'baseline',
};
const TEXT_TOTAL_DETAIL: TextStyle = {
  color: color.palette.black70,
};
const TEXT_DATE: TextStyle = {
  marginTop: hp(26)
}
const VIEW_DATE_DETAIl: ViewStyle = {
  height: hp(35),
  flexDirection: 'row',
  alignItems: 'center'
}
const ICON_31DAY: ImageStyle = {
  width: 14,
  height: 14,
  tintColor: color.secondary  
}
const TEXT_DATE_DETAIL: TextStyle = {
  marginLeft: 8,
  color: color.palette.black60
}
const ICON_EDIT: ImageStyle = {
  width: 11.85,
  height: 11.85,
  tintColor: color.primary,
  marginLeft: 8
}
const TEXT_IMAGE: TextStyle = {
  textAlign: 'center',
  marginTop: hp(51)
}
const VIEW_IMAGE: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: hp(15),
  height: hp(88),
  paddingHorizontal: 12
}
const IMAGE_NUTRI_SCORE: ImageStyle = {
  width: wp(115),
  height: hp(58)
}
const IMAGE_NOVA: ImageStyle = {
  width: wp(33),
  height: hp(60)
}
const IMAGE_ECO_SCORE: ImageStyle = {
  width: wp(94),
  height:hp(50)
}
const BUTTON: ViewStyle = {
marginTop: hp(103)

}