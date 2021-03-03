import React from 'react';
import { WebView } from 'react-native-webview';

export default function CNN() {
  return <WebView source={{ uri: 'https://edition.cnn.com/' }} />;
}
