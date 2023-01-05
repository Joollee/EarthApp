import {View, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import React, {FC, useEffect} from 'react';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigatorParamList} from '../../../navigators/bottom-tab';
import {color} from '../../../themes';
import {hp, wp} from '../../../utils';
import {Button, Text} from '../../../components';
export const StreamingScreen: FC<
  NativeStackScreenProps<NavigatorParamList, 'streaming'>
> = ({navigation}) => {
  const onPress = () => {
    navigation.navigate("scan_complete")
  }
  const caMera = () => {
    const devices = useCameraDevices('wide-angle-camera');
    const device = devices.back;
    useEffect(() => {
      const cameraPermission = Camera.getCameraPermissionStatus();
      const microphonePermission = Camera.getMicrophonePermissionStatus();
    }, []);
    if (device == null) return null;
    return (
      <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
    );
  };
  return (
    <View style={ROOT}>
      <View style={VIEW_CAMERA}>
      <Text text="Scan product barcode" preset="h1" style={TEXT} />
      <View style={CAMERA}>{caMera()}</View>
      </View>
      <Button text='Scan' onPress={onPress} style={BUTTON}></Button>
    </View>
  );
};
const ROOT: ViewStyle = {
  flex: 1,
  backgroundColor: color.palette.white,
  paddingHorizontal: wp(24),
  alignItems: 'center',
  justifyContent:'space-evenly'
};
const TEXT: TextStyle = {
  marginTop: hp(26),
  justifyContent: 'center',
  alignItems: 'center',
};
const CAMERA: ViewStyle = {
  marginTop: hp(62),
  height: hp(411),
  width: wp(308)
}
const BUTTON: ViewStyle = {
  marginBottom: hp(26),
  width: wp(327)
}
const VIEW_CAMERA: ViewStyle = {
  alignItems: 'center'
}