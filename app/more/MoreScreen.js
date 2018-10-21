import React from 'react';
import { ScrollView, View, StyleSheet, Image } from 'react-native';
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

import { colors } from './../config/styles';
import Button from './../components/Button';
import Header from './components/Header';
import Item from './components/Item';

const ICON_SIZE = 25;
const ICON_COLOR = 'white';

export default class MoreScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  iconNews = () => {
    return (
      <FontAwesome name="newspaper-o" size={ICON_SIZE} color="white" />
    );
  }

  iconArchives = () => {
    return (
      <FontAwesome name="archive" size={ICON_SIZE} color="white" />
    );
  }

  iconRhf = () => {
    return (
      <Image
        style={{width: ICON_SIZE, height: ICON_SIZE}}
        source={require('./../assets/images/icon-rhf.png')}
        resizeMode='contain'
      />
    );
  }

  iconFaq = () => {
    return (
      <FontAwesome name="question" size={ICON_SIZE} color="white" />
    );
  }

  iconSettings = () => {
    return (
      <MaterialCommunityIcons name="settings" size={ICON_SIZE} color="white" />
    );
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Header />
        <View style={styles.items} contentContainerStyle={styles.items}>
          <View style={styles.largeDivider} />
          <Item
            title="Actualité"
            navigateTo="Faq"
            icon={this.iconNews()}
          />
          <Item
            title="Archives"
            navigateTo="Faq"
            icon={this.iconArchives()}
          />
          <View style={styles.smallDivider} />
          <Item
            title="Foire aux questions"
            navigateTo="Faq"
            icon={this.iconFaq()}
          />
          <Item
            title="Roller Hockey France"
            navigateTo="Faq"
            icon={this.iconRhf()}
          />
          <View style={styles.smallDivider} />
          <Item
            title="Réglages"
            navigateTo="Settings"
            icon={this.iconSettings()}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.rhfBlue,
    flex: 1,
  },
  items: {
    flexDirection: 'column',
  },
  largeDivider: {
    borderWidth: 5,
    borderColor: colors.rhfBlueSky,
  },
  smallDivider: {
    borderWidth: 0.5,
    borderColor: colors.rhfBlueSky,

  },
})
