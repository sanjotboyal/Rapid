import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';


class FooterTabNav extends Component {
  constructor() {
    super();
    this.state = {
      index: 0
    }
  }
  
  change (index){
   this.setState({index});
  }
  
  color = (index) =>{
   return {
     color: (this.state.index == index) ? "white" : "#cccccc",
     //fontSize: (this.state.index == index) ? "21" : "8"
   }
 }
 
  font = (index) =>{
   return {
     fontSize: (this.state.index == index) ? "21" : "8"
   }
 }
 
  render() {
    return (
      <Container>
        <Header />
        <Content />
        <Footer>
          <FooterTab>
          
            <Button vertical onPress={() => this.change(0)}>
              <Icon name="ios-home" style={[this.color(0)]}/>
              {(this.state.index == 0) && (<Text style={[this.color(0)]}>app</Text>)}
            </Button>

            <Button rounded vertical onPress={() => this.change(1)}>
              <Icon name="ios-list" style={[this.color(1)]} />
              {(this.state.index == 1) && (<Text style={[this.color(1)]}>camera</Text>)}
            </Button>

            <Button rounded vertical onPress={() => this.change(2)}>
              <Icon active name="md-book" style={[this.color(2)]} />
              {(this.state.index == 2) && (<Text style={[this.color(2)]}>navigate</Text>)}
            </Button>
            
            <Button rounded vertical onPress={() => this.change(3)}>
              <Icon name="ios-list" style={[this.color(3)]} />
              {(this.state.index == 3) && (<Text style={[this.color(3)]}>person</Text>)}
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
} 

export default FooterTabNav;