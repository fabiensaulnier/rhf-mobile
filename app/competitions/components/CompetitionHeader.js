import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from './../../config/styles';
import { firebaseApp } from './../../services/Firebase';

export default class CompetitionHeader extends React.PureComponent {

  logoImage = () => {
    if (this.props.logo) {
      return (
        <Image
          source={{
            uri: this.props.logo,
            cache: 'default',
          }}
          style={styles.logo}
        />
      );
    } else {
      return (
        <Ionicons name="md-trophy" size={140} color="white" />
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.logoImage()}
        <Text style={styles.title}>{this.props.competition}</Text>
        <Text style={styles.description}>{this.props.section} • {this.props.stage}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.rhfBlue,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    height: 140,
    width: 185,
    margin: 10,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
  },
  description: {
    color: 'white',
  }
})
