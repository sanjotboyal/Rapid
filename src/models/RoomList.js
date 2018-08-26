import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import RoomDetail from './RoomDetail';

class RoomList extends Component {
  state = { rooms: [] };

  componentDidMount() {

    axios.get('https://rapid-api.herokuapp.com/api/users/-LKn_iTj1Huyt9COY_xH')

    .then(response => this.setState({ rooms: response.data.groups }))
    .catch(err => {
      console.log(err);
    });
   
  }

  renderRooms() {
    console.log(this.state.rooms);
    return Object.keys(this.state.rooms).map(room =>
      <RoomDetail key={room} room={this.state.rooms[room]} />
    );
    
  }


  render() {
    return (
      <ScrollView>
        {this.renderRooms()}
      </ScrollView>
    );
  }
}

export default RoomList;
