import React, { Component } from 'react';
import { Text, View } from 'react-native';
import RoomList from '../models/RoomList';

class RoomFeed extends Component {

  render() {

    return (
       <View style={{ flex: 1 }}>
       	<RoomList />
      </View>
    );
  }
}

export { RoomFeed }