import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Admin() {
  return (
    <div>
     <Navbar expand="lg" bg="primary" data-bs-theme="dark" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Child Vaccination</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"> 
          <Nav className="me-auto">
            <Nav.Link href="/">View Helthcare Details</Nav.Link>
            <Nav.Link href="/">View Child Details</Nav.Link>
           
            
          </Nav>

          <Nav>
          
          <a href='/login'  className='btn btn-warning'>LogIn</a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Admin

