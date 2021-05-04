import React from 'react'
import { View, Text, Linking, StyleSheet } from 'react-native'
import { Divider } from 'react-native-paper'

export default function About() {
  return (
    <View style={styles.container}>
      <Divider/>
      <Text style={styles.textStyle}>Version: 2.0</Text>
      <Divider/>
      <Text style={styles.textStyle}>Build: 34</Text>
      <Divider/>
      <Text style={styles.textStyle}>Repo: https://github.com/tahlilma/Newserily</Text>
      <Divider/>
      <Text style={styles.textStyle}>Made By: Tahlil</Text>
      <Divider/>
      <Text style={styles.textStyle}>Libraries Used: React Native Paper, React Navigation</Text>
      <Divider/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    marginLeft: 10,
    marginRight: 10,
  },
  textStyle: {
    fontSize: 16
  }
})