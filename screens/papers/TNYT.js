import React from 'react';
import { WebView } from 'react-native-webview';

export default function TNYT() {
  return <WebView source={{ uri: 'https://www.nytimes.com/international/' }} />;
}
