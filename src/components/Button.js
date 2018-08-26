import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ onPress, name }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
      <Text style={styles.textStyle}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#6bc7c6',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#6bc7c6',
    marginLeft: 5,
    marginRight: 5
  },
  textStyle: {
    alignSelf: 'center',
    color: '#FFF',
    fontSize: 20,
    fontWeight: '600',
    padding: 10
  }

};

export default Button;
