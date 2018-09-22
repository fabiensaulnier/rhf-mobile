import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button,
  Picker
} from 'react-native';
import { getResultats } from '../services/RhfApi'
import ResultatList from './components/ResultatList';

class Resultats extends React.Component {
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
    
    // return <Text>{JSON.stringify(this.state.resultats)}</Text>;
    return (
      <View style={styles.container}>
       <ResultatList data={this.state.resultats} /> 
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

});

export default Resultats;
