import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from '../Context';

function MenuAdmin() {
    const { token, role, name, id, cartItemCount, logout } = useContext(Context);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        //console.log("Token y rol desde el contexto:", token, role, name, id);
        setLoading(false);
    }, [token, role]);

    if (loading) {
        return <div>Cargando... soy de Menu Admin</div>;
    }

    const handleLogout = () => {
        logout();
    };

    return (
        <>
            <Navbar expand="lg" bg="dark" variant={"dark"} >
                <Container>
                    <Navbar.Brand as={Link} to="/a4/a4/public/">Abarrotes "Doña Rebe"</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {!token && (
                                <>
                                    <Nav.Link as={Link} to="login">Inicia sesión</Nav.Link>
                                    <Nav.Link as={Link} to="regis">Regístrate</Nav.Link>
                                </>
                            )}
                            {token && (
                                <>
                                    <Navbar.Text>¡Hola, {name}!</Navbar.Text>
                                </>
                            )}

                            <Nav.Link as={Link} to="products">Todos los productos</Nav.Link>

                            {role === 1 && (
                                <>
                                    <NavDropdown title="CRUD" id="basic-nav-dropdown">
                                        <NavDropdown.Item as={Link} to="SuppliersView">Proveedores</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="ProductsView">Productos</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="CategoriesView">Categorias</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="UsersView">Usuarios</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="OrdersView">Pedidos</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                    </NavDropdown>
                                </>
                            )}
                            <Nav.Link as={Link} to="cart">Mi carrito ({cartItemCount})</Nav.Link>

                            {token && (
                                <>
                                    <Nav.Link as={Link} to="orders">Mis pedidos</Nav.Link>
                                    <Nav.Link onClick={handleLogout}>Cerrar sesión</Nav.Link>
                                </>
                            )}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <section>
                <Container>
                    <Outlet />
                </Container>
            </section>
        </>
    );
}

export default MenuAdmin;