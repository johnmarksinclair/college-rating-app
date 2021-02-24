import { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  InputGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

const _Nav = () => {
  const user = useContext(UserContext);
  return (
    <div className="flexnone">
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand as={Link} to="/">
          CourseCompare
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {user ? (
            <>
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/home">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/coursesearch">
                  Courses
                </Nav.Link>
                </Nav>
                <Nav class="nav navbar-nav navbar-center">
                <Form inline>
                <InputGroup>
                  <FormControl placeholder="Search" className="mr-sm-2"/>
                  <InputGroup.Append>
                    <Button variant="success">Search</Button>
                  </InputGroup.Append>
                </InputGroup>
              </Form>
              </Nav>
              <Nav bg="primary" variant="dark">
              <NavDropdown title="My Account" id="basic-nav-dropdown">
                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/" onClick={() => auth.signOut()} >Sign Out</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                
              

            </>
          ) : (
            <Nav className="mr-auto">
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};


export default _Nav;