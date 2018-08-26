import React, { Component } from 'react';
import { Text, View } from 'react-native';
import RoomList from '../models/RoomList';
import Header from '../components/Header';

class RoomFeed extends Component {

	constructor(props) {
		super(props);
		//console.log("in roomFeed");;
	}

  render() {

    return (
       <View style={{ flex: 1 }}>
        <Header headerText = "Existing Rooms" />
       	<RoomList  email={this.props.screenProps.user['email']} password={this.props.screenProps.user['password']}/>
      </View>
    );
  }
}

export { RoomFeed }