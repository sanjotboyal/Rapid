import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import Form from './Form';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';
import {StyleSheet, View} from 'react-native';

export default class LoginScreen extends Component {
  render() {
    const styles = {
      containerStyle: {
        flex: 1,
        backgroundColor: '#fafafa'
      }
    };

    return (
      <View style = { styles.containerStyle }>
        <Logo />
        <Form />
        <SignupSection />
        <ButtonSubmit />
      </View>
    );
  }
}
