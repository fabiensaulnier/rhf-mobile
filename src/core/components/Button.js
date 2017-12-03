import React from 'react';
import styled from 'styled-components/native';

const ButtonContainer = styled.TouchableOpacity`
  background-color: ${props => (props.disabled ? '#acacac' : '#FFCE1F')};
  padding: 25px 0;
  margin-top: 13px;
  border-radius: 5px;
`;

const ButtonLabel = styled.Text`
  text-align: center;
  font-size: 22px;
  color: #000;
  font-weight: bold;
`;

const Spinner = styled.ActivityIndicator``;

const Button = ({
  disabled, label, onPress, loading,
}) => (
  <ButtonContainer disabled={disabled} onPress={onPress}>
    {loading ? <Spinner color="#000" /> : <ButtonLabel>{label}</ButtonLabel>}
  </ButtonContainer>
);

export default Button;
