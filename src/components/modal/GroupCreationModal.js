import React, { Component } from "react";
import { Button, TextInput, Text, TouchableOpacity, View } from "react-native";
import { Container, Icon, Fab, Tab, Tabs } from 'native-base';
import Modal from "react-native-modal";
import axios from 'axios';

export default class GroupCreationModal extends Component {
 constructor(props) {
    super(props);
    console.log("in groupcreatemodal, email " + props.email);

    this.state = {
	    isModalVisible: false,
	    groupId: '',
	    groupName: ''
  	};
  }

  addToGroup = () => {
  	/*
  	let users = [];

  	axios.get('https://rapid-api.herokuapp.com/api/users')
    .then(response => {
    	users = response.data;
    	Object.keys(users).map(user => {
  		if (users[us er].email === getEmail) {
  			console.log("found id! " + user);
  		}
  		});
    })
    .catch(err => {
      console.log(err)
    });
    */
    let jay = "-LKn_7Jb8N5q654yZN-j";
    let sanjot = "-LKn_iTj1Huyt9COY_xH";

    axios.post('https://rapid-api.herokuapp.com/api/users/' + jay + "/addGroup?groupId=" + this.state.groupId);
    this._toggleModal();
  }

  createGroup = () => {
  	console.log("groupname: " + this.state.groupName);

  	axios.post('https://rapid-api.herokuapp.com/api/groups', {
  		name: this.state.groupName
  	})
  	.then(response => {
  		console.log(response.data);
  		this.setState({groupId: response.data['id']});
  		this.addToGroup();
  	})
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

          				<TextInput placeholder="Group ID" onChangeText={(text) => {
          					this.setState({groupId: text})
          					console.log("groupId is now: " + this.state.groupId);
          				}}
          				value={this.state.groupId} style={{ width: 200  }} />
          				<Button style={{ backgroundColor: '#6bc7c6' }} onPress={this.addToGroup} title="Join Group"/>

          			</Tab>
          			<Tab heading="Create Group" style={{ justifyContent: 'center', alignItems: 'center'}}>

          				<TextInput placeholder="Group Name" onChangeText={(text) => this.setState({groupName: text})}
          				value={this.state.groupName} style={{ width: 200  }} />
          				<Button style={{ backgroundColor: '#6bc7c6' }} onPress={this.createGroup} title="Create Group"/>

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