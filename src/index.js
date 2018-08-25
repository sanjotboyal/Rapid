import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { Tab } from './config/navigation';
import { Home, Ledger, Login, Register, Room, RoomFeed } from './screens/';

const RootStack = createStackNavigator(
  {
    Login: Login
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }
);


export default class App extends Component{
	render() {
		return ( <RootStack /> );
	}
}