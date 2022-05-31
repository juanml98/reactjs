import React from 'react';
import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavBar () {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar fixed="top" />
          <Navbar.Brand href="#home">React Market</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          
    </Navbar.Collapse>
    </Container>
</Navbar>
    )
}

export default NavBar