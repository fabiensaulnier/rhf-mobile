import { StyleSheet } from 'react-native';
import { colors } from '../../../config/styles';

export default StyleSheet.create({
  container: {
    padding: 20
  },
  input:{
    height: 40,
    backgroundColor: 'rgba(225,225,225,0.2)',
    marginBottom: 10,
    padding: 10,
    color: '#fff'
  },
  buttonContainer:{
    backgroundColor: colors.rhfBlueSky,
    paddingVertical: 15
  },
  buttonText:{
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
  },
});
