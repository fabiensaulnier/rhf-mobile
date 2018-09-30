import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';


const sections = [
  {title: 'National', data: ['Ligue Elite', 'Nationale 1', 'Nationale 2', 'Nationale 3']},
  {title: 'Féminin', data: ['Nationale 1', 'Nationale 2']},
  {title: 'Pré-National', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
  {title: 'Jeunesse', data: ['Junior', 'Cadet', 'Minime', 'Benjamin']},
  {title: 'Régional', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
  {title: 'Loisir', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
];


export default class CompetitionList extends Component {
  static navigationOptions = {
    title: "Accueil",
  };


  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'National', data: ['Ligue Elite', 'Nationale 1', 'Nationale 2', 'Nationale 3']},
            {title: 'Féminin', data: ['Nationale 1', 'Nationale 2']},
            {title: 'Pré-National', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
            {title: 'Jeunesse', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
            {title: 'Régional', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
            {title: 'Loisir', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 4,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 4,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'lightgrey',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
