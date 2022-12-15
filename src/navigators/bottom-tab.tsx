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
import {color, headerOptionTheme} from '../themes';
import {Text} from '../components';
import {presets} from '../components/text/text.presets';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ACT1Screen} from '../modules/act/screens/ACT1Screen';
import FAQ from '../modules/settings/screens/faq-screen';
import FaqScreen from '../modules/settings/screens/faq-screen';

export type NavigatorParamList = {
  home: undefined;
  budget: undefined;
  emissions: undefined;
  add: undefined;
  act: undefined;
  settings: undefined;
  monthly_budget: undefined;
  act1: undefined;
  setting: undefined;
  faq: undefined;
};

const Tab = createBottomTabNavigator<NavigatorParamList>();
const StackBudget = createNativeStackNavigator<NavigatorParamList>();

const BudgetTabs = () => (
  <StackBudget.Navigator
    initialRouteName="budget"
    screenOptions={headerOptionTheme}>
    <StackBudget.Screen
      name="budget"
      component={BudgetScreen}
      options={{title: 'Carbon budget'}}
    />
    <StackBudget.Screen
      name="monthly_budget"
      component={MontlyBudget}
      options={{title: 'Monthly Budget'}}
    />
  </StackBudget.Navigator>
);
const ActTabs = () => (
  <StackBudget.Navigator
    initialRouteName="act"
    screenOptions={headerOptionTheme}>
    <StackBudget.Screen
      name="act"
      component={ACTScreen}
      options={{title: 'Sustainable Guide'}}
    />
    <StackBudget.Screen
      name="act1"
      component={ACT1Screen}
      options={{title: 'Act'}}
    />
  </StackBudget.Navigator>
);
const SettingTabs = () => (
  <StackBudget.Navigator
    initialRouteName="setting"
    screenOptions={headerOptionTheme}>
    <StackBudget.Screen
      name="setting"
      component={SettingScreen}
      options={{title: 'Settings'}}
    />
    <StackBudget.Screen
      name="faq"
      component={FaqScreen}
      options={{title: 'FAQ'}}
    />
  </StackBudget.Navigator>
);

export function MyTabs() {
  return (
    <Tab.Navigator screenOptions={headerOptionTheme}>
      <Tab.Screen
        name="budget"
        component={BudgetTabs}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon icon="IC_CALCULATOR" style={focused && ACTIVE} />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              text="Budget"
              preset="tertiary"
              style={[TXT_TAB, focused && TXT_ACTIVE]}
            />
          ),
          headerShown: false,
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
            <Text
              text="Emissions"
              preset="tertiary"
              style={[TXT_TAB, focused && TXT_ACTIVE]}
            />
          ),
          title: 'Emissions',
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
            <Text
              text="Add"
              preset="tertiary"
              style={[TXT_TAB, focused && TXT_ACTIVE]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="act"
        component={ActTabs}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon icon="IC_ACT" style={focused && ACTIVE} />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              text="Act"
              preset="tertiary"
              style={[TXT_TAB, focused && TXT_ACTIVE]}
            />
          ),
          headerShown: false
        }}
      />
      <Tab.Screen
        name="settings"
        component={SettingTabs}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon icon="IC_SETTINGS" style={focused && ACTIVE} />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              text="Settings"
              preset="tertiary"
              style={[TXT_TAB, focused && TXT_ACTIVE]}
            />
          ),
          headerShown: false
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
  marginBottom: 4,
};
const TXT_ACTIVE: TextStyle = {
  color: color.primary,
};
