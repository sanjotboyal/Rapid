import React, {Component} from 'react';
import { Tab } from '../config/navigation';

export default class SecondScreen extends Component {
  constructor(props) {
    super(props);
    console.log("in secondscreen");
    console.log(props.user);
  }
  render() {
    return (
      <Tab screenProps={{user: this.props.user}} />
    );
  }
}
