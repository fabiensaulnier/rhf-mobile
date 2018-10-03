import React from 'react';
import { SectionList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';


export default class CompetitionsListItem extends React.PureComponent {
  _onPress = () => {
      this.props.onPressItem(this.props.competitionSelected);
    };

  render() {
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View>
          <Text style={styles.item}>
            {this.props.item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    fontSize: 14,
  },
})
