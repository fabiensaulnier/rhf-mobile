import React from 'react';
import { StyleSheet, Dimensions, Platform, ScrollView } from 'react-native';
import { graphql } from 'react-apollo';
import styled from 'styled-components/native';
import Carousel from 'react-native-snap-carousel';
import _ from 'lodash';
import moment from 'moment';

import { allFuturePollsQuery } from '../queries';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const slideHeight = viewportHeight * 0.4;
const slideWidth = 0.75 * viewportWidth;
const sliderWidth = viewportWidth;
const itemWidth = slideWidth + 10 * 2;

const Facts = styled.ScrollView`background-color: pink;`;

const PollContainer = styled.TouchableOpacity`
  width: ${itemWidth};
  height: 120px;
  padding: 0 10px;
`;

const Poll = styled.TouchableOpacity`
  flex: 1;
  width: ${slideWidth};
  padding: 20px 10px;
  border-radius: 10px;
  background-color: #263799;
  justify-content: center;
`;

const Name = styled.Text`
  color: #fff;
  font-size: 22px;
  letter-spacing: 0.14px;
  font-weight: 600;
  text-align: center;
  background-color: transparent;
  margin-bottom: 10px;
`;

const End = styled.Text`
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: transparent;
`;

class FactsHorizontal extends React.Component {
  _renderFact = ({ item }) => {
    const formattedEnd = moment(item.end).toNow();
    console.log(this.props);

    return (
      <PollContainer>
        <Poll onPress={() => this.props.navigation.navigate('Poll')}>
          <Name>{item.question}</Name>
          <End>End {formattedEnd}</End>
        </Poll>
      </PollContainer>
    );
  };

  render() {
    const { polls, pollsLoading } = this.props;

    if (pollsLoading) return <Polls />;

    return (
      <Facts>
        <Poll onPress={() => this.props.navigation.navigate('Poll')}>
          <Name>{item.question}</Name>
          <End>End {formattedEnd}</End>
        </Poll>
      </Facts>
    );
  }
}

export default FactsHorizontal;
