import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button
} from 'react-native';
import { getStatistiques } from '../../services/RhfApi'

class Statistiques extends React.Component {
  constructor (props) {
    super(props);
    this.stage = this.props.screenProps.stage;
  }

  render() {
    return <Text>{JSON.stringify(this.stage.statistiques)}</Text>;
  }
}

export default Statistiques;
