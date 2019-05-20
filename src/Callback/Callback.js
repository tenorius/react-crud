import React, { Component } from 'react';
import loading from './loading.svg';
import './Callback.scss';

class Callback extends Component {
  render() {
    return (
      <div className="callback-page">
        <img src={loading} alt="loading" />
      </div>
    );
  }
}

export default Callback;
