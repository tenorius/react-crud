import React from 'react';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const MyLogin = () => {
  return (
    <div className="login-page">
      <Card bg="dark" text="white">
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="#first" fill>
            <Nav.Item>
              <Nav.Link href="#first">Sign In</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#link">Sign Up</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Card.Title>Entre com os dados do login</Card.Title>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We will never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicChecbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" block>
              Entrar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MyLogin;
