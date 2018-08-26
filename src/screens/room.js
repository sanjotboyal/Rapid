import React, { Component } from 'react';
import { Text, View, BackHandler } from 'react-native';

let group = {};

class Room extends Component {

constructor(props) {
    super(props)
    console.log("room");
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
}

componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
}

componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
}

handleBackButtonClick() {
	console.log("lmao");
    this.props.navigation.goBack();
    return true;
}

  render(props) {

    return (
      <View>
        <Text>ROOM YEET</Text>
      </View>
    );
  }
}

export { Room }