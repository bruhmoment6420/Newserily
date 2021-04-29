import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Settings from '../stacks/Settings'
import About from '../stacks/About'

const Stack = createStackNavigator();

export default function NewspaperScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Settings' component={Settings}/>
      <Stack.Screen name='About' component={About}/>
    </Stack.Navigator>
  )
}