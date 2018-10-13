import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button
} from 'react-native';
import { getResultats } from '../../services/RhfApi'

class Resultats extends React.Component {
  constructor (props) {
    super(props);
    this.stage = this.props.screenProps.stage;
  }

  render() {
    return <Text>{JSON.stringify(this.stage.resultats)}</Text>;
  }
}

export default Resultats;
