import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import StackNavigator from './StackNavigator';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Root' component={StackNavigator} />
      <Stack.Screen
        name='NotFound'
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
    </Stack.Navigator>
  );
}
