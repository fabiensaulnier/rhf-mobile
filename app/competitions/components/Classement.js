import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
} from 'react-native';
import Table from 'react-native-simple-table';
import { Ionicons } from '@expo/vector-icons';
import Loading from './../../components/Loading';
import { getClassement } from '../../services/RhfApi'

const smallWidth = 40;
const largeWidth = 150;
const columns = [
  { title: '#', dataIndex: 'position', width: smallWidth },
  { title: 'Équipe', dataIndex: 'nom', width: largeWidth },
  { title: 'Pts.', dataIndex: 'point', width: smallWidth },
  { title: 'J', dataIndex: 'match', width: smallWidth },
  { title: 'V', dataIndex: 'victoire', width: smallWidth },
  { title: 'VP', dataIndex: 'victoireProlongation', width: smallWidth },
  { title: 'VTAB', dataIndex: 'victoireTab', width: smallWidth },
  { title: 'D', dataIndex: 'perdu', width: smallWidth },
  { title: 'DP', dataIndex: 'perduProlongation', width: smallWidth },
  { title: 'DTAB', dataIndex: 'perduTab', width: smallWidth },
  { title: 'F', dataIndex: 'forfait', width: smallWidth },
  { title: '+', dataIndex: 'plus', width: smallWidth },
  { title: '-', dataIndex: 'moins', width: smallWidth },
  { title: '+/-', dataIndex: 'diff', width: smallWidth },
];

class Classement extends React.Component {
  constructor (props) {
    super(props);
    this.stage = this.props.screenProps.stage;
  }

  render() {
    return (
      <View style={styles.container}>
        <Table columnWidth={30} height={350} columns={columns} dataSource={this.stage.classement} />
        {/* <Text>Légende (en mode dépliable) # : position, Pts. : points, J : Matchs joués, ...</Text> */}
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
