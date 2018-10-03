import React from 'react';
import {
  SafeAreaView, View, Text, Image, StyleSheet,
  KeyboardAvoidingView , Alert, Animated, Keyboard } from 'react-native';
import { NavigationActions } from 'react-navigation';

import LoginForm from './components/LoginForm';
import { firebaseApp } from './../services/Firebase';
import { colors } from './../config/styles';

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
    this.imageHeight = new Animated.Value(350);
  }

  componentWillMount () {
    this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  keyboardWillShow = (event) => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: 200,
    }).start();
  };

  keyboardWillHide = (event) => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: 350,
    }).start();
  };

  onLoginPress = () => {
    firebaseApp.auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => { }, (error) => { Alert.alert(error.message); });
  }

  onForgotPasswordPress = () => {
    this.props.navigation.navigate('ForgotPassword');
  }

  onCreateAccountPress = () => {
    this.props.navigation.navigate('SignUp');
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior="padding"
          style={styles.container}
        >
          <View style={styles.loginContainer}>
            <Animated.Image
              resizeMode="contain"
              style={[styles.logo, {height: this.imageHeight}]}
              source={require('./../assets/images/icon.png')} />
          </View>

          <View style={styles.formContainer}>
            <LoginForm />
          </View>
        </KeyboardAvoidingView>
        <View style={styles.helpsContainer}>
          <Text style={styles.helpsText}
            onPress={this.onForgotPasswordPress}>Mot de passe oublié ?</Text>
          <Text style={styles.helpsText}
            onPress={this.onCreateAccountPress}>Se créer un compte</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.rhfBlue,
  },
  loginContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    position: 'absolute',
    width: 300,
  },
  helpsContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    padding: 20,
  },
  helpsText: {
    color: 'white',
  }
});
