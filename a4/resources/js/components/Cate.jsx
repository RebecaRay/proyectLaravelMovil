import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner';
import "./Products.css";
import { useNavigate } from 'react-router-dom';
import { Pagination } from 'react-bootstrap';
import { Context } from '../Context';


function Cate({ addToCart }) {
    const [productData, setProductData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [showAlert, setShowAlert] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(6);

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

    const buyProducts = (product) => {
        // if (user === null) {
        //     setShowAlert(true);
        //     navigate('/a4/a4/public/login');
        // } else {
        //     addToCart({ product, quantity: 1 });
        // }
    };

    // Filtrar productos según la búsqueda
    const filteredProducts = productData.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );


    // Calcular la cantidad total de páginas
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    // Calcular el índice del último producto en la página actual
    const indexOfLastProduct = currentPage * productsPerPage;
    // Calcular el índice del primer producto en la página actual
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    // Obtener los productos de la página actual
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    // Cambiar de página
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
                        <button onClick={() => buyProducts(product)}>Agregar al carrito</button>
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

export default Cate;
