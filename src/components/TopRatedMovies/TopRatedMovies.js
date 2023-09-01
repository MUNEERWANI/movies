import React from 'react';
import Cards from "../Card/Card";
import Container from "react-bootstrap/esm/Container";
import { useDispatch } from "react-redux";
import { fetchTopRatedMovies } from '../../store/topRatedMovieSlice';
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const TopRatedMovies = () => {
    const dispatch = useDispatch();
    const topRatedMovies = useSelector((state) => state.topRated.topRatedMovies);
    console.log(topRatedMovies);
    useEffect(() => {
      dispatch(fetchTopRatedMovies());
    }, [dispatch]);

  return (
    <Container className="mt-4">
      <Row xs={1} sm={2} lg={4}>
        {topRatedMovies.map((movie) => (
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

export default TopRatedMovies
