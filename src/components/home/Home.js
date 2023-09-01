import React from "react";
import Cards from "../Card/Card";
import Container from "react-bootstrap/esm/Container";
import { useDispatch } from "react-redux";
import { fetchPopularMovies } from "../../store/moviesSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useLocation } from "react-router-dom";
import Pagination from "react-bootstrap/Pagination";

const Home = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((state) => state.movies.popularMovies);
  console.log(popularMovies);

  const searchParams = new URLSearchParams(useLocation().search);
  const currentPage = parseInt(searchParams.get("page")) || 1;

  // const [totalPages, setTotalPages] = useState(1);
  const totalPages = useSelector((state) => state.movies.totalPages);
  console.log(totalPages)



  useEffect(() => {
    dispatch(fetchPopularMovies(currentPage));
  }, [dispatch, currentPage]);

  const handlePageChange = (newPage) => {
    const searchParams = new URLSearchParams();
    searchParams.set("page", newPage);
    window.history.replaceState({}, "", `?${searchParams.toString()}`);

    dispatch(fetchPopularMovies(newPage));
  };

  return (
    <Container className="mt-4">
      <Row xs={1} sm={2} lg={4}>
        {popularMovies.map((movie) => (
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
      <Pagination className="justify-content-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <Pagination.Item
            key={index}
            active={index + 1 === currentPage}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </Container>
  );
};

export default Home;
