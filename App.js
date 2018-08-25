import React from 'react';
import { StackNavigator } from 'react-navigation';
import Login from './src/screens/Login';

const AppNavigator = StackNavigator({
	LoginScreen: { screen: Login }
}, {
	initialRouteName: 'LoginScreen'
});



export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}

