import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import swal from 'sweetalert';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Context } from '../Context';


function CatUpdate() {
  const params = useParams();
  const navigate = useNavigate();
  const { token } = useContext(Context);

  const [Cactegories, setCategories] = useState({

    name: '',
    description: '',
  });

  function getbyId() {
    axios.get(`http://localhost/a4/a4/public/api/categories/id/${params.id}`,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json'
        }
      }
    ).then(response => {
      setCategories(response.data.data)
      //console.log(Cactegories,response.data.data)
    })
      .catch();

  }

  useEffect(() => {
    getbyId()
  }, [])

  const submitHandler = (e) => {
    //console.log("Cactegories:", Cactegories);

    const formData = new FormData();
    formData.append("id", params.id);
    formData.append("name", Cactegories.name);
    formData.append("description", Cactegories.description);

    //console.log("formData:", formData);
    axios.post(
      "http://localhost/a4/a4/public/api/categories/update",
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',

        }
      }
    ).then(response => {
      swal("Has actualizado el registro!");
      navigate('/a4/a4/public/CategoriesView')
    })
    e.preventDefault();
    //console.log(Cactegories);
  }

  return (
    <div className="container-fluid vh-100 flex-column justify-content-center align-items-center" style={{ paddingTop: '80px', paddingBottom: '20px' }}>
      <div className="row justify-content-center">
        <Form onSubmit={submitHandler} className="col-12 col-md-6 bg-light p-4 rounded form-cat">
          <Form.Group className="mb-3">
            <h2 className="mb-4" style={{ fontSize: '1.5rem' }}>Actualiza la categoría</h2>

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
            <Button variant="primary" type="submit">
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

export default CatUpdate;