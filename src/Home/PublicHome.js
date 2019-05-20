import Jumbotron from 'react-bootstrap/Jumbotron';
import React from 'react';

const PublicHome = props => {
  return (
    <Jumbotron>
      <h4> Bem vindo ao Crud da Jexperts</h4>
      <p>
        Para comecar a utilizar a ferramenta, por favor faca o loginYou are not
        logged in! Please{' '}
        <a style={{ cursor: 'pointer', color: 'peru' }} onClick={props.onClick}>
          Log In
        </a>{' '}
        to continue.
      </p>
    </Jumbotron>
  );
};

export default PublicHome;
