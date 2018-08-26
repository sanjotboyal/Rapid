import React from 'react';
import { Text, View } from 'react-native';
import Card from '../components/Card';
import CardSection from '../components/CardSection';


const RoomDetail = ({ room }) => {

const { funds, name } = room;

  return (
    <Card onPress={() => console.log( { name} )} >
      <CardSection>
        <View style={ styles.textContainer }>
          <Text style={ styles.headerText }> { name } </Text>
        </View>
      </CardSection>

      <CardSection>
        <View style={styles.textContainer}>
          <Text style={styles.fundText}> Fund: $ { funds } </Text>
        </View>
      </CardSection> 

    </Card>
  );
};

const styles = {
  textContainer: {
    marginLeft:120
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  },
  headerText: {
    fontSize: 30,
    
  },
  fundText: {
    fontSize: 25
  }
};

export default RoomDetail;
