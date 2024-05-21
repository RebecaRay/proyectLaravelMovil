import React, { useContext } from "react";
import { Table, Button, Alert } from "react-bootstrap";
import { Context } from '../Context';

function CartContent() {
  const { cartItems, updateCartItems, removeProductFromCart, removeFromCart, updateCartItemQuantity, handleCompraClick } = useContext(Context);

  const handleQuantityChange = (productId, newQuantity) => {
    const stock = cartItems.find((item) => item.id === productId).stock;
    const updatedQuantity = Math.min(Math.max(newQuantity, 1), stock);
    updateCartItemQuantity(productId, updatedQuantity);
  };

  const handleRemoveProduct = (productId) => {
    removeFromCart(productId);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.totalPrice || 0), 0);
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cartItems && cartItems.length > 0 ? (
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.totalPrice}$</td>
                  <td>
                    <Button
                      variant="outline-secondary"
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      disabled={item.quantity === 1}
                    >
                      -
                    </Button>{" "}
                    {item.quantity}{" "}
                    <Button
                      variant="outline-secondary"
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      disabled={item.quantity === item.stock}
                    >
                      +
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => handleRemoveProduct(item.id)}
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div>
            <h4>Total a Pagar: ${calculateTotal()}</h4>
            <Button variant="primary" onClick={handleCompraClick}>Realizar Pago</Button>
          </div>
        </div>
      ) : (
        <p>Tu carrito está vacío.</p>
      )}
    </div>
  );
}

export default CartContent;