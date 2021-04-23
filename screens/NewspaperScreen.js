import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Newspapers from '../stacks/Newspapers'
import ViewPaper from '../stacks/ViewPaper'

const Stack = createStackNavigator();

export default function NewspaperScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Your Papers' component={Newspapers}/>
      <Stack.Screen name='View Paper' component={ViewPaper}/>
    </Stack.Navigator>
  )
}