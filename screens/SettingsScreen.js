import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Settings from '../stacks/Settings'

const Stack = createStackNavigator();

export default function NewspaperScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Settings' component={Settings}/>
    </Stack.Navigator>
  )
}