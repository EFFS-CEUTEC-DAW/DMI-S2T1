import React from 'react';
import {SafeAreaView} from 'react-native';
import {CalculatorComponent} from './src/presentation/screens/CalculatorComponent';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CalculatorComponent />
    </SafeAreaView>
  );
};
