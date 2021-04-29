import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { List, Divider, Switch } from 'react-native-paper'

export default function Settings({ navigation }) {
  const [cachingIsOn, setCachingIsOn] = useState(false)
  const [trackingIsOn, setTrackingIsOn] = useState(false)
  const [quickLoadingIsOn, setquickLoadingIsOn] = useState(false)

  return (
    <View>
      <View style={styles.imageContainer}>
        <Image style={{ height: 200, width: 200 }} source={require('../assets/icon.png')} />
      </View>
      <View style={styles.settingsContainer}>
        <List.Item
          title="Web View Chaching"
          description="Turn on caching"
          left={(props) => <List.Icon {...props} icon="cached"/>}
          right={() => <Switch value={cachingIsOn} onValueChange={() => setCachingIsOn(true)} />} 
        />
        <Divider/>
        <List.Item
          title="Private Mode"
          description="Blocks Trackers"
          left={(props) => <List.Icon {...props} icon="lock"/>}
          right={() => <Switch value={trackingIsOn} onValueChange={() => setTrackingIsOn(true)} />} 
        />
        <Divider/>
        <List.Item
          title="Quick Load"
          description="Activate Quick Loading"
          left={(props) => <List.Icon {...props} icon="flash"/>}
          right={() => <Switch value={quickLoadingIsOn} onValueChange={() => setquickLoadingIsOn(true)} />} 
        />
        <Divider/>
        <List.Item
          title="About"
          description="About the app and developer"
          left={(props) => <List.Icon {...props} icon="account"/>}
          onPress={() => navigation.navigate('About')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  settingsContainer: {
    marginTop: 12,
    paddding: 8
  }
})