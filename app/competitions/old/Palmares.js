import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button
} from 'react-native';
import { getResultats } from '../../services/RhfApi'

class Palmares extends React.Component {
  constructor (props) {
    super(props);
    this.state = { resultats: undefined }
  }

  componentWillMount() {
    getResultats(this.props.competitionId)
      .then((json) => {
        this.setState({ resultats : json });
      });
  }

  render() {
    return <Text>TODO (stockage firebase)</Text>;
  }
}

export default Palmares;
