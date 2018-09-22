import React from 'react';
import { View, Text, StyleSheet, TextInput, Picker } from 'react-native';

const styles = StyleSheet.create({

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
const ResultatHeader = (props) => (
  <View style={styles.container}>
     <Picker selectedValue={(itemValue, itemIndex) => itemValue } onValueChange={(itemValue, itemIndex) => itemValue}
  >
  <Picker.Item label="Journee 1" value="j1" />
  <Picker.Item label="Journee 2" value="j2" />
  <Picker.Item label="Journee 3" value="j3" />
  <Picker.Item label="Journee 4" value="j4" />
  <Picker.Item label="Journee 5" value="j5" />
  <Picker.Item label="Journee 6" value="j6" />
  <Picker.Item label="Journee 7" value="j7" />
  <Picker.Item label="Journee 8" value="j8" />
  <Picker.Item label="Journee 9" value="j9" />
  <Picker.Item label="Journee 10" value="j10" />
  <Picker.Item label="Journee 11" value="j11" />
  <Picker.Item label="Journee 12" value="j12" />
  <Picker.Item label="Journee 13" value="j13" />
  <Picker.Item label="Journee 14" value="j14" />
</Picker>
  </View>
);

export default ResultatHeader;