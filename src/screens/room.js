import React, { Component } from 'react';
import { Text, View, BackHandler } from 'react-native';
import Card from '../components/Card';
import CardSection from '../components/CardSection';
import Button from '../components/Button';

let group = {};

class Room extends Component {

constructor(props) {
    super(props)
    console.log("room");
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
}

componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
}

componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
}

handleBackButtonClick() {
	console.log("lmao");
    this.props.navigation.goBack();
    return true;
}

  render(props) {

  	const styles = {
	  buttonPane: {
	  	paddingLeft: 40,
	  	paddingRight: 20,
	    justifyContent: 'space-around',
	    flexDirection: 'row'
	  },
	  header: {
	  	fontSize:20,
	  },

	  headerPlacement: {
	  	flex: 1,
	  	alignItems: 'center'
	  }
	};

    return (
	    <Card>
	    	<CardSection >
	    		<View style={styles.headerPlacement} >
		      		<Text style={styles.header}>Action Controls</Text>
		      	</View>
	      	</CardSection>

	      	<CardSection>
		      	<View style = {styles.buttonPane}>
		      		<Button onPress={() => console.log("Request")} name={'Request'}/>
		      		<Button onPress={() => console.log("Fund")} name={'Fund'}/>
		      		<Button onPress={() => console.log("Share")} name={'Share'}/>
	  			</View>
	      	</CardSection>
	   </Card>
    );
  }
}

export { Room }