import React from "react";
import Cards from "../Card/Card";
import Container from "react-bootstrap/esm/Container";
import { useDispatch } from "react-redux";
import { fetchTopRatedMovies,setCurrentTopRatedPage } from "../../store/topRatedMovieSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useLocation } from "react-router-dom";
import MyPagination from "../Pagination/MyPagination";

const TopRatedMovies = () => {
  const dispatch = useDispatch();

  const topRatedMovies = useSelector((state) => state.topRated.topRatedMovies);
  console.log(topRatedMovies);

  const searchParams = new URLSearchParams(useLocation().search);
  let currentPage = parseInt(searchParams.get("page")) || 1;

  const totalPages = useSelector((state) => state.topRated.totalPages);
  const currentPagee = useSelector((state) => state.topRated.currentPage);
  console.log(currentPagee,totalPages)

  useEffect(() => {
    dispatch(fetchTopRatedMovies());
  }, [dispatch]);

  const handlePageChange = (newPage) => {
    const searchParams = new URLSearchParams();
    searchParams.set("page", newPage);
    window.history.replaceState({}, "", `?${searchParams.toString()}`);
    dispatch(setCurrentTopRatedPage(newPage));
    currentPage = newPage;
    dispatch(fetchTopRatedMovies(newPage));
  };
  const handlePrevClick = () => {
    if (currentPagee > 1) {
      const newPage = currentPagee - 1;

      console.log(newPage, currentPagee, currentPage);
      dispatch(setCurrentTopRatedPage(newPage));
      handlePageChange(newPage);
    }
  };

  const handleNextClick = () => {
    if (currentPagee < totalPages) {
      const newPage = currentPagee + 1;
      console.log(newPage, currentPagee, totalPages);

      dispatch(setCurrentTopRatedPage(newPage));
      handlePageChange(newPage);
    }
  };

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
      <MyPagination
        currentPage={currentPagee}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        onPrevClick={handlePrevClick}
        onNextClick={handleNextClick}
      />
    </Container>
  );
};

export default TopRatedMovies;
