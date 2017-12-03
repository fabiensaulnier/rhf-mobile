import React from 'react';
import { StyleSheet, Dimensions, Platform } from 'react-native';
import { graphql } from 'react-apollo';
import { NavigationActions } from 'react-navigation';
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

const Polls = styled.ScrollView`background-color: pink;`;

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
  background-color: #0371b2;
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

class PollsHorizontal extends React.Component {
  _renderPoll = ({ item }) => {
    const formattedEnd = moment(item.end).toNow();

    return (
      <PollContainer>
        <Poll
          onPress={() =>
            this.props.navigation.dispatch(
              NavigationActions.navigate({ routeName: 'Poll', params: { poll: item } }),
            )}
        >
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
      <Carousel
        data={polls}
        renderItem={this._renderPoll}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        enableMomentum={true}
        activeSlideAlignment={'start'}
        containerCustomStyle={{ flexGrow: 0 }}
        removeClippedSubviews={false}
      />
    );
  }
}

export default graphql(allFuturePollsQuery, {
  props: ({ ownProps, data: { loading, allPolls, refetch } }) => ({
    pollsLoading: loading,
    polls: allPolls,
  }),
})(PollsHorizontal);
