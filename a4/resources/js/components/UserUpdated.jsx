import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import swal from 'sweetalert';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Context } from '../Context';
import { Link } from 'react-router-dom';


function UserUpdated() {
  const params = useParams();
  const navigate = useNavigate();
  const { token } = useContext(Context);

  const [cUser, setUsers] = useState({

    name: "",
    lastnameF: "",
    lastnameM: "",
    address: "",
    email: "",
    password: "",
    c_password: "",
    phoneNum: "",
    payMeth: "Efectivo",
    role: "",
  });

  function getbyId() {
    axios.get(`http://localhost/a4/a4/public/api/users/id/${params.id}`,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json'
        }
      }
    ).then(response => {
      setUsers(response.data.data);
    }).catch(error => {
      console.error(error);
    });
  }

  useEffect(() => {
    getbyId()
  }, [params.id])

  const submitHandler = (e) => {
    e.preventDefault();
    if (cUser.password !== cUser.c_password) {
      swal("Error", "Las contraseñas no coinciden", "error");
      return;
    }

    const formData = new FormData();
    formData.append("id", params.id);
    formData.append("name", cUser.name)
    formData.append("lastnameF", cUser.lastnameF)
    formData.append("lastnameM", cUser.lastnameM)
    formData.append("address", cUser.address)
    formData.append("email", cUser.email)
    formData.append("password", cUser.password)
    formData.append("c_password", cUser.c_password)
    formData.append("phoneNum", cUser.phoneNum)
    formData.append("payMeth", cUser.payMeth)
    formData.append("role", cUser.role)

    if (cUser.password && cUser.password !== cUser.currentPassword) {
      formData.append("password", cUser.password);
      formData.append("c_password", cUser.c_password);
    }

    //console.log("formData:", formData);
    axios.post(
      "http://localhost/a4/a4/public/api/users/update",
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
        }
      }
    ).then(response => {
      swal("Buen trabajo!", "Has actualizado el usuario!");
      navigate('/a4/a4/public/UsersView')
    }).catch(error => {
      console.error(error);
    });
    e.preventDefault();
    //console.log(cUser);
  }

  return (
    <div className="container-fluid vh-100 flex-column justify-content-center align-items-center" style={{ paddingTop: '80px', paddingBottom: '20px' }}>
      <div className="row justify-content-center">
        <Form onSubmit={submitHandler} className="col-12 col-md-6 bg-light p-4 rounded">
          <Form.Group className="mb-3">
            <h2 className="mb-4" style={{ fontSize: '1.5rem' }}>Actualiza el usuario</h2>

            <Form.Label>Nombre</Form.Label>
            <Form.Control name="name" type="text" maxLength={25} required pattern="^[a-zA-Z ]*$" placeholder="" value={cUser.name}
              onChange={(e) => {
                const updatedUser = { ...cUser, name: e.target.value };
                setUsers(updatedUser);
              }}
              title="Por favor, ingresa solo letras y espacios."
            />

            <Form.Label>Apehído Paterno</Form.Label>
            <Form.Control name="lastnameF" type="text" maxLength={25} required pattern="^[a-zA-Z ]*$" placeholder="" value={cUser.lastnameF}
              onChange={(e) => {
                const updatedUser = { ...cUser, lastnameF: e.target.value };
                setUsers(updatedUser);
              }}
              title="Por favor, ingresa solo letras y espacios."
            />

            <Form.Label>Apehído Materno</Form.Label>
            <Form.Control name="lastnameM" type="text" maxLength={25} required pattern="^[a-zA-Z ]*$" placeholder="" value={cUser.lastnameM}
              onChange={(e) => {
                const updatedUser = { ...cUser, lastnameM: e.target.value };
                setUsers(updatedUser);
              }}
              title="Por favor, ingresa solo letras y espacios."
            />

            <Form.Label>Dirección</Form.Label>
            <Form.Control name="address" type="text" maxLength={70} required placeholder="" value={cUser.address}
              onChange={(e) => {
                const updatedUser = { ...cUser, address: e.target.value };
                setUsers(updatedUser);
              }}
            />

            <Form.Label>Correo</Form.Label>
            <Form.Control name="email" type="email" placeholder="" required maxLength={30} value={cUser.email}
              onChange={(e) => {
                const updatedUser = { ...cUser, email: e.target.value };
                setUsers(updatedUser);
              }}
            />

            <Form.Label>Contraseña</Form.Label>
            <Form.Control name="password" type="password" required minLength={8} maxLength={18} placeholder="" value={cUser.password || ''}
              onChange={(e) => {
                const updatedUser = { ...cUser, password: e.target.value };
                setUsers(updatedUser);
              }}
            />

            <Form.Label>Confirma Contraseña</Form.Label>
            <Form.Control name="c_password" type="password" placeholder="" required minLength={8} maxLength={18} value={cUser.c_password || ''}
              onChange={(e) => {
                const updatedUser = { ...cUser, c_password: e.target.value };
                setUsers(updatedUser);
              }}
            />

            <Form.Label>Teléfono</Form.Label>
            <Form.Control name="phoneNum" type="text" required maxLength={10} pattern="^\d{10}$" placeholder="" value={cUser.phoneNum}
              onChange={(e) => {
                const updatedUser = { ...cUser, phoneNum: e.target.value };
                setUsers(updatedUser);
              }}
              title="Por favor, ingresa solo números."
            />

            <Form.Label>Método pago</Form.Label>
            <Form.Control name="payMeth" type="text" placeholder="Efectivo" readOnly value={cUser.payMeth}
              onChange={(e) => {
                const updatedUser = { ...cUser, payMeth: e.target.value };
                setUsers(updatedUser);
              }}
            />

            <Form.Label>Rol (1-Admin, 0-Usuario normal)</Form.Label>
            <Form.Control name="role" type="text" maxLength={1} required pattern="^[0-1]{1}$" placeholder="" value={cUser.role}
              onChange={(e) => {
                const updatedUser = { ...cUser, role: e.target.value };
                setUsers(updatedUser);
              }}
              title="Por favor, ingresa solo los números 1 o 0."
            />

          </Form.Group>

          <div className="text-center">
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Link to="/a4/a4/public/UsersView" className="btn btn-secondary">
              Cancelar
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );

}

export default UserUpdated;