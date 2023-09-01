import React from 'react';
import Cards from "../Card/Card";
import Container from "react-bootstrap/esm/Container";
import { useDispatch } from "react-redux";
import { fetchUpcomingMovies } from '../../store/upcomingMoviesSlice';
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const Upcoming = () => {
  const dispatch = useDispatch();
    const upcomingMovies = useSelector((state) => state.upcoming.upcomingMovies);
    console.log(upcomingMovies)
  
    useEffect(() => {
      dispatch(fetchUpcomingMovies());
    }, [dispatch]);

  return (
    
       <Container className="mt-4">
      <Row xs={1} sm={2} lg={4}>
        {upcomingMovies.map((movie) => (
        <Link key={movie.id} to={`/movie/${movie.id}`}>
          <Col key={movie.id}>
            <Cards
              title={movie.title}
              url={movie.poster_path}
              rating={movie.vote_average}
            />
          </Col>
          </Link>
        ))}
      </Row>
    </Container>
    
  )
}

export default Upcoming;
