import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Context } from '../Context';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { token } = useContext(Context);

  const getUserOrders = async () => {
    try {
      const response = await axios.get('http://localhost/a4/a4/public/api/user/carts', {
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      });
      //console.log(response.data);
      setOrders(response.data.carts);
    } catch (error) {
      console.error('Error al obtener los pedidos:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getUserOrders();
    };

    fetchData();
  }, [token]);

  return (
    <div>
      <h2>Tus Pedidos</h2>
      {Array.isArray(orders) && orders.length === 0 ? (
        <p>No tienes compras aún.</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Id de compra</th>
              <th>Nombre de producto</th>
              <th>Cantidad</th>
              <th>Total</th>
              <th>Fecha y hora de compra</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(orders) && orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.name}</td>
                <td>{order.quantity}</td>
                <td>${order.total}</td>
                <td>{new Date(order.created_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Orders;