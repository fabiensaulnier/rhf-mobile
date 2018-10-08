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
    this.state = { resultats: undefined }
  }

  componentWillMount() {
    getResultats(this.props.screenProps.stage.ffrsId)
      .then((json) => {
        this.setState({ resultats : json });
      });
  }

  render() {
    return <Text>{JSON.stringify(this.state.resultats)}</Text>;
  }
}

export default Resultats;
