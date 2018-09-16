import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button
} from 'react-native';
import { getStatistiques } from '../services/RhfApi'

class Statistiques extends React.Component {
  constructor (props) {
    super(props);
    this.state = { statistiques: undefined }
  }

  componentWillMount() {
    getStatistiques(this.props.competitionId)
      .then((json) => {
        this.setState({ statistiques : json });
      });
  }

  render() {
    return <Text>{JSON.stringify(this.state.statistiques)}</Text>;
  }
}

export default Statistiques;
