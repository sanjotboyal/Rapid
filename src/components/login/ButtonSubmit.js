import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Animated,
  Easing,
  Image,
  Alert,
  View,
} from 'react-native';
import {Actions, ActionConst} from 'react-native-router-flux';

import { Toast } from 'native-base';

import axios from 'axios';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;

export default class ButtonSubmit extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
    };

    this.buttonAnimated = new Animated.Value(0);
    this.growAnimated = new Animated.Value(0);
    this._onPress = this._onPress.bind(this);
  }

async Login() {
}

async _onPress() {

    console.log("email: " + this.props.email + " password: " + this.props.password);
    if (this.state.isLoading) return;

    // Imagine if the validation working.
    if (!this.props.email || this.props.email.indexOf('@') == -1 || this.props.email.indexOf('.') == -1) {
      Toast.show({
              text: 'Invalid email. Please input an email.',
              buttonText: 'Okay'
            });
      return;
    }

   let loggedIn = false;

   await axios.get('https://rapid-api.herokuapp.com/api/login?email=' + this.props.email + "&password=" + this.props.password)
    .then(response => {
      loggedIn = true;
      console.log(response);
    })
    .catch(err => {
      console.log(err);
      Toast.show({
              text: 'Invalid email and/or password.',
              buttonText: 'Okay'
            });
    });

    if (!loggedIn) return;

    this.setState({isLoading: true});
    Animated.timing(this.buttonAnimated, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
    }).start();

    setTimeout(() => {
      this._onGrow();
    }, 2000);

    setTimeout(() => {
      Actions.secondScreen();
      this.setState({isLoading: false});
      this.buttonAnimated.setValue(0);
      this.growAnimated.setValue(0);
    }, 2300);
  }

  _onGrow() {
    Animated.timing(this.growAnimated, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
    }).start();
  }

  render() {
    const changeWidth = this.buttonAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [DEVICE_WIDTH - MARGIN, MARGIN],
    });
    const changeScale = this.growAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [1, MARGIN],
    });

    return (
      <View style={styles.container}>
        <Animated.View style={{width: changeWidth}}>
          <TouchableOpacity
            style={styles.button}
            onPress={this._onPress}
            activeOpacity={1}>
            <Text style={styles.text}>LOGIN</Text>
          </TouchableOpacity>
          <Animated.View
            style={[styles.circle, {transform: [{scale: changeScale}]}]}
          />
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 15,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6bc7c6',
    height: MARGIN,
    zIndex: 100,
  },
  circle: {
    height: MARGIN,
    width: MARGIN,
    marginTop: -MARGIN,
    borderWidth: 1,
    borderColor: '#6bc7c6',
    borderRadius: 100,
    alignSelf: 'center',
    zIndex: 99,
    backgroundColor: '#6bc7c6',
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  }
});
