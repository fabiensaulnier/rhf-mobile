import React from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';

import Button from '../../core/components/Button';
import { login } from '../actions';

const Container = styled.View`padding: 20px;`;

const Input = styled.TextInput`
  background-color: #fff;
  padding: 25px 15px;
  margin-bottom: 20px;
  border-radius: 5px;
  color: #000;
`;

const Error = styled.Text`
  text-align: center;
  font-size: 15px;
  color: #ff5f5f;
  margin-top: 10px;
  background-color: transparent;
`;

const Actions = styled.View``;

class LoginForm extends React.Component {
  state = {
    email: '',
    password: '',
  };

  onSubmit = () => {
    const { email, password } = this.state;

    if (email.length > 0 && password.length > 0) {
      this.props.login({
        email,
        password,
      });
    }
  };

  render() {
    const { loginForm } = this.props;
    return (
      <Container>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Adresse mail"
          placeholderTextColor="#ccc"
          underlineColorAndroid="transparent"
          onChangeText={value => this.setState({ email: value })}
          value={this.state.email}
          keyboardType="email-address"
        />
        <Input
          autoCorrect={false}
          secureTextEntry={true}
          autoCapitalize="none"
          placeholder="Mot de passe"
          placeholderTextColor="#ccc"
          underlineColorAndroid="transparent"
          onChangeText={value => this.setState({ password: value })}
          value={this.state.password}
        />
        <Actions>
          <Button
            label="Login"
            onPress={this.onSubmit}
            loading={loginForm.loading}
            disabled={loginForm.loading}
          />
          {loginForm.error && <Error>Une erreur est survenue</Error>}
        </Actions>
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  loginForm: state.users.loginForm,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: user => {
    dispatch(login(user));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
