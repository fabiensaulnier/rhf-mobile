import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Picker } from 'react-native';

import Loading from './../components/Loading';
import CompetitionHeader from './components/CompetitionHeader';
import CompetitionTabsNavigator from './components/CompetitionTabsNavigator';
import CompetitionView from './components/CompetitionView';
import { firebaseApp } from './../services/Firebase';

export default class CompetitionScreen extends Component<any, State> {
  static router = CompetitionTabsNavigator.router;
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
      selectedStage: undefined,
      loading: true,
    };
  }

  componentDidMount() {
    this.ref.get()
    .then(doc => {
      const competition = doc.data();
      this.setState({
        competition: competition,
        selectedStage: competition.stages[0],
        loading: false,
     });
    })
    .catch(error => {
      // this.setState({loading: false}); Sans fin ...
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
          stage={this.state.selectedStage.name}
          logo={this.state.competition.logo}
        />
        <CompetitionTabsNavigator
          navigation={this.props.navigation}
          screenProps={{
            competition: this.state.competition,
            stage: this.state.selectedStage,
          }}
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
