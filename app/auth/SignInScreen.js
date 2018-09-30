import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { firebaseApp } from './../services/Firebase';

export default class SignInScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  onLoginPress = () => {
    firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => { }, (error) => { Alert.alert(error.message); });
  }

  onCreateAccountPress = () => {
    this.props.navigation.navigate('SignUp');
  }

  onForgotPasswordPress = () => {
    this.props.navigation.navigate('ForgotPassword');
  }

  render() {
    return (
      <View style={{paddingTop:50, alignItems:"center"}}>

        <Text>Login</Text>

        <TextInput style={{width: 200, height: 40, borderWidth: 1}}
          value={this.state.email}
          onChangeText={(text) => { this.setState({email: text}) }}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <View style={{paddingTop:10}} />

        <TextInput style={{width: 200, height: 40, borderWidth: 1}}
          value={this.state.password}
          onChangeText={(text) => { this.setState({password: text}) }}
          placeholder="Password"
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <Button title="Connexion" onPress={this.onLoginPress} />
        <Button title="Créer un compte" onPress={this.onCreateAccountPress} />
        <Button title="Mot de passe oublié ?" onPress={this.onForgotPasswordPress} />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
