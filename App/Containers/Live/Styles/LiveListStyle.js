import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from 'App/Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    padding: 10
  }
})
