import RNFirebase from 'react-native-firebase'

const firebase = RNFirebase.initializeApp()

firebase.initializeApp()
const database = firebase.database()

export default database
