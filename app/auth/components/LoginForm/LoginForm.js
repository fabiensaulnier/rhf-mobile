import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Button ,StyleSheet } from 'react-native';

import { colors } from '../../../config/styles.js';
import { firebaseApp } from './../../../services/Firebase';
import styles from './styles.js';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  onLoginPress = () => {
    firebaseApp.auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => { }, (error) => { Alert.alert(error.message); });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({email: text})}
          autoCapitalize="none"
          onSubmitEditing={() => this.passwordInput.focus()}
          autoCorrect={false}
          keyboardType='email-address'
          returnKeyType="next"
          placeholder='Adresse e-mail'
          placeholderTextColor={colors.placeholderTextColor}
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({password: text})}
          returnKeyType="go"
          ref={(input)=> this.passwordInput = input}
          placeholder='Mot de passe'
          placeholderTextColor={colors.placeholderTextColor}
          secureTextEntry
          underlineColorAndroid="transparent"
        />
        <TouchableOpacity style={styles.buttonContainer} onPress={this.onLoginPress}>
          <Text style={styles.buttonText}>SE CONNECTER</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
