import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView
} from 'react-native';
import Panel from './components/Panel';  // Step 1

export default class MoreScreen extends React.Component {

  render() {
    return (  //Step 2
      <ScrollView style={styles.container}>
        <Panel title="A Panel with short content text">
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </Panel>
        <Panel title="A Panel with long content text">
          <Text>Lorem ipsum...</Text>
        </Panel>
        <Panel title="Another Panel">
          <Text>Lorem ipsum dolor sit amet...</Text>
        </Panel>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f7f9',
    paddingTop: 30,
  },

});
