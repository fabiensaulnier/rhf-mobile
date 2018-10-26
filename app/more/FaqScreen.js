import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView
} from 'react-native';
import Panel from './components/Panel';

export default class MoreScreen extends React.Component {

  render() {
    return (
      <ScrollView style={styles.container}>
        <Panel title="Une question un peu trop longue quelle sera ta reaction ? ">
          <Text> 
          AVoici ma reponse. la reaction de ce composant est du loremp ipsum loremps
          Voici ma reponse. la reaction de ce composant est du loremp ipsum loremps
          Voici ma reponse. la reaction de ce composant est du loremp ipsum loremps
          Voici ma reponse. la reaction de ce composant est du loremp ipsum loremps
          Voici ma reponse. la reaction de ce composant est du loremp ipsum loremps
          Voici ma reponse. la reaction de ce composant est du loremp ipsum loremps
          Voici ma reponse. la reaction de ce composant est du loremp ipsum loremps
          </Text>
        </Panel>
        <Panel title="Une question ?">
          <Text>Une réponse.</Text>
        </Panel>
        <Panel title="Une question ?">
          <Text>Une réponse.</Text>
        </Panel>
        <Panel title="Une question ?">
          <Text>Une réponse.</Text>
        </Panel>
        <Panel title="Une question ?">
          <Text>Une réponse.</Text>
        </Panel>
        <Panel title="Une question ?">
          <Text>Une réponse.</Text>
        </Panel>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f7f9',
    //paddingTop: 10,
  },

});
