import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Profile from './Profile';

import {StyleSheet, View} from 'react-native';

export default class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {name: '', password: ''};
  }

  render() {
    const styles = {
      containerStyle: {
        flex: 1,
        backgroundColor: '#fafafa'
      }
    };

    return (
      <View style = { styles.containerStyle }>
      <Profile />
      </View>
    );
  }
}