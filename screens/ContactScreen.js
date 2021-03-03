import React, { useState } from 'react';
import { View, StyleSheet, ToastAndroid } from 'react-native';
import Constants from 'expo-constants';
import { TextInput } from 'react-native-paper';
import email from 'react-native-email';
import { createStackNavigator } from '@react-navigation/stack';

const handleEmail = (userWish) => {
  const to = ['admimterminal2000@gmail.com'];
  email(to, {
    subject: 'Bug Report (Newserily)',
    body: userWish,
  }).catch(console.error);
};

const throwToast = () => {
  ToastAndroid.show('Bug Report Service Started', ToastAndroid.SHORT);
};

function ContactHandler() {
  const [bug, setBug] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        label="Send Bug Report"
        mode="outlined"
        onChangeText={(text) => setBug(text)}
        onSubmitEditing={() => {
          handleEmail(bug);
          throwToast();
        }}
      />
    </View>
  );
}

const Stack = createStackNavigator();

export default function ContactScreen() {
  return (
    <Stack.Navigator initialRouteName="Contact">
      <Stack.Screen name="Contact" component={ContactHandler} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    padding: 10,
    flex: 1,
  },
});
