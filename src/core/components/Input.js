import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  margin-bottom: 40px;
`;
const TextInput = styled.TextInput`
  border-bottom-width: 1px;
  border-bottom-color: #d5d5d5;
  padding-bottom: 15px;
  color: #666;
`;

const Input = ({
  style = {},
  secret = false,
  error,
  placeholder,
  onChangeText,
  value,
  type = 'default',
}) => (
  <Container style={style}>
    <TextInput
      autoCorrect={false}
      secureTextEntry={secret}
      autoCapitalize="none"
      placeholder={placeholder}
      placeholderTextColor={error ? '#fb6668' : '#a5aab4'}
      style={error ? { borderBottomColor: '#fb6668' } : {}}
      onChangeText={onChangeText}
      underlineColorAndroid="transparent"
      value={value}
      keyboardType={type}
    />
  </Container>
);

export default Input;
