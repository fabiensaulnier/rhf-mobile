import React from 'react'
import { ScrollView,View, Text, Image } from 'react-native'
import { connect } from 'react-redux'
import { TextInput, Title, Caption, Button, Icon, Divider } from '@shoutem/ui'
import AccountActions from '../Redux/AccountRedux'
import { Field, reduxForm } from 'redux-form'
import { Metrics, Images } from '../Themes'

// Styles
import styles from './Styles/LoginStyle'

const renderInput = ({ ...restField, meta: { touched, error, warning }, input: { onChange, restInput }}) => {

  return (
    <View>
      <TextInput style={styles.field} onChangeText={onChange} {...restInput} {...restField} />
    </View>
  )
}

const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.password = 'Required'
  }
  return errors
}

class Login extends React.Component {

  submit = (values) => {
    this.props.signUp(values)
  }

  render () {
    const { handleSubmit, invalid, submitting } = this.props

    return (
      <View style={styles.container}>
        <Image resizeMode='contain' style={styles.logo} source={Images.clearLogo} />
        <View style={styles.form}>
          <Field name="email" placeholder="Email" autoCapitalize="none" autoCorrect={false} component={renderInput} />
          <Field name="password" placeholder="Mot de passe" secureTextEntry={true} component={renderInput} />
          <Button style={styles.button} onPress={handleSubmit(this.submit)} disabled={invalid || submitting}>
            <Text style={styles.buttonText}>Se Connecter</Text>
          </Button>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (data) => dispatch(AccountActions.signUpRequest(data))
  }
}

const connectToRedux = connect(mapStateToProps, mapDispatchToProps)(Login)

export default reduxForm({
  form: 'login',
  validate
})(connectToRedux)
