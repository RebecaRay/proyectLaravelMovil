import Login from "./Login";
import React, { createContext, useState, useEffect, useContext } from "react";
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import SignUp from "./SignUp";
import MenuAdmin from "./MenuAdmin";
import Catalogue from "./Catalogue";
import CartContent from "./CartContent";
import axios from "axios";
import Home from "./Home";
import { ContextProvider } from '../Context';
import { Context } from '../Context';
import CRUDPageSupp from "./CRUDPageSupp";
import CRUD from "./CRUD";
import SuppCreate from "./SuppCreate";
import SuppUpdated from "./SuppUpdated";
import CreateProduct from "./CreateProduct";
import EditProduct from "./EditProduct";
import CRUDPageCat from "./CRUDPageCat";
import CatCreate from "./CatCreate";
import CatUpdate from "./CatUpdate";
import Orders from "./Orders";
import CRUDPageUsers from './CRUDPageUsers';
import UserCreate from "./UserCreate";
import UserUpdated from "./UserUpdated";
import CRUDOrders from "./CRUDOrders";

const PrivateRoute = ({ element, ...props }) => {
  const { token, role } = useContext(Context);

  return token && role === 1 ? (
    element
  ) : (
    <Navigate
      to={token ? "/a4/a4/public/products" : "/a4/a4/public/login"}
      replace
      state={{ from: props.location }}
    />
  );
};

function MainInicial() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);


  const addToCart = ({ product, quantity }) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    const newQuantity = existingItem ? existingItem.quantity + quantity : quantity;

    if (newQuantity <= product.stock) {
      if (existingItem) {
        updateCartItems(product.id, newQuantity);
      } else {
        setCartItems([...cartItems, { ...product, quantity: newQuantity }]);
      }
      setCartItemCount((prevCount) => prevCount + quantity);
    } else {
      // console.log("No puedes agregar más productos, stock agotado");
    }
  };

  return (
    <ContextProvider value={{ cartItemCount, cartItems, addToCart }}>
      <Routes>
        <Route path="/a4/a4/public/" element={<MenuAdmin />}>
          <Route path="/a4/a4/public/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="regis" element={<SignUp />} />
          <Route path="products" element={<Catalogue addToCart={addToCart} />} />
          <Route path="cart" element={<CartContent />} />
          <Route path="orders" element={<Orders />} /> 

          <Route path="SuppliersView" element={<PrivateRoute element={<CRUDPageSupp />} />} />
          <Route path="/a4/a4/public/SuppliersCreate" element={<PrivateRoute element={<SuppCreate />} />} />
          <Route path="/a4/a4/public/SuppliersEdit/:id" element={<PrivateRoute element={<SuppUpdated />} />} />
          <Route path="ProductsView" element={<PrivateRoute element={<CRUD />} />} />
          <Route path="/a4/a4/public/ProductCreate" element={<PrivateRoute element={<CreateProduct />} />} />
          <Route path="/a4/a4/public/ProductEdit/:id" element={<PrivateRoute element={<EditProduct />} />} />
          <Route path="CategoriesView" element={<PrivateRoute element={<CRUDPageCat />} />} />
          <Route path="/a4/a4/public/CategoryCreate" element={<PrivateRoute element={<CatCreate />} />} />
          <Route path="/a4/a4/public/CategoriesEdit/:id" element={<PrivateRoute element={<CatUpdate />} />} />
          <Route path="UsersView" element={<PrivateRoute element={<CRUDPageUsers />} />} />
          <Route path="/a4/a4/public/UserCreate" element={<PrivateRoute element={<UserCreate />} />} />
          <Route path="/a4/a4/public/UserEdit/:id" element={<PrivateRoute element={<UserUpdated />} />} />
          <Route path="OrdersView" element={<PrivateRoute element={<CRUDOrders />} />} />

          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
    </ContextProvider>
  );
}

export default MainInicial;