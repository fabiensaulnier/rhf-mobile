import React from 'react'
import { View, Text, StyleSheet, TextInput, FlatList, SearchBar } from 'react-native';
import ResultatRow from './ResultatRow'
import ResultatHeader from './ResultatHeader';

const _renderItem = ({ item }) => (
    <ResultatRow
      date={item.date}
      MatchId={item.matchId}
      JourneeId={item.journeeId}
      lieu={item.lieu}
      heure={item.heure}
      EquipeA={item.equipeA}
      EquipeAId={item.equipeAId}
      ScoreA={item.scoreA}
      AvecProlongation = {item.avecProlongation}
      ScoreATab = {item.scoreATab}
      ScoreBTab ={item.scoreBTab}
      ScoreB = {item.scoreB}
      EquipeB = {item.equipeB}
      EquipeBId = {item.equipeBId}
      
    />
  )
  export default (EquipeList = props => (
    <FlatList data={props.data} renderItem={_renderItem} keyExtractor={item => item.matchId.toString()} ListHeaderComponent={ResultatHeader}  /> // // A revoir s
    
  ))