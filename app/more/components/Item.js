import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

class Item extends React.Component {
  constructor (props) {
    super(props);
  }

  onPress = () => {
    this.props.navigation.navigate(this.props.navigateTo);
  };

  render() {
    return (
      <TouchableOpacity onPress={this.onPress} style={styles.container}>
        <View style={styles.iconContainer}>
          {this.props.icon}
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
    lineHeight: 30,
  }
});

export default withNavigation(Item);
