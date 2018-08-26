import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

class Home extends Component {
	constructor(props) {
		super(props);
		//console.log("in home");
		//console.log(props.screenProps.user);
	}

  render() {

  	let user = this.props.screenProps.user;

  	const styles = {
  		container: {
  			flex: 1,
  			justifyContent: 'flex-start',
  			alignItems: 'center',
  			paddingTop: 30,
  			paddingLeft: 20,
  			paddingRight: 20
  		},
  		header: {
  			fontWeight: 'bold',
  			fontSize: 24
  		},
  		funds: {
  			fontSize: 16
  		},
  		line: {
  			width: '100%',
  			borderBottomColor: '#6bc7c6',
  			borderBottomWidth: 1,
  			paddingTop: 10
  		},
  		history: {
  			fontSize: 14,
  			paddingTop: 10
  		}
  	}

    return (
      <View style={styles.container}>
      	<Image
      	style={{width: 125, height: 125}}
      	source={require('../img/dummy.png')} />
        <Text style={styles.header}>{user['name']}</Text>
        <Text style={styles.funds}>Balance: ${user['funds']}</Text>
        <View style={styles.line} />
        <Text style={styles.history}>LATEST HISTORY</Text>
      </View>
    );
  }
}

export { Home }; 