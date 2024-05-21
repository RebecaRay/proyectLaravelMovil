import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import swal from 'sweetalert';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { Context } from '../Context';



function EditProduct() {
  const params = useParams();
  const navigate = useNavigate();
  const { token } = useContext(Context);

  const [categories, setCategories] = useState([

  ]);

  const [suppliers, setSuppliers] = useState([

  ]);

  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    stock: '',
    category_name: '',
    supplier_name: '',
    img: '',
  });

  function getbyId() {
    axios.get(`http://localhost/a4/a4/public/api/products/id/${params.id}`,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json'
        }
      }
    ).then(response => {
      setProduct(response.data.data)
      //console.log(product, response.data.data)
    })
  }

  function getCategories() {
    axios.get(
      "http://localhost/a4/a4/public/api/categories/all",
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json'
        }
      }
    ).then(response => {
      setCategories(response.data.data)
    }
    )
  }

  function getSuppliers() {
    axios.get(
      "http://localhost/a4/a4/public/api/suppliers/all",
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json'
        }
      }
    ).then(response => {
      setSuppliers(response.data.data)
    }
    )
  }
  useEffect(() => {
    getCategories(), getSuppliers()
  }, [])


  useEffect(() => {
    getbyId()
  }, [])

  const submitHandler = (e) => {

    const formData = new FormData();
    formData.append("id", params.id)
    formData.append("name", product.name)
    formData.append("price", product.price)
    formData.append("description", product.description)
    formData.append("stock", product.stock)
    formData.append("category_name", product.category_name)
    formData.append("supplier_name", product.supplier_name)
    formData.append("img", product.img)


    axios.post(
      "http://localhost/a4/a4/public/api/products/update",
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
        }
      }
    ).then(response => {
      swal("Actualizado", "Has actualizado el registro", " ");
      //console.log(product, response.data.data)
      navigate('/a4/a4/public/ProductsView');
    }
    )

    e.preventDefault();

    //console.log(product);
  }

  return (
    <div className="container-fluid vh-100 flex-column justify-content-center align-items-center" style={{ paddingTop: '80px', paddingBottom: '20px' }}>
      <div className="row justify-content-center">
        <Form onSubmit={submitHandler} className="col-12 col-md-6 bg-light p-4 rounded">
          <Form.Group className="mb-3">
            <h2 className="mb-4" style={{ fontSize: '1.5rem' }}>Actualiza el producto</h2>

            <Form.Label>Nombre Producto</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder=""
              maxLength={50}
              required
              value={product.name}
              onChange={(e) => {
                const updatedProduct = { ...product, name: e.target.value };
                setProduct(updatedProduct);
              }}
            />

            <Form.Label>Precio</Form.Label>
            <Form.Control
              name="price"
              type="text"
              pattern="^[1-9]*$"
              required
              maxLength={6}
              placeholder=""
              value={product.price}
              onChange={(e) => {
                const updatedProduct = { ...product, price: e.target.value };
                setProduct(updatedProduct);
              }}
              title="Por favor, ingresa solo números o el fomato correspondiente."
            />

            <Form.Label>Descripción</Form.Label>
            <Form.Control
              name="description"
              type="text"
              placeholder=""
              required
              value={product.description}
              onChange={(e) => {
                const updatedProduct = { ...product, description: e.target.value };
                setProduct(updatedProduct);
              }}
            />

            <Form.Label>Stock</Form.Label>
            <Form.Control
              name="stock"
              type="text"
              pattern="^[0-9]*$"
              required
              maxLength={6}
              placeholder=""
              value={product.stock}
              onChange={(e) => {
                const updatedProduct = { ...product, stock: e.target.value };
                setProduct(updatedProduct);
              }}
              title="Por favor, ingresa solo números o el fomato correspondiente."
            />

            <Form.Label>Categoría</Form.Label>
            <Select
              required
              options={categories.map(function (c) {
                return { label: c.name, value: c.id };
              })}
              onChange={(e) => {
                const updatedProduct = { ...product, category_id: e.value };
                setProduct(updatedProduct);
              }}
            />

            <Form.Label>Proveedor</Form.Label>
            <Select
              required
              options={suppliers.map(function (c) {
                return { label: c.name, value: c.id };
              })}
              onChange={(e) => {
                const updatedProduct = { ...product, supplier_id: e.value };
                setProduct(updatedProduct);
              }}
            />

            <Form.Label>Imagen (Ingresa la imagen en formato hipervinculo (link))</Form.Label>
            <Form.Control
              name="img"
              type="text"
              minLength={150}
              required
              placeholder=""
              value={product.img}
              onChange={(e) => {
                const updatedProduct = { ...product, img: e.target.value };
                setProduct(updatedProduct);
              }}
              title="Por favor, ingresa la imagen en formato hipervinculo (link)."
            />
          </Form.Group>

          <div className="text-center">
            <Button variant="primary" type="submit" className="mr-2">
              Submit
            </Button>
            <Link to="/a4/a4/public/ProductsView" className="btn btn-secondary">
              Cancelar
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );


}

export default EditProduct;
