import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

function Menu() {
    return(
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">FS<span class="input">_</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#bio">Bio</Nav.Link>
                    <Nav.Link href="#projetos">Projetos</Nav.Link>
                    <Nav.Link href="#habilidades">Habilidades</Nav.Link>
                    <Nav.Link href="expeform">Experiências e Formações</Nav.Link>
                    <Nav.Link href="contato">Contato</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Menu