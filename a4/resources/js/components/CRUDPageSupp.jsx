import Form from 'react-bootstrap/Form';
import React from "react";
import axios from 'axios';
import { useState } from 'react';
import { useEffect, useContext } from 'react';
import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { Context } from '../Context';
import Pagination from 'react-bootstrap/Pagination';

function CRUDPageSupp() {
  const [csuppliers, setSuppliers] = useState([]);
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

  function getAll() {
    axios.get("http://localhost/a4/a4/public/api/suppliers/all",
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json'
        }
      }
    ).then(response => {
      setSuppliers(response.data.data);
      //console.log(response.data.data);
    })
  }

  function deleteSupplier(id) {
    axios.delete(`http://localhost/a4/a4/public/api/suppliers/id/delete/${id}`,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json'
        }
      }
    ).then(response => {
      getAll()
      swal("Proveedor eliminado", response.data.data);
    })
  }

  useEffect(() => {
    getAll()
  }, [])


  const filteredItems = csuppliers.filter((supplier) =>
    supplier.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    supplier.phoneNum.toString().toLowerCase().includes(searchQuery.toLowerCase()) ||
    supplier.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(csuppliers.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);


  return (
    <div>
      <h2 className="mb-4" style={{ fontSize: '1.5rem', paddingTop: '20px', paddingBottom: '20px' }}>Tabla de Proveedores
        <button style={{ position: "relative", float: "right", top: "20px", right: "30px" }} className='btn btn-primary add-btn'>
          <Link as={Link} style={{ color: 'white', textDecoration: 'none' }} to="/a4/a4/public/SuppliersCreate">Agregar</Link>
        </button>
      </h2>

      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Buscar proveedores"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </Form.Group>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre del Proveedor</th>
            <th>Direccion</th>
            <th>Número teléfonico</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((supplier, index) => (
            <tr key={index}>
              <td>{supplier.name}</td>
              <td>{supplier.address}</td>
              <td>{supplier.phoneNum}</td>
              <td><Link as={Link} to={`/a4/a4/public/SuppliersEdit/${supplier.id}`}><Icon.Pencil /></Link></td>
              <td style={{ cursor: 'pointer' }} onClick={() => deleteSupplier(supplier.id)}><Icon.Trash /></td>
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
export default CRUDPageSupp;