import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button
} from 'react-native';
import Table from 'react-native-simple-table'
const columns = [
  {
    title: '#',
    dataIndex: 'position'
  },
  {
    title: 'Équipe',
    dataIndex: 'equipe',
    width: 100
  },
  {
    title: 'MJ',
    dataIndex: 'matchFini',
    width: 50
  },
  {
    title: 'PTS',
    dataIndex: 'point',
    width: 40
  },
  {
    title: 'V',
    dataIndex: 'victoire'
  },
  {
    title: 'Vp',
    dataIndex: 'victoireProlongation'
  },
  {
    title: 'D',
    dataIndex: 'defaite'
  },
];

class Classement extends React.Component {
  constructor (props) {
    super(props)
  }
  render() {
    var equipes = [{position:1,equipe:"Rethel",matchFini:0,point:0,victoire:0,defaite:0,victoireProlongation:0},
                        {position:1,equipe:"Grenoble",matchFini:0,point:0,victoire:0,defaite:0,victoireProlongation:0},
                        {position:1,equipe:"Anglet",matchFini:0,point:0,victoire:0,defaite:0, victoireProlongation:0},
                        {position:1,equipe:"Epernay",matchFini:0,point:0,victoire:0,defaite:0, victoireProlongation:0},
                        {position:1,equipe:"Bordeaux",matchFini:0,point:0,victoire:0,defaite:0, victoireProlongation:0},
                        {position:1,equipe:"Caen",matchFini:0,point:0,victoire:0,defaite:0, victoireProlongation:0},
                        {position:1,equipe:"Villeneuve-la-garenne",matchFini:0,point:0,victoire:0,defaite:0, victoireProlongation:0},
                        {position:1,equipe:"Paris",matchFini:0,point:0,victoire:0,defaite:0, victoireProlongation:0},
                        {position:1,equipe:"Garges",matchFini:0,point:0,victoire:0,defaite:0, victoireProlongation:0},
                        {position:1,equipe:"Angers",matchFini:0,point:0,victoire:0,defaite:0, victoireProlongation:0}
                      ];

    return (
      <View style={styles.container}>
        <Table  columnWidth={30} columns={columns} dataSource={equipes} />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:25
  },
  TextStyle:{
    fontSize : 25,
     textAlign: 'center'
  },
  title: {
    fontSize: 18,
    padding: 10,
    textAlign: 'center'
  }
});

export default Classement;
