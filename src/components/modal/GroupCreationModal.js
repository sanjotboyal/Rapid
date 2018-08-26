import React, { Component } from "react";
import { Button, TextInput, Text, TouchableOpacity, View } from "react-native";
import { Container, Icon, Fab, Tab, Tabs } from 'native-base';
import Modal from "react-native-modal";
import axios from 'axios';

export default class GroupCreationModal extends Component {
 constructor(props) {
    super(props);
    console.log("in groupcreatemodal, email " + props.email);
  }
  state = {
    isModalVisible: false,
    groupId: '',
    groupName: '',
    email: this.props.email
  };

  addToGroup() {
  	/*
  	let users = [];

  	axios.get('https://rapid-api.herokuapp.com/api/users')
    .then(response => {
    	users = response.data;
    	Object.keys(users).map(user => {
  		if (users[user].email === getEmail) {
  			console.log("found id! " + user);
  		}
  		});
    })
    .catch(err => {
      console.log(err)
    });
    */
  }

  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

  render() {
    return (
      <View style={{ flex: 1 }}>
      	<Fab
            active='true'
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#6ADCBB' }}
            position="bottomRight"
            onPress={this._toggleModal}>
            <Icon name="add" />
        </Fab>

        <Modal isVisible={this.state.isModalVisible}>
          <View style={{ flex: 0, height: 250 }}>
          		<Tabs style={{backgroundColor: '#6bc7c6'}}>
          			<Tab heading="Join Group" style={{ justifyContent: 'center', alignItems: 'center'}}>

          				<TextInput placeholder="Group ID" onChangeText={(text) => this.setState({groupId: text})}
          				value={this.state.groupId} style={{ width: 200  }} />
          				<Button style={{ backgroundColor: '#6bc7c6' }} onPress={this.addToGroup} title="Join Group"/>

          			</Tab>
          			<Tab heading="Create Group" style={{ justifyContent: 'center', alignItems: 'center'}}>

          				<TextInput placeholder="Group Name" onChangeText={(text) => this.setState({groupName: text})}
          				value={this.state.groupName} style={{ width: 200  }} />
          				<Button style={{ backgroundColor: '#6bc7c6' }} onPress={this._toggleModal} title="Create Group"/>

          			</Tab>
          		</Tabs>
            <Text>Hello!</Text>
            <TouchableOpacity onPress={this._toggleModal}>
              <Text>Hide me!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}