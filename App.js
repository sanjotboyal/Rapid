import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Home, Ledger, Login, Register, Room, RoomFeed } from './src/screens/';

const AppNavigator = StackNavigator({
	LoginScreen: { screen: Login }
}, {
	initialRouteName: 'LoginScreen',
	headerMode: 'none'
});



class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}

export default App;
