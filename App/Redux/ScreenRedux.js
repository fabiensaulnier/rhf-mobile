import { createActions } from 'reduxsauce'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  openScreen: ['screen', 'options'],
  closeSplash: null
})

export const ScreenTypes = Types
export default Creators
