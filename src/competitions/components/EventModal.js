import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: #fff;
`;

const Buttons = styled.View`padding: 10px;`;

const DarkButton = styled.TouchableOpacity`
  background-color: ${props => (props.disabled ? '#acacac' : '#293e5e')};
  padding: 27px 0;
  margin-top: 13px;
`;

const LighButton = styled.TouchableOpacity`
  background-color: #ff7d11;
  padding: 27px 0;
  margin-top: 13px;
`;

const DarkButtonLabel = styled.Text`
  text-align: center;
  font-size: 16px;
  color: #fff;
`;

const ButtonTitle = styled.Text`
  text-align: center;
  font-size: 23px;
  color: #fff;
`;

const ButtonDescription = styled.Text`
  text-align: center;
  font-size: 14px;
  color: #fff;
`;

const EventModal = ({ navigation }) => (
  <Container>
    <Buttons>
      <LighButton onPress={() => navigation.goBack(null)}>
        <ButtonTitle>Event</ButtonTitle>
      </LighButton>
    </Buttons>
  </Container>
);

export default EventModal;
