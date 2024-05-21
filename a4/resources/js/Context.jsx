import React, { createContext, useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);
  const [name, setName] = useState(null);
  const [id, setID] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  const navigate = useNavigate();

  const setGlobalToken = (value) => {
    setToken(value);
  };

  const setGlobalRole = (value) => {
    setRole(value);
  };

  const setGlobalName = (value) => {
    setName(value);
  };

  const setGlobalId = (value) => {
    setID(value);
  };

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedCart = cartItems.map((item) =>
        item.id === product.id
          ? {
            ...item,
            quantity: (parseInt(item.quantity) + 1).toString(),
            totalPrice: (parseInt(item.quantity) + 1) * parseFloat(item.price),
          }
          : item
      );
      updateCartItems(updatedCart);
    } else {
      const updatedCart = [
        ...cartItems,
        {
          ...product,
          quantity: 1,
          totalPrice: parseFloat(product.price),
        },
      ];
      updateCartItems(updatedCart);
    }
  };

  const updateCartItemQuantity = (productId, newQuantity) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === productId) {
        return {
          ...item,
          quantity: newQuantity,
          totalPrice: newQuantity * parseFloat(item.price),
        };
      }
      return item;
    });
    updateCartItems(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    updateCartItems(updatedCart);
  };

  const updateCartItems = (updatedCart) => {
    if (Array.isArray(updatedCart)) {
      setCartItems(updatedCart);
      updateCartItemCount(updatedCart);
    } else if (updatedCart) {
      const updatedCartArray = [updatedCart];
      setCartItems(updatedCartArray);
      updateCartItemCount(updatedCartArray);
    } else {
      console.error("Error: updateCartItems - updatedCart is not an array", updatedCart);
    }
  };

  const updateCartItemCount = (updatedCart) => {
    if (Array.isArray(updatedCart)) {
      const totalCount = updatedCart.reduce((total, item) => total + item.quantity, 0);
      setCartItemCount(totalCount);
    } else {
      console.error("Error: updateCartItemCount - updatedCart is not an array", updatedCart);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.totalPrice, 0);
  };

  const clearCart = () => {
    setCartItems([]);
    setCartItemCount(0);
  };

  const handleCompraClick = async () => {
    try {
      const total = calculateTotal();

      const compraData = {
        productos: cartItems.map(item => ({
          user_id: id,
          product_id: item.id,
          name: item.name,
          price: item.price,
          total: total,
          quantity: item.quantity,
        })),
      };

      const response = await axios.post('http://localhost/a4/a4/public/api/cart', compraData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
          'Accept': 'application/json',
        },
      });

      //console.log('Compra realizada con éxito:', response.data);
      swal("Tu compra ha sido exitosa!");
      clearCart();
      navigate('/a4/a4/public/orders');
    } catch (error) {
      console.error('Error al realizar la compra:', error);
    }
  }

  const logout = () => {
    const isConfirmed = window.confirm("¿Estás seguro de que quieres cerrar sesión?");

    if (isConfirmed) {
      setGlobalToken(null);
      setGlobalRole(null);
      setGlobalName(null);
      setGlobalId(null);
      updateCartItems([]);
      navigate('/a4/a4/public/login');
    }
  };

  return (
    <Context.Provider
      value={{
        token,
        role,
        name,
        id,
        cartItems,
        cartItemCount,
        updateCartItems,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        setGlobalToken,
        setGlobalRole,
        setGlobalName,
        setGlobalId,
        handleCompraClick,
        logout
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };