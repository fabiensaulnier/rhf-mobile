import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View
} from 'react-native';
import { getClassement } from '../services/RhfApi';
import ClassementList from './components/ClassementList';

class Classement extends React.Component {
  constructor (props) {
    super(props);
    this.state = { classement: undefined }
  }

  componentWillMount() {
    getClassement(this.props.competitionId)
      .then((json) => {
        this.setState({ classement : json });
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <ClassementList data={this.state.classement} /> 
        <Text>Légende (en mode dépliable) # : position, Pts. : points, J : Matchs joués, ...</Text>
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

export default Classement;
