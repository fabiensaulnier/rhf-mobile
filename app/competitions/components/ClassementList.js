

import React from 'react'
import { View, Text, StyleSheet, TextInput, FlatList, SearchBar } from 'react-native';
import ClassementRow from './ClassementRow'
import ClassementHeader from './ClassementHeader';

const _renderItem = ({ item }) => (
    <ClassementRow
      position={item.position}
      equipe={item.nom}
      victoire={item.victoire}
      defaite={item.defaite}
      point={item.point}
      match={item.match}
      victoireProlongation={item.victoireProlongation}
      victoireTab={item.victoireTab}
      perdu = {item.perdu}
      perduProlongation = {item.perduProlongation}
      perduTab ={item.perduTab}
      forfait = {item.forfait}
      plus = {item.plus}
      moins = {item.moins}
      diff= {item.diff}
    />
  )
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 8,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#C1C1C1',
    },
    input: {
      height: 30,
      flex: 1,
      paddingHorizontal: 8,
      fontSize: 15,
      backgroundColor: '#FFFFFF',
      borderRadius: 2,
    },
  });

export default (ClassementList = props => (
  <FlatList data={props.data} renderItem={_renderItem} keyExtractor={item => item.position.toString()} ListHeaderComponent={ClassementHeader} />
))