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

import Button from './../components/Button';
import { firebaseApp } from './../services/Firebase';
import { colors } from './../config/styles';

export default class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordConfirm: "",
    };
  }

  onSignupPress = () => {
    if (this.state.password !== this.state.passwordConfirm) {
      Alert.alert("Les mots de passe ne correspondent pas");
      return;
    }
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => { Alert.alert("Compte créé") }, (error) => { Alert.alert(error.message); });
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
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({password: text})}
          returnKeyType="go"
          placeholder='Mot de passe'
          placeholderTextColor='white'
          secureTextEntry
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({passwordConfirm: text})}
          returnKeyType="go"
          placeholder='Mot de passe (confirmation)'
          placeholderTextColor='white'
          secureTextEntry
          underlineColorAndroid="transparent"
        />
        <Button title="Créer compte" onPress={this.onSignupPress} />
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
