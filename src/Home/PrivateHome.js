import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import './PrivateHome.scss';

const PrivateHome = () => {
  return (
    <>
      <Jumbotron fluid>
        <Container>
          <h1>Faça aqui o gerenciamento dos usuários da Jexperts</h1>
          <span style={{ marginRight: '16px' }}>
            Para criar novos usuários, clique no botão a seguir:
          </span>
          <Button variant="primary" type="submit">
            Criar Usuário
          </Button>
        </Container>
      </Jumbotron>
      <Container>
        <h2>Usuários cadastrados</h2>
        <Table
          className="user-table"
          responsive
          bordered
          hover
          striped
          variant="dark"
        >
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Login</th>
              <th>Senha</th>
              <th>Acoes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Rodrigo Tenorio</td>
              <td>rtenorio88@gmail.com</td>
              <td>(81) 3341-7791</td>
              <td>tenorius</td>
              <td>oi*****</td>
              <td>
                <Row>
                  <Button>
                    <i className="fas fa-trash" />
                  </Button>
                  <Button>
                    <i className="fas fa-trash" />
                  </Button>
                  <Button>
                    <i className="fas fa-trash" />
                  </Button>
                </Row>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
          </tbody>
        </Table>
        ;
      </Container>
    </>
  );
};

export default PrivateHome;
