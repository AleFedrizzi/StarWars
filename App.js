// import 'react-native-gesture-handle';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import { 
  useFonts, 
  SourceSansPro_400Regular, 
  SourceSansPro_700Bold, 
  SourceSansPro_600SemiBold, 
  SourceSansPro_900Black, 
} from '@expo-google-fonts/source-sans-pro';
import { theme } from "./src/styles"

export default function App() {
  let [fontsLoaded] = useFonts({
    SourceSansPro_400Regular, 
    SourceSansPro_700Bold, 
    SourceSansPro_600SemiBold, 
    SourceSansPro_900Black,
  });

  if(!fontsLoaded){
    return <AppLoading />
  }
  
  return (
    
    <ThemeProvider theme={theme}>
      <StatusBar style="light" />
      <NavigationContainer>
        <Home />  
      </NavigationContainer>
    </ThemeProvider>
  );
}