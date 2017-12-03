import React from 'react';
import styled from 'styled-components/native';

import PollsHorizontal from '../../polls/components/PollsHorizontal';
import EventsHorizontal from '../../events/components/EventsHorizontal';
import FactsHorizontal from '../../trips/components/FactsHorizontal';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const Options = styled.View`
  padding: 0 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0 10px;
`;

const Title = styled.Text`
  font-size: 17px;
  font-weight: 600;
  color: #24253d;
  letter-spacing: 0.18px;
`;
const Action = styled.Text``;

const HomeScreen = ({ navigation }) => (
  <Container>
    <Options>
      <Title>Polls</Title>
      <Action>Show More</Action>
    </Options>
    <PollsHorizontal navigation={navigation} />
    <Options>
      <Title>Schedule</Title>
      <Action>Show More</Action>
    </Options>
    <EventsHorizontal navigation={navigation} />
    <Options>
      <Title>Quick facts</Title>
    </Options>
    {/* <FactsHorizontal navigation={navigation} /> */}
  </Container>
);

export default HomeScreen;
