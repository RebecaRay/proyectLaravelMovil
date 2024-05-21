import Form from 'react-bootstrap/Form';
import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination';
import "./Products.css";
import { Context } from '../Context';


function CRUD() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState('');
  const { token } = useContext(Context);


  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost/a4/a4/public/api/products/all", {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'
          }
        });
        setProducts(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const deleteProd = async (id) => {
    try {
      await axios.delete(`http://localhost/a4/a4/public/api/products/id/delete/${id}`, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json'
        }
      });
      getAll();
      swal("Eliminado", "Producto eliminado con éxito");
    } catch (error) {
      console.error(error);
    }
  };

  const getAll = async () => {
    try {
      const response = await axios.get("http://localhost/a4/a4/public/api/products/all", {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json'
        }
      });
      setProducts(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const filteredItems = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.price.toString().toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.stock.toString().toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.supplier_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);


  return (
    <div>
      <h2 className="mb-4" style={{ fontSize: '1.5rem', paddingTop: '20px', paddingBottom: '20px' }}>Tabla de Productos
        <button style={{ position: "relative", float: "right", top: "20px", right: "30px" }} className='btn btn-primary add-btn'>
          <Link as={Link} style={{ color: 'white', textDecoration: 'none' }} to="/a4/a4/public/ProductCreate">Agregar</Link>
        </button>
      </h2>

      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Buscar productos"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </Form.Group>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre del Producto</th>
            <th>Price</th>
            <th>Descripción</th>
            <th>Stock</th>
            <th>Categoría</th>
            <th>Proveedor</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td>{product.stock}</td>
              <td>{product.category_name}</td>
              <td>{product.supplier_name}</td>
              <td><Link as={Link} to={`/a4/a4/public/ProductEdit/${product.id}`}><Icon.Pencil /></Link></td>
              <td style={{ cursor: 'pointer' }} onClick={() => deleteProd(product.id)}><Icon.Trash /></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination-container">
        <Pagination>
          {Array.from({ length: Math.ceil(filteredItems.length / itemsPerPage) }, (_, index) => (
            <Pagination.Item
              key={index + 1}
              active={currentPage === index + 1}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
    </div>
  );
}

export default CRUD;
