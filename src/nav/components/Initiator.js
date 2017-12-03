import React from 'react';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { AppLoading } from 'expo';

import { userReady } from '../../core/actions';
import { currentUserQuery } from '../../users/queries';

class Initiator extends React.Component {
  componentWillReceiveProps({ userLoading, user, isUserReady }) {
    // if (!userLoading && !isUserReady) this.props.userReady(user);
  }

  render() {
    const { isUserReady, children } = this.props;

    console.log(this.props);

    // return isUserReady ? children : <AppLoading />;
    return children;
  }
}

const mapStateToProps = state => ({
  isUserReady: state.core.isUserReady,
});

const mapDispatchToProps = dispatch => ({
  userReady: (user) => {
    dispatch(userReady(user));
  },
});

const InitiatorWithApollo = graphql(currentUserQuery, {
  props: ({ data: { loading, user } }) => ({
    userLoading: loading,
    user,
  }),
})(Initiator);

export default connect(mapStateToProps, mapDispatchToProps)(InitiatorWithApollo);
