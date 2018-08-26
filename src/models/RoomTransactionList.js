import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import RoomTransactionDetails from './RoomTransactionDetails';

class RoomTransactionList extends Component {
  constructor(props) {
    super(props);
    console.log("in roomlist, email " + props.email + " and pass " + props.password);
  }

  state = { rooms: [] };

  componentDidMount() {
    console.log("componentDidMount roomlist");

    axios.get('https://rapid-api.herokuapp.com/api/login?email=' + this.props.email + "&password=" + this.props.password)

    .then(response => {
      this.setState({ rooms: response.data.user.groups });
    })
    .catch(err => {
      console.log(err);
    });
   
  }

  renderRooms() {
    console.log(this.state.rooms);
    return Object.keys(this.state.rooms).map(room =>
      <RoomTransactionDetails key={room} room={this.state.rooms[room]} id={room} />
    );
    
  }


  render() {
    return (
      <View>
        {this.renderRooms()}
      </View>
    );
  }
}

export default RoomTransactionList;