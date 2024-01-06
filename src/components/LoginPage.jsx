import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const LoginPage = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'user' && password === 'password') {
      handleLogin();
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh', width: '400px' }}>
      <div className="login-form p-4" style={{ width: '100%', background: '#fff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <h2 className="text-center mb-4">Login</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="username">
            <Form.Control
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ fontSize: '16px', marginBottom: '15px' }}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ fontSize: '16px', marginBottom: '20px' }}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            Login
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default LoginPage;
