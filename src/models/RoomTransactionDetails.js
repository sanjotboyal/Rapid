import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Text, View, Image} from 'react-native';
import Card from '../components/Card';
import CardSection from '../components/CardSection';
import NavigationService from '../config/NavigationService';
import TransactionList from './TransactionList';

const RoomTransactionDetails = ({ room, id }) => {

const { funds, name } = room;

  return (
    <Card onPress={() =>  {
      NavigationService.navigate('Room', { id: id });
    }} >
      <CardSection>
        <View style={styles.headerPlacement}>
          <Text style={styles.header}>{ name }</Text>
        </View>
      </CardSection>

      <TransactionList id= {id} />

    </Card>
  );
};

const styles = {
    header: {
      fontSize:22,
      fontWeight: 'bold'
    },

    headerPlacement: {
      flex: 1,
      alignItems: 'center'
    }
};

export default RoomTransactionDetails;
