import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input } from 'native-base';
export default class LoginForm extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item>
              <Input placeholder="Email" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}