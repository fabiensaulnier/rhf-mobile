import React from 'react'
import { ScrollView,View, Text } from 'react-native'
import { connect } from 'react-redux'
import {TextInput, Title, Caption, Button, Icon, Divider } from '@shoutem/ui'
// import Button from 'react-native-button';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/LoginStyle'

class Login extends React.Component {

  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render () {
    return (
      <ScrollView style={styles.container}>
        <View style={{flex: 2, flexDirection: 'column'}}>

        <TextInput
            style={{height: 50, width: '50%'}}
            placeholder={'Email'}
          />
        <TextInput
            secureTextEntry={true}
            style={{height: 50, width: '50%'}}
            placeholder={'Mot de passe'}
          />
          <Button>
  <Text>Se Connecter</Text>
</Button>

        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}
const onButtonPress = () => { Alert.alert('Button has been pressed!');};

export default connect(mapStateToProps, mapDispatchToProps)(Login)
