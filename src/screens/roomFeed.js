import React, { Component } from 'react';
import { Text, View } from 'react-native';
import RoomList from '../models/RoomList';

class RoomFeed extends Component {

	constructor(props) {
		super(props);
		console.log("in roomFeed");
		console.log(props.screenProps.user);
	}

  render() {

    return (
       <View style={{ flex: 1 }}>
       	<RoomList  email={this.props.screenProps.user['email']} password={this.props.screenProps.user['password']}/>
      </View>
    );
  }
}

export { RoomFeed }