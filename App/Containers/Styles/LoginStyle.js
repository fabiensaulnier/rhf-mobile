import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background
  },
  content: {
    flex: 2,
    flexDirection: 'column'
  },
  field: {
    height: 50,
    width: '50%'
  }
})
