import style from './navbar.module.scss';
import react from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function NavBar() {
    return (
        <Navbar bg="black" variant="dark" sticky="top"  expand="xs">
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/cv">Cv</Nav.Link>
                        <Nav.Link href="/appPage">Apps</Nav.Link>
                        <NavDropdown title="Stugan" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/dasset">Dasset</NavDropdown.Item>
                            <NavDropdown.Item href="/friggan">Friggan</NavDropdown.Item>
                            <NavDropdown.Item href="/stugan">Livet</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
