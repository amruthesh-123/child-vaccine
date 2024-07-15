import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

function Healthhome() {
  return (
    <div>
       {/* <Navbar expand="lg" bg="primary" data-bs-theme="dark" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Child Vaccination</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"> 
          <Nav className="me-auto">
            <Nav.Link href="">Manage Records</Nav.Link>
            <Nav.Link href="">Vaccination Booking</Nav.Link>
            <Nav.Link href="">View Records</Nav.Link>
            <Nav.Link href="/addvaccine">Add Vaccine</Nav.Link>

           
            
          </Nav>

          <Nav>
          
          <a href='/login'  className='btn btn-warning'>LogOut</a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}
    <Dropdown as={ButtonGroup}>
      <Button variant="success">Health Care</Button>

      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

      <Dropdown.Menu>
        <Dropdown.Item href="/addvaccine">Add Vaccine</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Manage Records</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Vaccination Booking</Dropdown.Item>
        <Dropdown.Item href="#/action-3">View Records</Dropdown.Item>

      </Dropdown.Menu>
      <Nav>
          
          <a href='/login'  className='btn btn-warning'>LogOut</a>
          </Nav>
    </Dropdown>
    </div>
  )
}

export default Healthhome
