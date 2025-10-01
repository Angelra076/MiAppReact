import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function Experiencia() {
  return (
    <View style={{flex:1}}>
      <WebView
        source={{ uri: 'https://youtu.be/fOFFYn4wSkA' }}
        style={{flex:1}}
      />
    </View>
  );
}
