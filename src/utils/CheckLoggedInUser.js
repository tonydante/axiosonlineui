import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const CheckLoggedInUser = (ComposedComponent) => {
  /**
   *
   */
  class Authenticate extends Component {
    /**
     * @return {*} set user authentication status
     */
    componentWillMount () {
      if ((this.props.isAuthenticated && (this.props.role === 'admin')) ) {
        this.props.history.push('/admin/dashboard');
      } else if (this.props.isAuthenticated && (this.props.role === 'user')) {
        this.props.history.push('/dashboard');
      }
    }

    /**
     *
     * @param {*} nextProps
     * @return {*} props
     */
    componentWillUpdate (nextProps) {
      if ((this.props.isAuthenticated && (this.props.role === 'admin')) ) {
        this.props.history.push('/admin/dashboard');
      } else if (this.props.isAuthenticated && (this.props.role === 'user')) {
        this.props.history.push('/dashboard');
      }
    }

    /**
     * @return {DOM} DOM
     */
    render () {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  Authenticate.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
  };

  const mapStateToProps = state => {
    const isAuthenticated = state.setCurrentUser.isAuthenticated;
    const role = state.setCurrentUser.user.user?.role;
    return {isAuthenticated, role}
  };

  return connect(mapStateToProps, null)(Authenticate);
};
export default CheckLoggedInUser;