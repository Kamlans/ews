import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useParams,
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";

import { Navbar, Container, Nav, NavDropdown,Button } from "react-bootstrap";
import { fontFamily } from '@mui/system';

import HomePage from '../../Pages/HomePage';

function _Navbar() {
    return (
        <div>
            
            
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
           
              <Navbar.Brand>
                <NavLink
                  className="items"
                  to="/"
                  style={
                    (({ isActive }) => {
                      return {
                        fontWeight: isActive ? "bold" : "100",
                        color: isActive ? "red" : "white",
                      };
                    },
                    {
                      textDecoration: "none",
                      textAlign: "center",
                      color: "white",
                      fontFamily: "Helvetica",
                    })
                  }
                >
                  ISDR PROJECT
                </NavLink>
              </Navbar.Brand>
           
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                {/* <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link> */}

                <NavDropdown title="STC" id="collasible-nav-dropdown">
                  <NavDropdown.Item >
                   
                      <NavLink
                        className="items"
                        to="/ad"
                        style={
                          (({ isActive }) => {
                            return {
                              fontWeight: isActive ? "bold" : "100",
                              color: isActive ? "red" : "black",
                            };
                          },
                          {
                            textDecoration: "none",
                            textAlign: "center",
                            color: "black",
                            fontFamily: "Helvetica",
                          })
                        }
                      >
                        AD
                      </NavLink>
                    
                  </NavDropdown.Item>
                  <NavDropdown.Item >
                  
                      <NavLink
                        className="items"
                        to="/module"
                        style={
                          (({ isActive }) => {
                            return {
                              fontWeight: isActive ? "bold" : "100",
                              color: isActive ? "red" : "black",
                            };
                          },
                          {
                            textDecoration: "none",
                            textAlign: "center",
                            color: "black",
                            fontFamily: "Helvetica",
                          })
                        }
                      >
                        TDMC
                      </NavLink>
                   
                  </NavDropdown.Item>

                  <NavDropdown.Item href="#action/3.3">
                  
                      <NavLink
                        className="items"
                        to="/module"
                        style={
                          (({ isActive }) => {
                            return {
                              fontWeight: isActive ? "bold" : "100",
                              color: isActive ? "red" : "black",
                            };
                          },
                          {
                            textDecoration: "none",
                            textAlign: "center",
                            color: "black",
                            fontFamily: "Helvetica",
                          })
                        }
                      >
                        CTM
                      </NavLink>
                   
                  </NavDropdown.Item>

                  <NavDropdown.Item href="#action/3.3">
                   
                      <NavLink
                        className="items"
                        to="/module"
                        style={
                          (({ isActive }) => {
                            return {
                              fontWeight: isActive ? "bold" : "100",
                              color: isActive ? "red" : "black",
                            };
                          },
                          {
                            textDecoration: "none",
                            textAlign: "center",
                            color: "black",
                            fontFamily: "Helvetica",
                          })
                        }
                      >
                        EVTM
                      </NavLink>
                   
                  </NavDropdown.Item>

                  <NavDropdown.Item href="#action/3.3">
                   
                      <NavLink
                        className="items"
                        to="/module"
                        style={
                          (({ isActive }) => {
                            return {
                              fontWeight: isActive ? "bold" : "100",
                              color: isActive ? "red" : "black",
                            };
                          },
                          {
                            textDecoration: "none",
                            textAlign: "center",
                            color: "black",
                            fontFamily: "Helvetica",
                          })
                        }
                      >
                        CD
                      </NavLink>
                    
                  </NavDropdown.Item>

                  <NavDropdown.Item href="#action/3.3">
                   
                      <NavLink
                        className="items"
                        to="/module"
                        style={
                          (({ isActive }) => {
                            return {
                              fontWeight: isActive ? "bold" : "100",
                              color: isActive ? "red" : "black",
                            };
                          },
                          {
                            textDecoration: "none",
                            textAlign: "center",
                            color: "black",
                            fontFamily: "Helvetica",
                          })
                        }
                      >
                        PAC
                      </NavLink>
                    
                  </NavDropdown.Item>

                  <NavDropdown.Item href="#action/3.3">
                    
                      <NavLink
                        className="items"
                        to="/module"
                        style={
                          (({ isActive }) => {
                            return {
                              fontWeight: isActive ? "bold" : "100",
                              color: isActive ? "red" : "black",
                            };
                          },
                          {
                            textDecoration: "none",
                            textAlign: "center",
                            color: "black",
                            fontFamily: "Helvetica",
                          })
                        }
                      >
                        ATC
                      </NavLink>
                    
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>

                {/* SH MODULE DROPDOWN STARTS HERE */}

                <NavDropdown title="SH" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                   
                      <NavLink
                        className="items"
                        to="/module"
                        style={
                          (({ isActive }) => {
                            return {
                              fontWeight: isActive ? "bold" : "100",
                              color: isActive ? "red" : "black",
                            };
                          },
                          {
                            textDecoration: "none",
                            textAlign: "center",
                            color: "black",
                            fontFamily: "Helvetica",
                          })
                        }
                      >
                        EVTM
                      </NavLink>
                    
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                  
                      <NavLink
                        className="items"
                        to="/module"
                        style={
                          (({ isActive }) => {
                            return {
                              fontWeight: isActive ? "bold" : "100",
                              color: isActive ? "red" : "black",
                            };
                          },
                          {
                            textDecoration: "none",
                            textAlign: "center",
                            color: "black",
                            fontFamily: "Helvetica",
                          })
                        }
                      >
                        CD
                      </NavLink>
                    
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                  
                      <NavLink
                        className="items"
                        to="/module"
                        style={
                          (({ isActive }) => {
                            return {
                              fontWeight: isActive ? "bold" : "100",
                              color: isActive ? "red" : "black",
                            };
                          },
                          {
                            textDecoration: "none",
                            textAlign: "center",
                            color: "black",
                            fontFamily: "Helvetica",
                          })
                        }
                      >
                        modules
                      </NavLink>
                  
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>

                {/* PMC MODULE CODE STARTS HERE */}

                <NavDropdown title="PMC" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                   
                      <NavLink
                        className="items"
                        to="/module"
                        style={
                          (({ isActive }) => {
                            return {
                              fontWeight: isActive ? "bold" : "100",
                              color: isActive ? "red" : "black",
                            };
                          },
                          {
                            textDecoration: "none",
                            textAlign: "center",
                            color: "black",
                            fontFamily: "Helvetica",
                          })
                        }
                      >
                        modules
                      </NavLink>
                   
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                   
                      <NavLink
                        className="items"
                        to="/module"
                        style={
                          (({ isActive }) => {
                            return {
                              fontWeight: isActive ? "bold" : "100",
                              color: isActive ? "red" : "black",
                            };
                          },
                          {
                            textDecoration: "none",
                            textAlign: "center",
                            color: "black",
                            fontFamily: "Helvetica",
                          })
                        }
                      >
                        modules
                      </NavLink>
                   
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                   
                      <NavLink
                        className="items"
                        to="/module"
                        style={
                          (({ isActive }) => {
                            return {
                              fontWeight: isActive ? "bold" : "100",
                              color: isActive ? "red" : "black",
                            };
                          },
                          {
                            textDecoration: "none",
                            textAlign: "center",
                            color: "black",
                            fontFamily: "Helvetica",
                          })
                        }
                      >
                        modules
                      </NavLink>
                   
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Button variant="light" style={Styles.padStyle}>
                  SIGN IN
                </Button>
                <Button variant="info" style={Styles.padStyle}>
                  SIGN UP
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
}

export default _Navbar


const Styles = {
    padStyle: {
        paddingRight: '10px',
        paddingLeft: "10px",
        marginLeft: "10px",
        marginRight:"10px"
    }
}



