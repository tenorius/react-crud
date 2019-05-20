import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import * as PropTypes from 'prop-types';
import PublicHome from './PublicHome';
import PrivateHome from './PrivateHome';

class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <>
        {isAuthenticated() ? (
          <PrivateHome />
        ) : (
          <PublicHome onClick={this.login.bind(this)} />
        )}
      </>
    );
  }
}

export default Home;
