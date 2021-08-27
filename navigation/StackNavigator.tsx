/* eslint-disable react/display-name */
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native';
import { SearchScreen } from '../screens/SearchScreen';
import { PreviewScreen } from '../screens/PreviewScreen';
import { PlayersScreen } from '../screens/PlayersScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator initialRouteName='Search'>
      <Stack.Screen
        name='Search'
        component={SearchScreen}
        options={{
          headerRight: () => (
            <Button
              onPress={() => {
                navigation.navigate('Preview');
              }}
              title='Preview'
              color='#000'
            />
          ),
          headerLeft: () => (
            <Button
              onPress={() => {
                navigation.navigate('Players');
              }}
              title='Players'
              color='#000'
            />
          ),
        }}
      />
      <Stack.Screen
        name='Preview'
        component={PreviewScreen}
        options={{
          headerLeft: () => (
            <Button
              onPress={() => {
                navigation.goBack();
              }}
              title='Search'
              color='#000'
            />
          ),
          tabBarIcon: () => <TabBarIcon name='ios-code' />,
        }}
      />
      <Stack.Screen
        name='Players'
        component={PlayersScreen}
        options={{
          headerLeft: () => (
            <Button
              onPress={() => {
                navigation.goBack();
              }}
              title='Search'
              color='#000'
            />
          ),
          tabBarIcon: () => <TabBarIcon name='ios-code' />,
        }}
      />
    </Stack.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}
