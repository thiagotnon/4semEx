import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.css';

export default () => {
  return (
    <>
     <Navbar bg="dark" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
         <Link to="./pagina1">Pagina1</Link>
         <Link to="./pagina2">Pagina2</Link>
         <Link to="./carros">Carros</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </>
  );
}