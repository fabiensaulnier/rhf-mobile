import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Timestamp from 'react-timestamp';

export default (ResultatRow = props => (
  <View>
  <Text  style={{textAlign: 'center'}} >
    { 'Le ' }
    <Timestamp time={props.date} component={Text}  format='date'/>
  {" à " + props.heure }

  </Text>
  <Text  style={{textAlign: 'center'}}>
        { 'À ' +  props.lieu }
      </Text>

    <View style={styles.row}>
       
      <Text style={[styles.primaryText, styles.column]}>
        {'J' +props.JourneeId}
      </Text>

      <Text style={[styles.primaryText, styles.column]}>
        {props.EquipeA}
      </Text>

      <Text style={[styles.primaryText, styles.column]}>
      {props.ScoreA}
      </Text>

      <Text style={[styles.primaryText, styles.column]}>
        {props.AvecProlongation}
      </Text>

      <Text style={[styles.primaryText, styles.column]}>
        {props.ScoreATab}
      </Text>

      <Text style={[styles.primaryText, styles.column]}>
        {props.ScoreBTab}
      </Text>

      <Text style={[styles.primaryText, styles.column]}>
        {props.ScoreB}
      </Text>

      <Text style={[styles.primaryText, styles.column]}>
        {props.EquipeB}
      </Text>
      </View>
      </View>
      ))

      const styles = StyleSheet.create({
        row: { flexDirection: 'row', alignItems: 'center',borderBottomWidth: 3, borderBottomColor:'grey'},
        
        primaryText: {
          fontSize: 11,
          color: 'black',
          marginBottom: 4,
          margin:5
        },
      })