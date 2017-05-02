import React from 'react'
import { ScrollView,View, Text } from 'react-native'
import { connect } from 'react-redux'
import { TextInput, Title, Caption, Button, Icon, Divider } from '@shoutem/ui'
import LoginActions from '../Redux/LoginRedux'

// Styles
import styles from './Styles/LoginStyle'

class Login extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  onButtonPress = () => {
    this.props.signUp({
      email: this.state.email,
      password: this.state.password
    })
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <TextInput
            style={styles.field}
            placeholder="Email"
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
          />
          <TextInput
            secureTextEntry={true}
            style={styles.field}
            placeholder="Mot de passe"
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
          />
          <Button onPress={this.onButtonPress}>
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
    signUp: (data) => dispatch(LoginActions.signUpRequest(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
