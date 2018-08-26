import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import TransactionDetails from './TransactionDetails';

class TransactionList extends Component {
  state = { transactions: [] };

  componentDidMount() {
    console.log("componentDidMount roomlist");

    axios.get('https://rapid-api.herokuapp.com/api/groups/' + this.props.id)
    .then(response => {
      this.setState({ transactions: response.data.transactions });
    })
    .catch(err => {
      console.log(err);
    });
   
  }

  renderTransactions() {
    console.log(this.state.transactions);
    return Object.keys(this.state.transactions).map(transaction =>
      <TransactionDetails key={transaction} transaction={this.state.transactions[transaction]} id={transaction} />
    );
  }

  render() {
    return (
      <View>
        {this.renderTransactions()}
      </View>
    );
  }
}

export default TransactionList;