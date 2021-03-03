import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { AnimatedTabBarNavigator } from 'react-native-animated-nav-tab-bar';
import { Ionicons } from '@expo/vector-icons';

import NewsScreen from './screens/NewsScreen';
import ContactScreen from './screens/ContactScreen';

const Tabs = AnimatedTabBarNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen
          name="News"
          component={NewsScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <Ionicons name={'md-newspaper'} size={size} color={color} />
              );
            },
          }}
        />
        <Tabs.Screen
          name="Contact"
          component={ContactScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              return <Ionicons name={'md-mail'} size={size} color={color} />;
            },
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
