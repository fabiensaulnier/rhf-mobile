
import React from 'react';
import {Text, View, StyleSheet, LayoutAnimation, Platform, Image, TouchableOpacity, Animated} from 'react-native'; //Step 1
import { auth } from 'firebase';

// https://tutorialscapital.com/react-native-dynamically-expand-collapse-slidedown-slideup-view-using-layoutanimation-tutorial/
export default class MoreScreen extends React.Component {
  constructor(props) {
    super(props);

    this.icons = {
      'up': require('./up.png'),
      'down'  : require('./down.png')
    };

    this.state = {
      title: props.title,
      expanded: false,
      onLayoutHeight: 0,
      modifiedHeight: 0,
      animation   : new Animated.Value()
    };
  }

  changeLayout = () =>
  {
    LayoutAnimation.configureNext( LayoutAnimation.Presets.easeInEaseOut );

    if( this.state.expanded === false )
        this.setState({ modifiedHeight: this.state.onLayoutHeight, expanded: true });
    else
        this.setState({ modifiedHeight: 0, expanded: false });
  }

  getViewHeight( height )
  {
      this.setState({ onLayoutHeight: 100 });
  }

  toggle() {
    
  }

  render() {
    let icon = this.icons['down'];

    if(this.state.expanded) {
      icon = this.icons['up'];
    }

    return (
      <View style = { styles.container }>
      <View style = { styles.btnTextHolder }>
          <TouchableOpacity  onPress = { this.changeLayout } style = { styles.Btn }>
          <Image 
            style={styles.buttonImage}
              source={icon}
            ></Image>
              <Text style = { styles.btnText }>{this.state.title}</Text>
          </TouchableOpacity>
          <View style = {{ height: this.state.modifiedHeight, overflow: 'hidden' }}>
              <Text style = { styles.text } onLayout = {( event ) => this.getViewHeight( event.nativeEvent.layout.height )}>
              {this.props.children}
              </Text>
          </View>
      </View>
  </View>
    )
  }
}
  const styles = StyleSheet.create(
  {
      container:
      {
          flex: 1,
          paddingHorizontal: 10,
          justifyContent: 'center',
          paddingTop: (Platform.OS === 'ios') ? 20 : 0
      },
   
      text:
      {
          fontSize: 12,
          color: 'black',
          padding: 10,
          flex: 3,
      },
   
      btnText:
      {
          color: '#002c48',
          fontSize: 15,
          fontWeight: 'bold'
      },

      buttonImage: {
        width: 20,
        height: 10,
        alignSelf: 'flex-end',
        marginTop: 5
      },
   
      titleContainer : {
        flexDirection: 'row',
      },
   
      Btn:
      {
          padding: 10,
          //backgroundColor: 'rgba(0,0,0,0.5)'
      }
  });
