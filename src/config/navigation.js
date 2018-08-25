import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import { Home, Ledger, Login, Register, Room, RoomFeed } from '../screens/';

export const Tab = TabNavigator({
	Home: {
		screen: Home,
	},

	RoomFeed: {
		screen: RoomFeed, 
	},
	Ledger : {
		screen: Ledger,
	}

}, {
	tabBarPosition: 'bottom',
  	swipeEnabled: true,

  	tabBarOptions: {
	    activeTintColor: '#f2f2f2',
	    activeBackgroundColor: "#2EC4B6",
	    inactiveTintColor: '#666',

	    labelStyle: {
	      fontSize: 15,
	      padding: 6
	    },

	    style: {
	    	backgroundColor: '#6bc7c6'
	    }

  	}
});
