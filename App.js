import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SplashScreen } from './src/screens/SplashScreen';

export default function App() {
  return (
    <>
    <StatusBar style="light" />
    <SplashScreen />
    </>
  );
}