import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';

export default function GlobalNavbar(props:object) {
  return (
    <Navbar id='navbar-root' bg='light' expand='lg'>
      <Container id='navbar-container'>
        <Navbar.Brand href='/#'>Home</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='/#/resume'>Resume</Nav.Link>
            {/* <Nav.Link href='/#/portofolio'>Portofolio</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
