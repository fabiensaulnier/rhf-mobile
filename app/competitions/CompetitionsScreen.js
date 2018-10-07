import React, { Component } from 'react';
import {
  SectionList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Loading from './../components/Loading';
import CompetitionsListItem from './components/CompetitionsListItem';
import { firebaseApp } from './../services/Firebase';

export default class CompeititionsScreen extends Component<any, State> {
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
    this.unsubscribe = this.ref.orderBy("order").onSnapshot(this.onSectionsionUpdate)
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

  onPressItem = (item, section) => {
    this.props.navigation.navigate('Competition', {
      competitionId: item.competition.id,
      title: item.title,
      section: section,
    });
  }

  renderItem = ({item, section}) => {
    return (
      <CompetitionsListItem
        item={item}
        section={section}
        onPressItem={this.onPressItem}
      />
    )
  }

  renderSectionHeader = ({section}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.sectionHeader}>{section.title}</Text>
      </View>
    )
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    return (
      <View style={styles.container}>
        <SectionList
          sections={this.state.sections}
          renderItem={this.renderItem}
          renderSectionHeader={this.renderSectionHeader}
          keyExtractor={(item, index) => item.title + index}
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
})
