import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import RoomDetail from './RoomDetail';

class RoomList extends Component {
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
