import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  ACTScreen,
  AddScreen,
  BudgetScreen,
  EmissionScreen,
  MontlyBudget,
  SettingScreen,
} from '../modules';
import {Icon} from '../components/icon/icon';
import {ImageStyle, TextStyle} from 'react-native';
import {color} from '../themes';
import { Text } from '../components';
import { presets } from '../components/text/text.presets';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type NavigatorParamList = {
  home: undefined
  budget: undefined;
  emissions: undefined;
  add: undefined;
  act: undefined;
  settings: undefined;
  monthly_budget: undefined;
};

const Tab = createBottomTabNavigator<NavigatorParamList>();
const StackBudget = createNativeStackNavigator<NavigatorParamList>();

const BudgetTabs = () => (
  <StackBudget.Navigator
    initialRouteName='budget'
    screenOptions={{
      headerStyle: {
        backgroundColor: color.palette.white
      },
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: presets.title.fontSize,
        fontFamily: presets.title.fontFamily
      },
    }}
  >
    <StackBudget.Screen name='budget' component={BudgetScreen}
    options= {{title:'Carbon budget'}}
    />
    <StackBudget.Screen name='monthly_budget' component={MontlyBudget}
    options= {{title:'Monthly Budget'}}
    />
  </StackBudget.Navigator>
)

export function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="budget"
        component={BudgetTabs}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon icon="IC_CALCULATOR" style={focused && ACTIVE} />
          ),
          tabBarLabel: ({focused}) => (
            <Text text='Budget' preset='tertiary' style={[TXT_TAB, focused && TXT_ACTIVE]}/>
          )
        }}
      />
      <Tab.Screen
        name="emissions"
        component={EmissionScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon icon="IC_EMISSION" style={focused && ACTIVE} />
          ),
          tabBarLabel: ({focused}) => (
            <Text text='Emissions' preset='tertiary' style={[TXT_TAB, focused && TXT_ACTIVE]}/>
          )
        }}
      />
      <Tab.Screen
        name="add"
        component={AddScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon icon="IC_ADD" style={focused && ACTIVE} />
          ),
          tabBarLabel: ({focused}) => (
            <Text text='Add' preset='tertiary' style={[TXT_TAB, focused && TXT_ACTIVE]}/>
          )
        }}
      />
      <Tab.Screen
        name="act"
        component={ACTScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon icon="IC_ACT" style={focused && ACTIVE} />
          ),
          tabBarLabel: ({focused}) => (
            <Text text='Act' preset='tertiary' style={[TXT_TAB, focused && TXT_ACTIVE]}/>
          )
        }}
      />
      <Tab.Screen
        name="settings"
        component={SettingScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon icon="IC_SETTINGS" style={focused && ACTIVE} />
          ),
          tabBarLabel: ({focused}) => (
            <Text text='Settings' preset='tertiary' style={[TXT_TAB, focused && TXT_ACTIVE]}/>
          )
        }}
      />
      
    </Tab.Navigator>
  );
}

const ACTIVE: ImageStyle = {
  tintColor: color.primary,
};
const TXT_TAB: TextStyle = {
  color: color.palette.black60,
  marginBottom: 4
}
const TXT_ACTIVE: TextStyle = {
  color: color.primary
}
