import React from 'react';
import { Text, View, Image} from 'react-native';
import Card from '../components/Card';
import CardSection from '../components/CardSection';

const RoomDetail = ({ room }) => {

const { funds, name } = room;

  return (
    <Card onPress={() => console.log( { name } )} >

      <CardSection>
        <View style={styles.thumbnailContainer}>
          <Image
            style={styles.thumbnailStyle}
            source={require('../img/groupIcon.png')}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.headerText}>{ name }</Text>
          <Text> $ { funds }</Text>
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

  headerText: {
    fontSize: 18
  }
};

export default RoomDetail;
