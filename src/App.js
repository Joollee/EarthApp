import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider, Title } from 'react-native-paper';
import HomeScreen from './navigator/index'
import { Text, View } from 'react-native';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    // <View>
    //   <Text>asdasd</Text>
    // </View>
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen}
          options= {{
            headerShown: false
          }
          } />
        </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
}