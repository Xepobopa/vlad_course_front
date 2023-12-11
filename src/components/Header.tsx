import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import logo from "../assets/img/logo.png";
import {ReactComponent as CardSvg} from "../assets/img/card.svg";

type HeaderProps = {
    offcanvasHandleShow: () => void
}


const Header = ({ offcanvasHandleShow }: HeaderProps) => {
    return (
        <Container fluid>
            <Navbar data-bs-theme="light">
                <Container fluid>
                    <Navbar.Brand href={'/'} className="ms-auto">
                        <img src={logo} height={'55px'} width={'110px'} alt={'logo'}/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className={'ms-auto'}>
                                <NavDropdown title="Product List" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/shop/products/graphiccard">
                                        <h6 style={{fontWeight: 600}}>Vacuum cleaner</h6>
                                        <p style={{fontWeight: 300, fontSize: 14}}>Buy new Vacuum cleaner!</p>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/shop/products/cpu">
                                        <h6 style={{fontWeight: 600}}>Iron</h6>
                                        <p style={{fontWeight: 300, fontSize: 14}}>Buy new Iron!</p>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/shop/products/product/ram">
                                        <h6 style={{fontWeight: 600}}>Washing machine</h6>
                                        <p style={{fontWeight: 300, fontSize: 14}}>Buy new Washing machine</p>
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="/shop/products/product">Shop</Nav.Link>
                                <Nav.Link href="/createProduct">Create Product</Nav.Link>
                                <Nav.Link href='#' onClick={() => offcanvasHandleShow()}>
                                    <CardSvg/>
                                </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;