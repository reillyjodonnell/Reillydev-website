import React from "react";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/NavBar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

import '../CSS Components/NavigationBar.css'
import 'bootstrap/dist/css/bootstrap.css'



export default function NavigationBar() {
  return (
    <div className='Navbar'>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">RO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Projects</Nav.Link>
            <Nav.Link href="#link">Resume</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Resume</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
