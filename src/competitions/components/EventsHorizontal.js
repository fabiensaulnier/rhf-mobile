import React from 'react';
import { StyleSheet, Dimensions, Platform } from 'react-native';
import { graphql } from 'react-apollo';
import styled from 'styled-components/native';
import Carousel from 'react-native-snap-carousel';
import _ from 'lodash';
import moment from 'moment';

import { allFutureEventsQuery } from '../queries';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const slideHeight = viewportHeight * 0.4;
const slideWidth = 0.75 * viewportWidth;
const sliderWidth = viewportWidth;
const itemWidth = slideWidth + 10 * 2;

const Events = styled.ScrollView`background-color: pink;`;

const EventContainer = styled.View`
  width: ${itemWidth};
  height: 200px;
  padding: 0 10px;
`;

const Event = styled.TouchableOpacity`
  flex: 1;
  width: ${slideWidth};
  padding: 20px 10px;
  border-radius: 10px;
  overflow: hidden;
  justify-content: flex-end;
  background-color: #000;
`;

const Background = styled.Image`
  opacity: 0.8;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Name = styled.Text`
  color: #fff;
  font-size: 18px;
  letter-spacing: 0.14px;
  font-weight: 600;
  text-align: center;
  background-color: transparent;
`;

const Start = styled.Text`
  color: #fff;
  font-size: 14px;
  text-align: center;
  background-color: transparent;
`;

class EventsHorizontal extends React.Component {
  _renderEvent = ({ item }) => {
    const formattedStart = moment(item.start).format('MMM Do - h a');

    return (
      <EventContainer>
        <Event onPress={() => this.props.navigation.navigate('Event')}>
          <Background source={{ uri: item.image }} />
          <Name>{item.name}</Name>
          <Start>{formattedStart}</Start>
        </Event>
      </EventContainer>
    );
  };

  render() {
    const { events, eventsLoading } = this.props;

    if (eventsLoading) return <Events />;

    return (
      <Carousel
        data={events}
        renderItem={this._renderEvent}
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

export default graphql(allFutureEventsQuery, {
  props: ({ ownProps, data: { loading, allEvents, refetch } }) => ({
    eventsLoading: loading,
    events: allEvents,
  }),
})(EventsHorizontal);
