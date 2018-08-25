import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import Form from './Form';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';
import {StyleSheet, View} from 'react-native';

export default class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {email: '', password: ''};
  }

  handleChangeEmail = (text) => {
    this.setState({ email: text })
  }

  handleChangePassword = (text) => {
    this.setState({ password: text })
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
        <Logo />
        <Form email={this.handleChangeEmail} password={this.handleChangePassword} />
        <ButtonSubmit email={this.state.email} password={this.state.password} />
        <SignupSection />
      </View>
    );
  }
}
