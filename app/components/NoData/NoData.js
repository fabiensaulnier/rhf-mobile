import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import styles from './styles';

export default class NoData extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let imageSource = this.props.imageSource? this.props.imageSource: '/test.png';
        return (
            <View style={styles.container}>
                <Image source={{uri: imageSource }} />
                <Text>{this.props.message ? this.props.message : 'Pas de Données' }</Text>
            </View>
        )
    }

}

NoData.defaultProps = {
    size: 'large',
};

