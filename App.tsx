import React from "react";
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import { ThemeProvider } from "styled-components";
import AppLoading from "expo-app-loading";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'

import theme from './src/global/styles/theme'

import {NavigationContainer} from '@react-navigation/native'
import { AppRoutes } from "./src/routes/app.routes";

import { SignIn } from "./src/screens/SignIn";

import { AuthProvider } from "./src/hooks/auth";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <GestureHandlerRootView style={{flex: 1}}>
       <ThemeProvider theme={theme}>
        <NavigationContainer>
          <StatusBar barStyle='light-content' backgroundColor='#5636D3'/>
          <AuthProvider>
            <SignIn/>
          </AuthProvider>
        </NavigationContainer>
      </ThemeProvider>
    </GestureHandlerRootView>
   
  );
}


