import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { Tab } from './config/navigation';
import { Home, Ledger, Login, Register, Room, RoomFeed } from './screens/';
import { Root } from "native-base";
import NavigationService from './config/NavigationService';

const RootStack = createStackNavigator(
  {
    Login: Login,
    Room: Room,
    RoomFeed: RoomFeed
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }
);

export default class App extends Component{

	render() {

		return (
      <Root>
        <RootStack ref={navigatorRef => { NavigationService.setTopLevelNavigator(navigatorRef); }}/>
      </Root>
    );
	}
}