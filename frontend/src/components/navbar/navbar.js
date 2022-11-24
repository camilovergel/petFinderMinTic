import React from "react";
import { Container, Dropdown, DropdownButton, Nav, Navbar, Row } from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUserCircle} from '@fortawesome/free-solid-svg-icons';
import './navbar.css'

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Navbar fixed="relative" id="navbar" bg="light" expand="lg" variant="light">
        <Container>
          {/* <Navbar.Brand href="#home">PefFinder </Navbar.Brand> */}
          <Navbar.Brand href="#home">  </Navbar.Brand> 
          <img src="../images/Pet-Finder.png"
                    alt="Pet Finder logo"
                    width="125"
                    height="75"
                  />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

            </Nav>
            <DropdownButton id="dropdown-basic-button" title="usuario">
                <Dropdown.Header id="dropdown-header">
                  <Row>
                  <FontAwesomeIcon icon={faUserCircle}/>
                  </Row>
                  <Row>
                    #USUARIO#
                  </Row>
                </Dropdown.Header>
                <Dropdown.Divider/>
              <Dropdown.Item href="#/action-1">Cerrar sesion</Dropdown.Item>
              {/*<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>*/}
            </DropdownButton>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
