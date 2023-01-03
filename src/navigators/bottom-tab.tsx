import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  ACTScreen,
  AddScreen,
  BudgetScreen,
  EmissionScreen,
  JuneEmissionsScreen,
  MontlyBudget,
  SettingScreen,
} from '../modules';
import {Icon} from '../components/icon/icon';
import {ImageStyle, TextStyle} from 'react-native';
import {color, headerOptionTheme} from '../themes';
import {Text} from '../components';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ACT1Screen} from '../modules/act/screens/ACT1Screen';
import FaqScreen from '../modules/settings/screens/faq-screen';
import {AddEmissionScreen} from '../modules/emissions/screens/AddEmissionScreen';
import { RecurringEmissionsScreen } from '../modules/emissions/screens/RecurringEmissionsScreen';
import { Add_EmissionScreen } from '../modules/add/screens/Add_EmissionScreen';
import { Add_Emission_TimeScreen} from '../modules/add/screens/Add_Emission_TimeScreen';
import { Add_Emission_EndScreen } from '../modules/add/screens/Add_Emission_EndScreen';
import { PeriodicityScreen } from '../modules/add/screens/PeriodicityScreen';
import { ImageTypes } from '../utils';

interface ItemNavigate {
  icon: ImageTypes;
  text: string;
  check?: boolean
}

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
  emission: undefined;
  add_emission: undefined
  recurring_emissions:undefined,
  june_emissions:undefined,
  add_emission_detail: {
    data: ItemNavigate[]
  },
  add_emission_end: {
    title: string
  } | undefined,
  periodicity: undefined
  add_emission_time: {
    title: string
  },
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
const EmissionsTabs = () => (
  <StackBudget.Navigator
    initialRouteName="emission"
    screenOptions={headerOptionTheme}>
    <StackBudget.Screen
      name="emission"
      component={EmissionScreen}
      options={{title: 'Emission'}}
    />
    <StackBudget.Screen
      name="add_emission"
      component={AddEmissionScreen}
      options={{title: 'Emission'}}
    />
    <StackBudget.Screen
    name='recurring_emissions'
    component={RecurringEmissionsScreen}
    options={{title: 'Recurring emissions'}}
    />
     <StackBudget.Screen
    name='june_emissions'
    component={JuneEmissionsScreen}
    options={{title: 'June'}}
    />
  </StackBudget.Navigator>
);
const AddTabs = () => (
  <StackBudget.Navigator
    initialRouteName="add"
    screenOptions={headerOptionTheme}>
    <StackBudget.Screen
      name="add"
      component={AddScreen}
      options={{title: 'Add'}}
    />
    <StackBudget.Screen
      name="add_emission_detail"
      component={Add_EmissionScreen}
      options={{title: 'AddEmission'}}
    />
    <StackBudget.Screen
      name="add_emission_time"
      component={Add_Emission_TimeScreen}
      options={{title: 'AddEmission'}}
    />
    <StackBudget.Screen
      name="add_emission_end"
      component={Add_Emission_EndScreen}
      options={{title: 'AddEmission'}}
    />
    <StackBudget.Screen
      name="periodicity"
      component={PeriodicityScreen}
      options={{title: 'Periodicity'}}
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
        component={EmissionsTabs}
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
          headerShown: false
        }}
      />
      <Tab.Screen
        name="add"
        component={AddTabs}
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
          headerShown: false
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
          headerShown: false,
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
          headerShown: false,
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
