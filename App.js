import React from 'react';
import { connect, Provider } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';

import AppNavigator from './src/navigator';
import Initiator from './src/core/components/Initiator';
import { store } from './src/redux';

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = state => ({
  nav: state.nav,
});

const App = connect(mapStateToProps)(AppWithNavigationState);

const Root = () => ((
  <Provider store={store}>
    <Initiator>
      <App />
    </Initiator>
  </Provider>
))

export default Root;
