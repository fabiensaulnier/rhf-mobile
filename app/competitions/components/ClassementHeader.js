import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C1C1C1',
  },
  primaryText:{
      margin:5
  },
  equipe:{
    width:145
  },
  column:{
    width:40,
    textAlign:'center'
  }
});
// const columns = [
//   { title: '#', dataIndex: 'position', width: smallWidth },
//   { title: 'Équipe', dataIndex: 'nom', width: largeWidth },
//   { title: 'Pts.', dataIndex: 'point', width: smallWidth },
//   { title: 'J', dataIndex: 'match', width: smallWidth },
//   { title: 'V', dataIndex: 'victoire', width: smallWidth },
//   { title: 'VP', dataIndex: 'victoireProlongation', width: smallWidth },
//   { title: 'VTAB', dataIndex: 'victoireTab', width: smallWidth },
//   { title: 'D', dataIndex: 'perdu', width: smallWidth },
//   { title: 'DP', dataIndex: 'perduProlongation', width: smallWidth },
//   { title: 'DTAB', dataIndex: 'perduTab', width: smallWidth },
//   { title: 'F', dataIndex: 'forfait', width: smallWidth },
//   { title: '+', dataIndex: 'plus', width: smallWidth },
//   { title: '-', dataIndex: 'moins', width: smallWidth },
//   { title: '+/-', dataIndex: 'diff', width: smallWidth },
// ];

// TODO : A OPTIMISER
const ClassementHeader = (props) => (
  <View style={styles.container}>
    <Text style={[styles.primaryText, styles.column]}>
        #
    </Text>
     <Text style={[styles.primaryText, styles.equipe]}>
      Équipe
      </Text>
      <Text style={[styles.primaryText, styles.column]}>
      Pts.
      </Text>
      <Text style={[styles.primaryText, styles.column]}>
      J
      </Text>
      <Text style={[styles.primaryText, styles.column]}>
        V
      </Text>
      <Text style={[styles.primaryText, styles.column]}>
        VP
      </Text>
      <Text style={[styles.primaryText, styles.column]}>
      VTAB
      </Text>
      <Text style={[styles.primaryText, styles.column]}>
        D
      </Text>
      <Text style={[styles.primaryText, styles.column]}>
        DP
      </Text>
      <Text style={[styles.primaryText, styles.column]}>
      DTAB
      </Text>
      <Text style={[styles.primaryText, styles.column]}>
        F
      </Text>
      <Text style={[styles.primaryText, styles.column]}>
      +
      </Text>
      <Text style={[styles.primaryText, styles.column]}>
       -
      </Text>
      <Text style={[styles.primaryText, styles.column]}>
        +/-
      </Text>
  </View>
);

export default ClassementHeader;