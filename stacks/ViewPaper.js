import React from 'react';
import { WebView } from 'react-native-webview';

export default function ViewPaper({ route }) {
  const { source } = route.params

  return <WebView source={{ uri: source }}/> 
}