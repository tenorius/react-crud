import { Component } from 'react';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './App.scss';

class App extends Component {
  state = {};

  goTo(route) {
    this.props.history.replace(`/${route}`);
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div className="app">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://jexperts.com.br/img/logo-channel.png"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          {!isAuthenticated() && (
            <Button
              bsStyle="primary"
              className="app__login-btn"
              onClick={this.login.bind(this)}
            >
              Log In
            </Button>
          )}
          {isAuthenticated() && (
            <Button
              bsStyle="primary"
              className="app__login-btn"
              onClick={this.logout.bind(this)}
            >
              Log Out
            </Button>
          )}
        </Navbar>
      </div>
    );
  }
}

export default App;
