import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default (ClassementRow = props => (
  <View style={styles.row}>
      <Text style={[styles.primaryText, styles.column]}>
        {props.position }
      </Text>

      <Text style={[styles.primaryText, styles.equipe]}>
        {props.equipe}
      </Text>

      <Text style={[styles.primaryText, styles.column]}>
        {props.point}
      </Text>

      <Text style={[styles.primaryText, styles.column]}>
        {props.match}
      </Text>

      <Text style={[styles.primaryText, styles.column]}>
        {props.victoire}
      </Text>

      <Text style={[styles.primaryText, styles.column]}>
        {props.victoireProlongation}
      </Text>

      <Text style={[styles.primaryText, styles.column]}>
      {props.victoireTab}
      </Text>

      <Text style={[styles.primaryText, styles.column]}>
        {props.perdu}
      </Text>

      <Text style={[styles.primaryText, styles.column]}>
        {props.perduProlongation}
      </Text>

      <Text style={[styles.primaryText, styles.column]}>
        {props.perduTab}
      </Text>

      <Text style={[styles.primaryText, styles.column]}>
        {props.forfait}
      </Text>

      <Text style={[styles.primaryText, styles.column]}>
        {props.plus}
      </Text>

      <Text style={[styles.primaryText, styles.column]}>
        {props.moins}
      </Text>

      <Text style={[styles.primaryText, styles.column]}>
        {props.diff}
      </Text>

    </View>
))

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center'},
  picture: { width: 50, height: 50, borderRadius: 25, marginRight: 18 },
  primaryText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'black',
    marginBottom: 4,
    margin:5
  },
  secondaryText: { color: 'grey' },
  
  equipe:{
    width:150
  },
  column:{
    width:40,
    textAlign:'center'

  }
})

