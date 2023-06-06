import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { useFonts,
        Montserrat_400Regular, 
        Montserrat_700Bold 
      } from '@expo-google-fonts/montserrat';

import AppLoading from 'expo-app-loading';

import Menu from './src/telas/Menu';
import mock from './src/mocks/Solucoes';

export default function App() {
  const [fontCarregada] = useFonts({
    "MontserratRegular" : Montserrat_400Regular,
    "MontserratBold" : Montserrat_700Bold,
  });

  if (!fontCarregada){
    return <AppLoading />
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Menu {...mock} />
    </SafeAreaView>
  );
};
