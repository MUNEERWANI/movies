import React from 'react';
import Cards from "../Card/Card";
import Container from "react-bootstrap/esm/Container";
import { useDispatch } from "react-redux";
import { fetchTopRatedMovies } from '../../store/topRatedMovieSlice';
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
          <Col key={movie.id}>
            <Cards
              title={movie.title}
              url={movie.poster_path}
              rating={movie.vote_average}
            />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default TopRatedMovies