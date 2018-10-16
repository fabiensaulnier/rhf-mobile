import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

const NoData = (props) => {
  return (
      <View style={styles.container}>
          <Ionicons name="md-close-circle" size={140} color="white" />
          <Text> Pas de données </Text>
      </View>
  );
};

NoData.defaultProps = {
  size: 'large',
};

export default NoData;
