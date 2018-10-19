import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from './styles';

const Button = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onPress}>
        <Text style={styles.text}>
          {props.title.toUpperCase()}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
