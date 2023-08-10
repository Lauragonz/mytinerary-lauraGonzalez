import './Footer.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer p-3'>
      <p>My tinerary &copy; Copyright - 2023</p>
      <Navbar expand="md">
        <Container>
          <Navbar.Toggle className="custom-toggler" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto custom-basic-nav">
              <NavDropdown title="GoTo" drop='up' id="basic-nav-dropdown" className="custom-dropdown">
                <NavDropdown.Item>
                  <NavLink to="/" className='custom-link'>
                    Home
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/cities" className='custom-link'>
                    Cities
                  </NavLink>
                </NavDropdown.Item>
                
              </NavDropdown>
              
              
              <Nav.Link href="https://Instagram.com" className='custom-link'>
                Instagram
              </Nav.Link>
              <Nav.Link href="#information" className='custom-link'>
                Information
              </Nav.Link>
              <Nav.Link href="#credits" className='custom-link'>
                Credits
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Footer;
