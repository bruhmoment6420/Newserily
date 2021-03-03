import React from 'react';
import { WebView } from 'react-native-webview';

export default function TDM() {
  return (
    <WebView source={{ uri: 'https://www.dailymail.co.uk/home/index.html' }} />
  );
}
