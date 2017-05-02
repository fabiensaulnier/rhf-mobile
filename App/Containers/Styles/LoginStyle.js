import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center'
  },
  logo: {
    width: '50%'
  },
  form: {
    width: '90%'
  },
  field: {
    height: 50,
  },
  button: {
    marginTop: 10,
  },
  buttonText: {
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 17,
    textAlign: 'center'
  }
})
