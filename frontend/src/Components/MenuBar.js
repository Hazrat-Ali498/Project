import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import img8 from "../Images/Navlogo.png";
import { Link } from "react-router-dom";
import { Context } from "./Context";
import { useContext} from "react";
import "../Components/MenuBar.css";



function MenuBar() {
  const { isLogin } = useContext(Context);

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={img8}
              alt=""
              style={{ width: "50px", height: "50px", marginLeft: "-100px" }}
            />
          </Navbar.Brand>
          <Navbar.Brand href="/" style={{ marginLeft: "-50px" }}>
            Elite Haven
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="menubar" to='/'>Home</Link>
              <Link className="menubar" to="/About">About</Link>
              <Link className="menubar" to="/Contact-us">Contact Us</Link>

              <NavDropdown title="Products" id="basic-nav-dropdown">
                <NavDropdown.Item href="/For-Men">For Men</NavDropdown.Item>
                <NavDropdown.Item href="/For-Women">For Women</NavDropdown.Item>
                <NavDropdown.Item href="/For-Kids">For Kids</NavDropdown.Item>
              </NavDropdown>
              {/* <Nav.Link href="/Admin">Admin login</Nav.Link> */}
              <Link className="menubar" to='/Login'>Login</Link>
              {isLogin && <Link className="menubar" to='/Customer'>My Account</Link>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MenuBar;
