import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
const { width, height } = Dimensions.get('window');

import SlidingPanel from 'react-native-sliding-up-down-panels';


export default class FaqBisScreen extends React.Component {
  
    static navigationOptions = () => { 
      return {
        title: 'FAQ',
      };
    };
  render() {
    return (
      <View style={styles.container}>                      
        
        <View style={styles.bodyViewStyle}>
          <Text>Hello My World</Text>
        </View>
        
        <SlidingPanel
            headerLayoutHeight = {50}  
            headerLayout = { () =>
                <View style={styles.headerLayoutStyle}>
                  <Text style={styles.commonTextStyle}> </Text>
                </View>
            }
            slidingPanelLayout = { () =>
                <View style={styles.slidingPanelLayoutStyle}>
                  <Text style={styles.commonTextStyle}>The best thing about me is you</Text>
                </View>
            }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bodyViewStyle: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  headerLayoutStyle: {
    width, 
    height: 100, 
    backgroundColor: 'orange', 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  slidingPanelLayoutStyle: {
    width, 
    height, 
    backgroundColor: '#7E52A0', 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  commonTextStyle: {
    color: 'white', 
    fontSize: 18,
  },
});