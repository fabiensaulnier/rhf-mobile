import React from 'react';
import { connect, Provider } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';

import AppNavigator from './src/navigator';
import { store } from './src/redux';

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = state => ({
  nav: state.nav,
});

const App = connect(mapStateToProps)(AppWithNavigationState);

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
