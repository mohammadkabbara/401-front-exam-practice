import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import LogoutButton from '../LogoutBtn'
export class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand>Cocktail App</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Link to="/">Home</Link>
                        <Link to="/favorite">Favorite</Link>
                    </Container>
                    <LogoutButton/>
                </Navbar>
            </div>
        )
    }
}

export default Header
