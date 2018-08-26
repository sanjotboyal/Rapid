import React from 'react';
import { Text, StyleSheet } from 'react-native';

const User = ({ user }) => {
	const { email, groups, name } = user;

	return (
		<Text>{name}</Text>
		<Text>{email}</Text>
	);
};

