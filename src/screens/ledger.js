import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import RoomTransactionList from '../models/RoomTransactionList';

class Ledger extends Component {

  render() {

    return (
      <ScrollView style = {{ flex: 1 }}>
        	<RoomTransactionList  email={this.props.screenProps.user['email']} password={this.props.screenProps.user['password']}/>
      </ScrollView>
    );
  }
}

export { Ledger }; 