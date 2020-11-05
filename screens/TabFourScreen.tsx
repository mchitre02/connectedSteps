import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabFourScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Social</Text>
      <View style={styles.separator} lightColor="#0ee" darkColor="rgba(0,0,128,0.1)" />
      <Text style={styles.bodytext}>This is where you can connect with others</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bodytext: {
    fontSize: 12,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
