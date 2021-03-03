import React from 'react';
import { WebView } from 'react-native-webview';

export default function TT() {
  return <WebView source={{ uri: 'https://www.thetimes.co.uk/' }} />;
}
