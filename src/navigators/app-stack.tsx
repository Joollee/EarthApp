import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { MyTabs, NavigatorParamList } from './bottom-tab';

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<NavigatorParamList>();

interface AppStackProps {
  initPage: keyof NavigatorParamList;
}

export const AppStack = ({initPage}: AppStackProps) => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={initPage}>
      <Stack.Group>
        {/** Budget screens */}
        <Stack.Screen name="home" component={MyTabs} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
