import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Loading from './../components/Loading';
import NoData from './../components/NoData';
import CompetitionHeader from './components/CompetitionHeader';
import CompetitionTabsNavigator from './components/CompetitionTabsNavigator';
import getCompetition from './../services/RhfDb';
import getStage from './../services/RhfApi';

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
    this.competitionId = this.props.navigation.state.params.competitionId;
    this.section = this.props.navigation.state.params.section;
    this.state = {
      competition: undefined,
      stageApi: undefined,
      stageDb: undefined,
      loading: true,
    };
  }

  async componentDidMount() {
    try {
      const competition = await getCompetition(this.competitionId);
      this.setState({ stageDb: competition.stages[0], });
      const stageApi = await getStage(this.state.stageDb.ffrsId);
      this.setState({
        competition: competition,
        stageApi: stageApi,
        loading: false,
      });
    } catch (error) {
      console.log(error);
      // TODO nav back ? alert ?
    }
    this.setState({ loading: false, });
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    if (!this.state.competition) {
      return <NoData />;
    }
    return (
      <View style={styles.container}>
        <CompetitionHeader
          competition={this.state.competition.name}
          section={this.section.title}
          stage={this.state.stageDb.name}
          logo={this.state.competition.logo}
        />
        <CompetitionTabsNavigator
          navigation={this.props.navigation}
          screenProps={{
            competition: this.state.competition,
            stage: this.state.stageApi,
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
  logo: {
    height: 140,
    width: 185,
    margin: 10,
  },
})
