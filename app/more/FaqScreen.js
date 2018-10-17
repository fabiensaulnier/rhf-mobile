import React,{AppRegistry,StyleSheet,Text,ScrollView} from 'react-native';
import Panel from './components/Panel';  // Step 1

var Panels = React.createClass({
  render: function() {
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
});

var styles = StyleSheet.create({
  container: {
    flex            : 1,
    backgroundColor : '#f4f7f9',
    paddingTop      : 30
  },
  
});

AppRegistry.registerComponent('Panels', () => Panels);