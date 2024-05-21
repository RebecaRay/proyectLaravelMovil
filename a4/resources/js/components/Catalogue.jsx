import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner';
import "./Products.css";
import { useNavigate } from 'react-router-dom';
import { Pagination } from 'react-bootstrap';
import { Context } from '../Context';
import { Table, Button, Alert } from "react-bootstrap";


function Catalogue() {
  const [productData, setProductData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);
  const { cartItems, addToCart } = useContext(Context);
  const { token } = useContext(Context);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriesResponse, productsResponse] = await Promise.all([
          axios.get('http://localhost/a4/a4/public/api/category'),
          selectedCategory
            ? axios.get(`http://localhost/a4/a4/public/api/category/${selectedCategory}`)
            : axios.get('http://localhost/a4/a4/public/api/product_index'),
        ]);

        setCategories(categoriesResponse.data);
        setProductData(productsResponse.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [selectedCategory]);

  const buyProducts = async (product) => {
    const isAuthenticated = token !== null;
    if (isAuthenticated && !product.addedToCart) {
      const updatedProductData = productData.map((p) =>
        p.id === product.id ? { ...p, addedToCart: true } : p
      );
      setProductData(updatedProductData);
      await addToCart(product);
      setShowAlert(true);
    } else if (!isAuthenticated) {
      navigate('/a4/a4/public/login');
    }
  };

  const filteredProducts = productData.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <div className="container">

      <div className="select-container">
        <select className="select-style" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">Todos los productos</option>
          {Array.isArray(categories) && categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>

        <input type="text" className="search-input" placeholder="Buscar productos" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      </div>

      <ul className="product-list">
        {currentProducts.map((product) => (
          <div className='card' key={product.id}>
            <img className="" src={product.img} alt='img-product-card' />
            <h3>{product.name}</h3>
            <h4>{product.price}$</h4>
            <h5>Stock: {product.stock}</h5>
            {!product.addedToCart && product.stock > 0 ? (
              <Button variant="primary" onClick={() => buyProducts(product)}>
                Agregar al carrito
              </Button>
            ) : (
              <p>{product.addedToCart ? 'Producto añadido al carrito' : 'Sin existencias'}</p>
            )}
          </div>
        ))}
      </ul>
      <div className="pagination-container">
        <Pagination>
          {Array.from({ length: totalPages }, (_, index) => (
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

export default Catalogue;
