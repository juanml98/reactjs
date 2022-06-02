import React from 'react';
import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavBar () {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar fixed="top" />
          <Navbar.Brand href="#home">React Market</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <div className='Categorias'>

          <Nav className="justify-content-end" activeKey="/home">
       <Nav.Item>
      <Nav.Link href="/home">Inicio</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">Celulares</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Quiénes somos</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
        Contacto
      </Nav.Link>
    </Nav.Item>
  </Nav>
       </div>   
    </Navbar.Collapse>
    </Container>
    
</Navbar>
    )
}

export default NavBar