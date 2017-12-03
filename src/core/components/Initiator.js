import React from 'react';
import { connect } from 'react-redux';

import { userReady } from '../../core/actions';
import firebase from '../../firebase';

class Initiator extends React.Component {
  componentDidMount() {
    const { userReady } = this.props;

    firebase.auth().onAuthStateChanged((user) => {
      userReady(user);
    });
  }

  render() {
    return this.props.children
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  userReady: user => {
    dispatch(userReady(user));
  },
});

export default connect(null, mapDispatchToProps)(Initiator);
