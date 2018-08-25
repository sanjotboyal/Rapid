import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { LoginForm } from '../components/LoginForm';
import FooterTabNav from '../components/FooterTabNav';

class Login extends Component {

  render() {

    return (
      <View>
        <Text>LOGIN SCREEN</Text>
        <FooterTabNav />

      </View>
    );
  }
}

export { Login };