import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchSearchedMovies } from '../../store/searchMoviesSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [searchTerm,setSearchTerm]=  useState('');
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const searchHandler=()=>{
    dispatch(fetchSearchedMovies(searchTerm));
    navigate('/searched');
  }
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand as={Link} to='/'>Movies Db</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            navbarScroll
          >
            <Nav.Link as={Link} to='/'>Popular</Nav.Link>
            <Nav.Link as={Link} to='/top-rated'>Top Rated</Nav.Link>
            <Nav.Link as={Link} to='/upcoming'>Upcoming</Nav.Link>
          </Nav>
          <Form className="d-flex align-items-center">
            <Form.Control
              type="search"
              placeholder="Movie Name"
              className="me-2"
              aria-label="Search"
              onChange={(event)=>{setSearchTerm(event.target.value)}}
            />
            <Button variant="outline-success" 
            onClick={searchHandler}>Search</Button>
            

          </Form>
        </Navbar.Collapse>
        <span className="me-5"></span>

      </Container>
    </Navbar>
  );
};

export default Header;
