import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { Icon } from './LocalIcon';

export default function App() {
  return (
    <View style={styles.container}>
      <Icon name="arrow-right" size="small" color="secondary" />
      <Text>Home screen of the demo example app</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
