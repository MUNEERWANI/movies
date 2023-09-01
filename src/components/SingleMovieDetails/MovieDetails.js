import React from "react";
import Container from "react-bootstrap/esm/Container";
import { useDispatch } from "react-redux";
import { fetchMovieDetail } from "../../store/movieDetailsSlice";
import { fetchMovieCastDetails } from "../../store/movieDetailsSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";
import CardDesign from "./CardDesign";
import CardForCast from "./CardForCast";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MovieDetails = (props) => {
  const dispatch = useDispatch();
  const singleMovieDetail = useSelector((state) => state.detail.movieDetail);
  console.log(singleMovieDetail);
  const { movieId } = useParams();
  console.log(movieId);
  const movieCastDetails = useSelector(
    (state) => state.detail.movieCastDetails
  );
  console.log(movieCastDetails);

  useEffect(() => {
    dispatch(fetchMovieDetail(movieId));
    dispatch(fetchMovieCastDetails(movieId));
  }, [dispatch, movieId]);
  return (
    <Container className="mt-4">
      {singleMovieDetail && (
        <CardDesign
          title={singleMovieDetail.title}
          url={singleMovieDetail.poster_path}
          rating={singleMovieDetail.vote_average}
          overview={singleMovieDetail.overview}
          release={singleMovieDetail.release_date}
          runtime={singleMovieDetail.runtime}
          backdropUrl={singleMovieDetail.backdrop_path}
        />
      )}
      <Row xs={1} sm={3} lg={4}>
        {movieCastDetails.map((cast) => (
          <Col key={cast.id}>
            <CardForCast
              url={cast.profile_path}
              name={cast.original_name}
              character={cast.character}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MovieDetails;
