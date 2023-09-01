import React from "react";
import Cards from "../Card/Card";
import Container from "react-bootstrap/esm/Container";
import { useDispatch } from "react-redux";
import { fetchSearchedMovies } from "../../store/searchMoviesSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from "react-router";
import { Link } from "react-router-dom";


const SearchedMovies = () => {

    const { movieName } = useParams()
    console.log(movieName)
    const dispatch = useDispatch();
    const searchedMovies = useSelector((state) => state.searched.searchedMovies);
    console.log(searchedMovies)
  
   
    useEffect(() => {
      dispatch(fetchSearchedMovies(movieName));
    }, [dispatch,movieName]);
  return (
    <Container className="mt-4">
      <Row xs={1} sm={2} lg={4}>
        {searchedMovies.map((movie) => (
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

export default SearchedMovies
