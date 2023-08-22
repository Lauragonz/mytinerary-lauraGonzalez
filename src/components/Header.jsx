import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="d-flex flex-column justify-content-between align-items-center w-100">
        <div className="d-flex align-items-center">
          <img className="header-logo" src="/localizacion.png" alt="" />
          <h1 className="me-2 header-title">My Tinerary</h1>
        </div>
        <div className="d-flex align-items-center">
          <Navbar expand="md" className="w-auto">
            <Container className="container-toggle">
              <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
              <Navbar.Collapse id="basic-navbar-nav custom-basic-nav">
                <Nav className="ms-auto">
                  <Nav.Link as={Link} to="/" className="custom-link">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/cities" className="custom-link">
                    Cities
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <button className="btn custom-btn"><img className='img-user' src="/user-interface.png" alt="" /></button>
        </div>
      </div>
    </div>
  );
}

export default Header;
