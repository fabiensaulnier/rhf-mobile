import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  View,
} from 'react-native';

class Header extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          source={require('./../../assets/images/logo_rhf_superposition_bleu.png')}
          style={styles.logo}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 150,
  },
  logo: {
    width: '90%',
  },
});

export default Header;
