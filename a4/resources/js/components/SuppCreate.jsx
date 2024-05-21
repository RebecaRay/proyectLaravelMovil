import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Context } from '../Context';


function SuppCreate() {
  const navigate = useNavigate();
  const { token } = useContext(Context);

  const [csupplier, setSupplier] = useState({
    name: '',
    address: '',
    phoneNum: '',
  });

  useEffect(() => {

  }, [])

  const [error, setError] = useState('');

  const submitHandler = (e) => {

    const formData = new FormData();
    formData.append("name", csupplier.name)
    formData.append("address", csupplier.address)
    formData.append("phoneNum", csupplier.phoneNum);

    axios.post(
      "http://localhost/a4/a4/public/api/suppliers/create",
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json'
        }
      }
    ).then(response => {
      swal("Proveedor creado");
      //console.log(csupplier, response.data.data)
      navigate('/a4/a4/public/SuppliersView');
    }
    )

    e.preventDefault();
    //console.log(csupplier);

  }

  return (
    <div className="container-fluid vh-100 flex-column justify-content-center align-items-center" style={{ paddingTop: '80px', paddingBottom: '20px' }}>
      <div className="row justify-content-center">
        <Form onSubmit={submitHandler} className="col-12 col-md-6 bg-light p-4 rounded">
          <Form.Group className="mb-3">
            <h2 className="mb-4" style={{ fontSize: '1.5rem' }}>Crea un proveedor</h2>

            <Form.Label>Nombre</Form.Label>
            <Form.Control name="name" type="text" placeholder="" required maxLength={20} pattern="^[a-zA-Z ]*$" value={csupplier.name}
              onChange={(e) => {
                const updatedSuppliers = { ...csupplier, name: e.target.value };
                setSupplier(updatedSuppliers);
              }}
              title="Por favor, ingresa solo letras y espacios."
            />
            <Form.Label>Dirección</Form.Label>
            <Form.Control name="address" type="text" placeholder="" required maxLength={40} value={csupplier.address}
              onChange={(e) => {
                const updatedSuppliers = { ...csupplier, address: e.target.value };
                setSupplier(updatedSuppliers);
              }}
            />
            <Form.Label>Teléfono</Form.Label>
            <Form.Control name="phoneNum" type="text" placeholder="" required maxLength={10} pattern="^\d{10}$" value={csupplier.phoneNum}
              onChange={(e) => {
                const updatedSuppliers = { ...csupplier, phoneNum: e.target.value };
                setSupplier(updatedSuppliers);
              }}
              title="Por favor, ingresa solo números."
            />
          </Form.Group>

          <div className="text-center">
            <Button variant="primary" type="submit" className="mr-2">
              Submit
            </Button>
            <Link to="/a4/a4/public/SuppliersView" className="btn btn-secondary">
              Cancelar
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );

}

export default SuppCreate;