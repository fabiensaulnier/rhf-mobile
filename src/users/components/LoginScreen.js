import React from 'react';
import styled from 'styled-components/native';

import LoginForm from './LoginForm';

const Container = styled.View`
  flex: 1;
  background-color: #0371b2;
  justify-content: center;
`;

class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Identifiez-vous',
  };

  render() {
    return (
      <Container>
        <LoginForm />
      </Container>
    );
  }
}

export default LoginScreen;
