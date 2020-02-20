import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Sound from './Sound.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Sound/>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
