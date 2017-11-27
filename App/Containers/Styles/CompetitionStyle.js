import { StyleSheet } from 'react-native'
import { Metrics, Colors, ApplicationStyles } from 'App/Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    padding: 10
  },
  centered: {
    alignItems: 'center'
  }
})
