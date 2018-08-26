import React, { Component } from 'react';
import { Container, Header, View, Button, Icon, Fab } from 'native-base';
import GroupCreationModal from './modal/GroupCreationModal';

export default class FabButton extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View>
          <Fab
            active='true'
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#c3e4e3' }}
            position="bottomRight"
            onPress={() => {

              console.log("clicked!");
            }}>
            <Icon name="add" />
          </Fab>
        </View>
    );
  }
}