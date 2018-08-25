import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text, Image} from 'react-native';

import logoImg from '../../img/icon.png';

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={logoImg} style={styles.image} />
        <Text style={styles.text}>Rapid</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 80,
    height: 80,
  },
  text: {
    color: '#6bc7c6',
    fontWeight: 'bold',
    fontSize: 30,
    backgroundColor: 'transparent',
    marginTop: 5,
  },
});
