import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import RoomDetail from './RoomDetail';

class RoomList extends Component {
  state = { rooms: [] };

  componentDidMount() {

    axios.get('https://rapid-api.herokuapp.com/api/users/-LKmdR7P1v8uXb2tRnNd')

    .then(response => this.setState({ rooms: Object.values(response.data.groups) }))
    .catch(err => {
      console.log(err);
    });

   
  }

  renderRooms() {
    
    return this.state.rooms.map(room =>
      <RoomDetail key={room} room={room} />
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
