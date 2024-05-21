import Form from 'react-bootstrap/Form';
import React from "react";
import axios from 'axios';
import { useState } from 'react';
import { useEffect, useContext } from 'react';
import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination';
import { Context } from '../Context';


function CRUDPageCat() {
  const [Cactegories, setCategories] = useState([]);
  const { token } = useContext(Context);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState('');

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const filteredItems = Cactegories.filter((categories) =>
    categories.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    categories.description.toString().toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(Cactegories.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  function getAll() {
    axios.get("http://localhost/a4/a4/public/api/categories/all",
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json'
        }
      }
    ).then(response => {
      setCategories(response.data.data);
      //console.log(response.data.data);
    })
  }

  function deleteCategories(id) {
    axios.delete(`http://localhost/a4/a4/public/api/categories/id/delete/${id}`,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json'
        }
      }
    ).then(response => {
      getAll()
      swal("Categoría eliminada", response.data.data);
    })
  }
  useEffect(() => {
    getAll()
  }, [])



  return (
    <div>
      <h2 className="mb-4" style={{ fontSize: '1.5rem', paddingTop: '20px', paddingBottom: '20px' }}>Tabla de Categorias
        <button style={{ position: "relative", float: "right", top: "20px", right: "30px" }} className='btn btn-primary add-btn'>
          <Link as={Link} style={{ color: 'white', textDecoration: 'none' }} to="/a4/a4/public/CategoryCreate">Agregar</Link>
        </button>
      </h2>

      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Buscar categorias"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </Form.Group>

      <table className="table table-striped cat-tbl">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((categories, index) => (
            <tr key={index}>
              <td>{categories.name}</td>
              <td>{categories.description}</td>
              <td><Link as={Link} to={`/a4/a4/public/CategoriesEdit/${categories.id}`}><Icon.Pencil /></Link></td>
              <td style={{ cursor: 'pointer' }} onClick={() => deleteCategories(categories.id)}><Icon.Trash /></td>
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

export default CRUDPageCat;