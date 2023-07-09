import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import ArrowIcon from '../assets/icons/arrow-left.svg';

export default function App() {
  return (
    <View style={styles.container}>
      <ArrowIcon width={30} height={30} />
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
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
