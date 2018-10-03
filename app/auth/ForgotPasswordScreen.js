import React from 'react';
import {
  Alert,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { NavigationActions } from 'react-navigation';

import { firebaseApp } from './../services/Firebase';
import { colors } from './../config/styles';


export default class ForgotPasswordScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }

  onResetPasswordPress = () => {
    firebaseApp.auth().sendPasswordResetEmail(this.state.email)
      .then(() => {
        Alert.alert("Un e-mail de rénitialisation de mot de passe a été envoyé");
      }, (error) => {
        Alert.alert(error.message);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({email: text})}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType='email-address'
          returnKeyType="go"
          placeholder='Adresse e-mail'
          placeholderTextColor='white'
          underlineColorAndroid="transparent"
        />
        <TouchableOpacity style={styles.buttonContainer} onPress={this.onResetPasswordPress}>
          <Text style={styles.buttonText}>RÉINITIALISER</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input:{
    height: 40,
    backgroundColor: 'lightgrey',
    marginBottom: 10,
    padding: 10,
    color: colors.rhfBlue
  },
  buttonContainer:{
    backgroundColor: colors.rhfBlueSky,
    paddingVertical: 15
  },
  buttonText:{
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
  },
});
