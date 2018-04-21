import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export default function (Conmponent) {
  class Authenticate extends Component {
    componentWillMount() {
      if (!this.props.isAuth) {
        this.context.router.history.push('/');
      }
    }

    render() {
      return (
        <Conmponent {...this.props} />
      );
    }
  }

  Authenticate.contextTypes = {
    router: PropTypes.object.isRequired,
  };

  Authenticate.propTypes = {
    isAuth: PropTypes.bool.isRequired,
  };

  const mapStateToProps = state => ({ isAuth: state.authUser.isAuth });

  return connect(mapStateToProps)(Authenticate);
}
