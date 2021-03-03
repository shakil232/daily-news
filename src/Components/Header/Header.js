
import React from 'react';
import './Header.css';
import { Navbar,Nav, NavLink, Form, FormControl, Button} from 'react-bootstrap'

const Header = () => {
    return (

        <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">Daily-News</Navbar.Brand>
            <Nav className="mr-auto " >
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Sports</Nav.Link>
                <Nav.Link href="#pricing">Global</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-primary">Search</Button>
            </Form>
        </Navbar>



    );
};

export default Header;