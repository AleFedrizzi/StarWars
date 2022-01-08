import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Logo, Sub, Text } from '../../components';

export const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <Text>Star Wars</Text>
      <Sub />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
