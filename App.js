import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/router';
import { useFonts, Anton_400Regular } from "@expo-google-fonts/anton";

export default function App() {
  
  let [fontsLoaded] = useFonts({
    Anton_400Regular,
  });

  if (!fontsLoaded) { 
    return ;
  }

  return (
    <>
      <StatusBar style="light" backgroundColor='#000' translucent={true} />
      <Routes />
    </>
  );
}
