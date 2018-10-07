import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, } from 'react-native';

import Loading from './../components/Loading';
import CompetitionTabs from './components/CompetitionTabs';
import CompetitionHeader from './components/CompetitionHeader';
import CompetitionView from './components/CompetitionView';
import { firebaseApp } from './../services/Firebase';

export default class CompetitionScreen extends Component<any, State> {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      title: params ? params.title : '',
    };
  };

  constructor(props) {
    super(props);
    var competitionId = this.props.navigation.state.params.competitionId;
    this.ref = firebaseApp.firestore().collection('competitions').doc(competitionId);
    this.state = {
      competition: undefined,
      stage: undefined,
      loading: true,
    };
  }

  componentDidMount() {
    this.ref.get()
    .then(doc => {
      const competition = doc.data();
      this.setState({
        competition: competition,
        stage: competition.stages[0],
        loading: false,
     });
    })
    .catch(error => {
      this.setState({loading: false});
    });
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    if (!this.state.competition) {
      return (
          <Text>Pas de données</Text>
      );
    }
    return (
      <View style={styles.container}>
        <CompetitionHeader
          name={this.state.competition.name}
          section={this.props.navigation.state.params.section.title}
          stage={this.state.stage.name}
          logo={this.state.competition.logo}
        />
        <CompetitionTabs
          competition={this.state.competition}
          stage={this.state.stage}
        />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   flexDirection: 'column',
  },
})
