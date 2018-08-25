import React from 'react';
import { Text, View } from 'react-native';
import Card from '../components/Card';
import CardSection from '../components/CardSection';


const RoomDetail = ({ room }) => {
  const { name, funds } = room ;

  return (
    <Card>

      <CardSection>
        <View style={styles.textContainer}>
          <Text style={styles.headerText}> Room: { name } </Text>
        </View>
      </CardSection>

      <CardSection>
        <View style={styles.textContainer}>
          <Text style={styles.fundText}> $ { funds } </Text>
        </View>
      </CardSection> 

    </Card>
  );
};

const styles = {
  textContainer: {
    justifyContent: 'space-around'
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
    fontSize: 18
  },
  fundText: {
    fontSize: 25
  }
};

export default RoomDetail;
