// Import libraries for component

import React from 'react';
import { Text, View, Platform } from 'react-native';


// Make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    paddingBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    ...Platform.select({
      ios:{
        shadowOpacity:0.2
      },
      android:{
        elevation:5
      },
    }),
    
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

// Make it available to OTHER PARTS OF THE APP
export default Header;
