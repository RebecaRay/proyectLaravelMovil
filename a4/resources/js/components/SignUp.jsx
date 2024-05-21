import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import { Context } from '../Context';


function SignUp() {
  const [formValue, setformValue] = useState({
    name: '',
    lastnameF: '',
    lastnameM: '',
    address: '',
    email: '',
    password: '',
    c_password: '',
    phoneNum: '',
    payMeth: 'Efectivo'
  })

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onChange = (e) => {
    e.persist();
    setformValue({ ...formValue, [e.target.name]: e.target.value });
  }

  const [nameTouched, setNameTouched] = useState(false);
  const [fTouched, setFTouched] = useState(false);
  const [mTouched, setMTouched] = useState(false);
  const [aTouched, setATouched] = useState(false);
  const [eTouched, setETouched] = useState(false);
  const [pTouched, setPTouched] = useState(false);
  const [cTouched, setCTouched] = useState(false);
  const [nTouched, setNTouched] = useState(false);
  const [pmTouched, setPMTouched] = useState(false);

  const handleSubmit = (e) => {
    if (e && e.preventDefault()) e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    formData.append("name", formValue.name)
    formData.append("lastnameF", formValue.lastnameF)
    formData.append("lastnameM", formValue.lastnameM)
    formData.append("address", formValue.address)
    formData.append("email", formValue.email)
    formData.append("password", formValue.password)
    formData.append("c_password", formValue.c_password)
    formData.append("phoneNum", formValue.phoneNum)
    formData.append("payMeth", formValue.payMeth)
    axios.post("http://localhost/a4/a4/public/api/register",
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json'
        }
      }
    ).then(response => {
      //console.log('response');
      //console.log(response);
      navigate("/a4/a4/public/login");


    }).catch(error => {
      setIsLoading(false);
      //console.log(error);
      if (error.response && error.response.status === 404) {
        setError('Las contraseñas tienen que coincidir, por favor vuelva a intentarlo');
        setformValue({
          name: '', lastnameF: '', lastnameM: '', address: '',
          email: '', password: '', c_password: '', phoneNum: '', payMeth: 'Efectivo',
        });
      } else {
        //console.log(error);
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
      <h2>Registrate</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form.Group className={`mb-3 ${nameTouched ? 'was-validated' : ''}`} controlId="formBasicName">

        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Ej. Juan Alberto"
          name="name" value={formValue.name} onChange={onChange} required maxLength={20} pattern="^[a-zA-Z ]*$"
          onFocus={() => setNameTouched(true)} // Marca el campo como tocado al enfocarlo
        />
        {nameTouched && (formValue.name && (formValue.name.length === 0 || !/^[a-zA-Z ]+$/.test(formValue.name))) && (
          <Form.Label className='invalid-feedback'>
            {formValue.name.length === 0
              ? 'Por favor ingresa un nombre'
              : 'No se aceptan números en el nombre'}
          </Form.Label>
        )}
      </Form.Group>

      <Form.Group className={`mb-3 ${fTouched ? 'was-validated' : ''}`} controlId="formBasicLastNameF">
        <Form.Label>Apellido Paterno</Form.Label>
        <Form.Control type="text" placeholder="Ej. Macías"
          name="lastnameF" value={formValue.lastnameF} onChange={onChange} required maxLength={10} pattern="^[a-zA-Z ]*$"
          onFocus={() => setFTouched(true)} // Marca el campo como tocado al enfocarlo
        />
        {fTouched && (formValue.lastnameF && (formValue.lastnameF.length === 0 || !/^[a-zA-Z ]+$/.test(formValue.lastnameF))) && (
          <Form.Label className='invalid-feedback'>
            {formValue.lastnameF.length === 0
              ? 'Por favor ingresa tu apellido paterno'
              : 'No se aceptan números en el apellido paterno'}
          </Form.Label>
        )}
      </Form.Group>

      <Form.Group className={`mb-3 ${mTouched ? 'was-validated' : ''}`} controlId="formBasicLastNameM">
        <Form.Label>Apellido Materno</Form.Label>
        <Form.Control type="text" placeholder="Ej. Cruz"
          name="lastnameM" value={formValue.lastnameM} onChange={onChange} required maxLength={10} pattern="^[a-zA-Z ]*$"
          onFocus={() => setMTouched(true)}
        />
        {mTouched && (formValue.lastnameM && (formValue.lastnameM.length === 0 || !/^[a-zA-Z ]+$/.test(formValue.lastnameM))) && (
          <Form.Label className='invalid-feedback'>
            {formValue.lastnameM.length === 0
              ? 'Por favor ingresa tu apellido materno'
              : 'No se aceptan números en el apellido materno'}
          </Form.Label>
        )}
      </Form.Group>

      <Form.Group className={`mb-3 ${aTouched ? 'was-validated' : ''}`} controlId="formBasicAddress">
        <Form.Label>Dirección</Form.Label>
        <Form.Control type="text" placeholder="Ej. Arroz #854 Morelos I"
          name="address" value={formValue.address} onChange={onChange} required maxLength={50}
          onFocus={() => setATouched(true)}
        />
        {aTouched && (formValue.address && formValue.address.length === 0) && (
          <Form.Label className='invalid-feedback'>
            Por favor ingresa una dirección
          </Form.Label>
        )}      </Form.Group>

      <Form.Group className={`mb-3 ${eTouched ? 'was-validated' : ''}`} controlId="formBasicEmail">
        <Form.Label>Correo electronico</Form.Label>
        <Form.Control type="email" placeholder="name@example.com"
          name="email" value={formValue.email} onChange={onChange} required maxLength={50}
          onFocus={() => setETouched(true)}
        />
        {eTouched && (formValue.email && formValue.email.length === 0) && (
          <Form.Label className='invalid-feedback'>
            Por favor ingresa un correo
          </Form.Label>
        )}      </Form.Group>

      <Form.Group className={`mb-3 ${pTouched ? 'was-validated' : ''}`} controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Password"
          name="password" value={formValue.password} onChange={onChange} required minLength={8} maxLength={18}
          onFocus={() => setPTouched(true)}
        />
        {pTouched && (formValue.password && formValue.password.length === 0) && (
          <Form.Label className='invalid-feedback'>
            Por favor ingresa una contraseña
          </Form.Label>
        )}

        {pTouched && (formValue.password && formValue.password.length < 8) && (
          <Form.Label className='invalid-feedback'>
            La contraseña debe tener al menos 8 caracteres
          </Form.Label>
        )}
      </Form.Group>

      <Form.Group className={`mb-3 ${cTouched ? 'was-validated' : ''}`} controlId="formBasicC_Password">
        <Form.Label>Confirmar contraseña</Form.Label>
        <Form.Control type="password" placeholder="Password"
          name="c_password" value={formValue.c_password} onChange={onChange} required minLength={8} maxLength={18}
          onFocus={() => setCTouched(true)}
        />
        {cTouched && (formValue.c_password && formValue.c_password.length < 8) && (
          <Form.Label className='invalid-feedback'>
            La confirmación de la contraseña debe tener al menos 8 caracteres
          </Form.Label>
        )}
      </Form.Group>

      <Form.Group className={`mb-3 ${nTouched ? 'was-validated' : ''}`} controlId="formBasicPhone">
        <Form.Label>Telefono</Form.Label>
        <Form.Control type="text" placeholder="Ej. 4491231212"
          name="phoneNum" value={formValue.phoneNum} onChange={onChange} required minLength={10} maxLength={10} pattern="^\d{10}$"
          onFocus={() => setNTouched(true)}
        />
        {nTouched && (formValue.phoneNum && (formValue.phoneNum.length !== 10 || !/^\d{10}$/.test(formValue.phoneNum))) && (
          <Form.Label className='invalid-feedback'>
            {formValue.phoneNum.length !== 10
              ? 'Ingresa exactamente 10 dígitos'
              : 'Ingresa solo números'}
          </Form.Label>
        )}
      </Form.Group>

      <Form.Group className={`mb-3 ${pmTouched ? 'was-validated' : ''}`} controlId="formBasicPay">
        <Form.Label>Método de pago</Form.Label>
        <Form.Control type="text" placeholder="Efectivo"
          name="payMeth" value={formValue.payMeth} onChange={onChange} required readOnly
          onFocus={() => setPMTouched(true)}
        />
        {formValue.payMeth !== 'Efectivo' && (
          <Form.Label className='invalid-feedback'>El método de pago debe ser 'Efectivo'</Form.Label>
        )}
      </Form.Group>

      <Button variant="primary" style={buttonStyles} className="miboton" type="submit">Crear cuenta</Button>
    </Form>
  );
}

const styles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '153vh',
  marginTop: '5vh',
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

export default SignUp;