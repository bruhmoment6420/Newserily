import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';

import NewsPapers from './stacks/NewsPapers';

import BBC from './papers/BBC';
import CNN from './papers/CNN';
import TDM from './papers/TDM';
import TG from './papers/TG';
import TNYT from './papers/TNYT';
import TT from './papers/TT';

const Stack = createStackNavigator();

export default function NewsScreen({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="News">
      <Stack.Screen name="News" component={NewsPapers} />
      <Stack.Screen name="BBC" component={BBC} />
      <Stack.Screen name="CNN" component={CNN} />
      <Stack.Screen name="The Daily Mail" component={TDM} />
      <Stack.Screen name="The Guardian" component={TG} />
      <Stack.Screen name="The New York Times" component={TNYT} />
      <Stack.Screen name="The Times" component={TT} />
    </Stack.Navigator>
  );
}
