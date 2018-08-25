
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Test Header'} />
  </View>
);


AppRegistry.registerComponent('Rapid', () => App);
