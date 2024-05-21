import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Context } from '../Context';


function CatCreate() {
  const navigate = useNavigate(); 
  const { token } = useContext(Context);

  const [Cactegories, setCategories] = useState({
    name: '',
    description: '',
  });

  useEffect(() => {

  }, [])

  const submitHandler = (e) => {

    const formData = new FormData();
    formData.append("name", Cactegories.name)
    formData.append("description", Cactegories.description)

    axios.post(
      "http://localhost/a4/a4/public/api/categories/create",
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json'
        }
      }
    ).then(response => {
      swal("Categoría creada");
      //console.log(Cactegories,response.data.data)
      navigate('/a4/a4/public/CategoriesView');
    }
    )

    e.preventDefault();
    //console.log(Cactegories);

  }

  return (
    <div className="container-fluid vh-100 flex-column justify-content-center align-items-center" style={{ paddingTop: '80px', paddingBottom: '20px' }}>
      <div className="row justify-content-center">
        <Form onSubmit={submitHandler} className="col-12 col-md-6 bg-light p-4 rounded">
          <Form.Group className="mb-3">
            <h2 className="mb-4" style={{ fontSize: '1.5rem' }}>Crear una Categoría</h2>

            <Form.Label>Nombre Categoría</Form.Label>
            <Form.Control
              name="name"
              type="text"
              required
              maxLength={15}
              placeholder=""
              value={Cactegories.name}
              onChange={(e) => {
                const updatedCategory = { ...Cactegories, name: e.target.value };
                setCategories(updatedCategory);
              }}
            />
            
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              name="description"
              type="text"
              required
              placeholder=""
              value={Cactegories.description}
              onChange={(e) => {
                const updatedCategory = { ...Cactegories, description: e.target.value };
                setCategories(updatedCategory);
              }}
            />
          </Form.Group>

          <div className="text-center">
            <Button variant="primary" type="submit" className="mr-2">
              Submit
            </Button>
            <Link to="/a4/a4/public/CategoriesView" className="btn btn-secondary">
              Cancelar
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );

}

export default CatCreate;