import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import './Header.css';

function Header() {
  return (
    <div className="d-flex flex-column align-items-center header">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="me-2 header-title">My Tinerary</h1>
        <img className="header-logo" src="/localizacion.png" alt="" />
      </div>

      <Navbar expand="md" className="w-100 mb-2">
        <Container className="container-toggle">
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
          <Navbar.Collapse id="basic-navbar-nav custom-basic-nav">
            <Nav className="me-auto">
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
      <button className="btn custom-btn"><img className='img-user' src="../../public/user-interface.png" alt="" /></button>
    </div>
  );
}

export default Header;
