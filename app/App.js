import React from 'react';
import { ScreenOrientation } from 'expo';
import { Platform, TouchableOpacity } from 'react-native';
import { createStackNavigator, DrawerActions } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';

import Drawer from './navigation/Drawer';

ScreenOrientation.allow(ScreenOrientation.Orientation.ALL);


const MenuImage = ({navigation}) => {
    if(!navigation.state.isDrawerOpen){
        return <MaterialIcons name="menu" size={24} style={{ color: 'white' }} />
    }else{
        return <MaterialIcons name="home" size={24} style={{ color: 'white' }} />
    }
}

const AppNavigator = createStackNavigator(
  {
    Drawer: {
      screen: Drawer,
    }
  },
  {
    initialRouteName: 'Drawer',
    navigationOptions: ({ navigation }) => ({
        headerLeft:
        <TouchableOpacity  onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())} }>
            <MenuImage style="styles.bar" navigation={navigation}/>
        </TouchableOpacity>,
        headerStyle: {
            backgroundColor: '#002c48',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },

    })
   }
);

export default AppNavigator;
