import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import { Context } from '../Context';

function Login() {
  const [formValue, setformValue] = useState({
    email: '',
    password: ''
  })

  const context = useContext(Context);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordText, setShowPasswordText] = useState('Mostrar Contraseña');

  const onChange = (e) => {
    e.persist();
    setformValue({ ...formValue, [e.target.name]: e.target.value });
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    setShowPasswordText(showPassword ? 'Mostrar Contraseña' : 'Ocultar Contraseña');
  };

  const handleSubmit = (e) => {
    if (e && e.preventDefault()) e.preventDefault(); 
    setIsLoading(true);
    const formData = new FormData();
    formData.append("email", formValue.email)
    formData.append("password", formValue.password)
    axios.post("http://localhost/a4/a4/public/api/login",
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data', 'Accept': 'application/json'
        }
      }
    ).then(response => {
      setIsLoading(false);
      if (response && response) {
        context.setGlobalToken(response.data.token);
        context.setGlobalRole(response.data.role);
        context.setGlobalName(response.data.name);
        context.setGlobalId(response.data.id);
        navigate("/a4/a4/public/products");
      } else {
        setError('Error en la respuesta del servidor');
      }
    }).catch(error => {
      setIsLoading(false);
      if (error.response && error.response.status === 404) {
        setError('El usuario no existe, por favor vuele a intentarlo');
        setformValue({ email: '', password: '' });
      } else {
        setError('Error en el servidor. Consulta la consola para más detalles.');
        console.log(error);
      }
    });
  };

  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <Form onSubmit={handleSubmit} style={styles} className='needs-validation'>
      <h2>Inicia sesión</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form.Group className="mb-3 was-validated" controlId="exampleForm.ControlInput1">
        <Form.Label>Correo electronico</Form.Label>
        <Form.Control type="email" placeholder="name@example.com"
          name="email" value={formValue.email} onChange={onChange} required className='form-control' />
        <Form.Label className='invalid-feedback'>Por favor ingresa tu correo electronico</Form.Label>
      </Form.Group>

      <Form.Group className="mb-3 was-validated" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type={showPassword ? 'text' : 'password'} placeholder="Password"
          name="password" value={formValue.password} required onChange={onChange} />
        <Form.Label className='invalid-feedback'>Por favor, ingresa tu contraseña</Form.Label>
        <Button variant="outline-secondary" className="mb-3" onClick={togglePasswordVisibility}>
          {showPasswordText}
        </Button>
      </Form.Group>

      <Button variant="primary" style={buttonStyles} className="container mb-3" type="submit">
        Iniciar sesión
      </Button>
    </Form>
  );
}

const styles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '90vh',
};

const buttonStyles = {
  width: '250px',
  height: '50px',
  backgroundColor: '#4CAF50',
  color: 'white',
  borderRadius: '10px',
  boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.9)',
  transition: 'background-color 1s',
  cursor: 'pointer',
  border: 'none',
  outline: 'none',
};

export default Login;