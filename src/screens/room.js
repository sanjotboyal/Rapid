import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Room extends Component {

  render(props) {

    return (
      <View>
        <Text>{props.name}</Text>
      </View>
    );
  }
}

export { Room }