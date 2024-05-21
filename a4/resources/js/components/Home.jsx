import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Routes, Route, Navigate } from 'react-router-dom';
/* import "./Home.css"; */
import axios from 'axios';
import { Context } from '../Context';
import { Carousel } from 'react-bootstrap';

const ContactoHorariosSection = ({ title, content, backgroundColor }) => (
  <div style={{ padding: '20px', backgroundColor, borderRadius: '10px', textAlign: 'center', marginTop: '20px' }}>
    <h2 style={{ color: '#333', marginBottom: '20px' }}>{title}</h2>
    {content.map((item, index) => (
      <p key={index} style={{ color: '#555', margin: '10px 0' }}>{item}</p>
    ))}
  </div>
);

const Home = () => {
  const [products, setProducts] = useState([]);
  const [highlightedProducts, setHighlightedProducts] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost/a4/a4/public/api/ofert');
        //setApiProducts(response.data);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    const destacados = [
      {
        id: 101,
        name: 'Coca-Cola retornable',
        imageUrl: 'https://th.bing.com/th/id/R.7f89c9bcb7f3846813addb3fd30f3673?rik=1nBIutcvAYI%2fhg&riu=http%3a%2f%2f4.bp.blogspot.com%2f-ZBvpgDFJCKc%2fUw6RjrSsw1I%2fAAAAAAAAA9c%2fj9M2rXVAWbs%2fs1600%2fKV%2bPROMO%2bCC%2bFRG-01.jpg&ehk=cQD7CL%2b%2fYrNIX7AxTMd4yAevVwPBNkAnMvdoOKdmeCs%3d&risl=&pid=ImgRaw&r=0',
        description: 'Coca-cola 1Lt $18.00',
        
      },
      {
        id: 102,
        name: 'Papel Higiénico Regio',
        imageUrl: 'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750103662356L.jpg',
        description: 'Papel higiénico Regio 32 rollos $125.00.',
      },
      {
        id: 103,
        name: 'Harina para hotcackes Gamesa',
        imageUrl: 'https://lagranbodega.vteximg.com.br/arquivos/ids/280519-1000-1000/7501000665747.jpg?v=637345720118930000',
        description: 'Harina para hotcakes 700gr $25.00.',
      },
    ];
    fetchData();
    setHighlightedProducts(destacados);
  }, []);
  const slides = [
    {
      id: 1,
      imageUrl: 'http://servinox.com.mx/blog/wp-content/uploads/2015/08/En-La-Tienda-De-Abarrotes.jpg',      caption: 'Todos los productos al mejor precio',
    },
    {
      id: 2,
      imageUrl: 'https://1.bp.blogspot.com/-z0dhbYjfeLc/V1H_2d40idI/AAAAAAAAAso/iaFjNGl27Hcb1TCQ6qv4zc0dhhfeMqLgwCLcB/w1200-h630-p-k-no-nu/venta-de-canastas-navideas-segun-requerimientos-todos-los-productos-son-precio-a-0-0-4.jpg',
      caption: 'Lo indispensable',
    },
    {
      id: 3,
      imageUrl: 'https://www.altonivel.com.mx/assets/images/Actualidad/Internacional/MARZO_2012/marcas-mas-elegidas.jpg',
      caption: 'Las mejores marcas mexicanas',
    },
  ];
  
  
  const ofertasEspeciales = [
    {
      id: 4,
      title: 'Oferta Especial 1',
      description: '¡No te pierdas esta increíble oferta en productos seleccionados!',
    },
    {
      id: 5,
      title: 'Oferta Especial 2',
      description: 'Descuento del 20% en todas las compras superiores a $150. ¡Aprovecha ahora!',
    },
  ];
  const contactoContent = [
    '¡Estamos aquí para ayudarte! Puedes encontrarnos en la siguiente dirección:',
    'Dirección: 16 de Septiembre #202, Puertecito de la Virgen, Aguascalientes, México',
    'Teléfono: (449) 402-3959',
    'Correo Electrónico: info@abarrotesDonaRebe.com',
  ];
  const horariosContent = [
    'Lunes a Viernes: 9:00 AM - 6:00 PM',
    'Sábados: 10:00 AM - 4:00 PM',
    'Domingos: Cerrado',
  ];
  return (
    <div>
      <Carousel interval={2000}>
        {slides.map((slide) => (
          <Carousel.Item key={slide.id}>
            <a href={slide.link} target="_blank" rel="noopener noreferrer">
              <img
                className="d-block w-100"
                src={slide.imageUrl}
                alt={slide.caption}
                style={{ maxHeight: '500px', objectFit: 'cover' }}
              />
            </a>
            <Carousel.Caption style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '10px' }}>
              <h3 style={{ color: 'white' }}>{slide.caption}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <div style={{ padding: '20px', textAlign: 'center', marginTop: '20px' }}>
        <h2>Productos Destacados</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          {highlightedProducts.map((product) => (
            <div key={product.id} style={{ width: '30%', margin: '10px', padding: '15px', border: '1px solid #ddd', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
              <img
                src={product.imageUrl}
                alt={product.name}
                style={{ width: '100%', height: '150px', objectFit: 'cover', marginBottom: '10px' }}
              />
              <h3 style={{ color: '#333' }}>{product.name}</h3>
              <p style={{ color: '#555' }}>{product.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div style={{ padding: '20px', textAlign: 'center', backgroundColor:'#FE3939' }}>
        <h2 style={{ marginBottom: '20px' }}>Ofertas Especiales!!</h2>
        {ofertasEspeciales.map((oferta) => (
          <div key={oferta.id} style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
            <h3 style={{ color: '#333' }}>{oferta.title}</h3>
            <p style={{ color: '#555' }}>{oferta.description}</p>
          </div>
        ))}
      </div>
      <ContactoHorariosSection
        title="Contacto"
        content={contactoContent}
        backgroundColor="#eee"
      />
      <ContactoHorariosSection
        title="Horarios"
        content={horariosContent}
        backgroundColor="#ddd"
      />
    </div>
  );
};
export default Home;