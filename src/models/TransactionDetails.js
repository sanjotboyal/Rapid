import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Text, View, Image} from 'react-native';
import Card from '../components/Card';
import CardSection from '../components/CardSection';
import NavigationService from '../config/NavigationService';

const TransactionDetails = ({ transaction, id }) => {

  const { amount, userId } = transaction;

  return (
      <CardSection>
        <View style={styles.headerPlacement}>
          <Text style={styles.header}>{ id }</Text>
          <Text> $ { amount }</Text>
        </View>
      </CardSection>

  );
};

const styles = {
    header: {
      fontSize:22,
    },

    headerPlacement: {
      flex: 1,
      alignItems: 'center'
    }
};

export default TransactionDetails;
