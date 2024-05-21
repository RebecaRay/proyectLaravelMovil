import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Context } from '../Context';

function CRUDOrders() {
    const [orders, setOrders] = useState([]);
    const [searchOrderId, setSearchOrderId] = useState('');
    const [searchUserId, setSearchUserId] = useState('');
    const { token } = useContext(Context);

    const getAllOrders = () => {
        axios.get("http://localhost/a4/a4/public/api/carts/all", {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json'
            }
        })
            .then(response => {
                const ordersArray = response.data;
                setOrders(ordersArray);
            })
            .catch(error => {
                console.error('Error al obtener los pedidos:', error);
            });
    };

    useEffect(() => {
        getAllOrders();
    }, []);

    const filteredOrders = orders.filter(order => {
        const orderIdLower = searchOrderId.toLowerCase();
        const userIdLower = searchUserId.toLowerCase();

        return (
            (orderIdLower === '' || order.id.toString().includes(orderIdLower)) &&
            (userIdLower === '' || order.user_id.toString().includes(userIdLower))
        );
    });

    return (
        <div>
            <h2 className="mb-4" style={{ fontSize: '1.5rem', paddingTop: '20px', paddingBottom: '20px' }}>
                Tabla de Pedidos
            </h2>

            <div className="mb-3">
                <label htmlFor="searchOrderId" className="form-label">Buscar por ID de Compra:</label>
                <input
                    type="text"
                    className="form-control"
                    id="searchOrderId"
                    value={searchOrderId}
                    onChange={(e) => setSearchOrderId(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="searchUserId" className="form-label">Buscar por ID de Usuario:</label>
                <input
                    type="text"
                    className="form-control"
                    id="searchUserId"
                    value={searchUserId}
                    onChange={(e) => setSearchUserId(e.target.value)}
                />
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>ID de Compra</th>
                        <th>ID de Usuario</th>
                        <th>Nombre de producto</th>
                        <th>Cantidad de productos</th>
                        <th>Precio del producto</th>
                        <th>Fecha y hora de compra</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredOrders.length > 0 ? (
                        filteredOrders.map((order) => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.user_id}</td>
                                <td>{order.name}</td>
                                <td>{order.quantity}</td>
                                <td>{order.price}</td>
                                <td>{new Date(order.created_at).toLocaleString()}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">No hay órdenes disponibles.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default CRUDOrders;