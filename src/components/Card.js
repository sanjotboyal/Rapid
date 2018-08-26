import React from 'react';
import { View, Platform, TouchableOpacity } from 'react-native';

const Card = ({ children, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={ styles.containerStyle }>
        {children}
    </TouchableOpacity>
  );
};

const styles = {
  containerStyle: {
    overflow: 'hidden',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    ...Platform.select({
      ios: {
        shadowOpacity: 0.2
      },
      android: {
        elevation: 1
      },
    }),
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10
  }

};

export default Card;
