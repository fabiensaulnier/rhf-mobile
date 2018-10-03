import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View, } from 'react-native';

import Loading from './../components/Loading';
import { firebaseApp } from './../services/Firebase';


export default class CompetitionScreen extends Component<any, State> {
  static navigationOptions = {
    title: "Compétitions",
  };

  constructor(props) {
    super(props);
    this.ref = firebaseApp.firestore().collection('sections');
    this.unsubscribe = null;
    this.state = {
      sections: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onSectionsionUpdate)
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onSectionsionUpdate = (querySnapshot) => {
    const sections = [];
    querySnapshot.forEach((doc) => {
      const { title, competitions } = doc.data();
      sections.push({
        key: doc.id,
        title: title,
        data: competitions,
      });
    });
    this.setState({
      sections: sections,
      loading: false,
   });
  }

  renderItem = (item) => {
    return <Text style={styles.item}>{item.title}</Text>
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    return (
      <View style={styles.container}>
        <SectionList
          sections={this.state.sections}
          renderItem={({item}) => this.renderItem(item)}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => item + index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
  },
  sectionHeader: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#002c48',
    backgroundColor: 'lightgrey',
  },
  item: {
    backgroundColor: 'white',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    fontSize: 14,
  },
})
