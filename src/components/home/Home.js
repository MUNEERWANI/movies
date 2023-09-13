import React from "react";
import Cards from "../Card/Card";
import Container from "react-bootstrap/esm/Container";
import { useDispatch } from "react-redux";
import { fetchPopularMovies,setCurrentPage  } from "../../store/moviesSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useLocation } from "react-router-dom";
import MyPagination from "../Pagination/MyPagination";
import { useCallback } from "react";

const Home = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((state) => state.movies.popularMovies);
  console.log(popularMovies);

  const searchParams = new URLSearchParams(useLocation().search);
  let currentPage = parseInt(searchParams.get("page")) || 1;
  const totalPages = useSelector((state) => state.movies.totalPages);

  const currentPagee = useSelector((state) => state.movies.currentPage);
  console.log(currentPagee)


  useEffect(() => {
    dispatch(fetchPopularMovies(currentPage));
  }, [dispatch, currentPage]);

  const handlePageChange = useCallback(
    (newPage) => {
      const searchParams = new URLSearchParams();
      searchParams.set("page", newPage);
      window.history.replaceState({}, "", `?${searchParams.toString()}`);
      dispatch(setCurrentPage(newPage));
      currentPage = newPage;
      dispatch(fetchPopularMovies(newPage));
    },
    [dispatch,currentPage]
  );

  const handlePrevClick = () => {
    if (currentPagee > 1) {
      const newPage = currentPagee- 1;

      console.log(newPage,currentPagee,currentPage)
      dispatch(setCurrentPage(newPage));
      handlePageChange(newPage)
      // dispatch(fetchPopularMovies(newPage));
    }
  };

  const handleNextClick = () => {
    if (currentPagee < totalPages) {
      const newPage = currentPagee +1;
      console.log(newPage,currentPagee,totalPages)
 
      dispatch(setCurrentPage(newPage));
      handlePageChange(newPage)

    }
  };
 

  return (
    <Container className="mt-4">
      <Row xs={1} sm={2} lg={4} xxl={4} className="g-3 mb-4">
        {popularMovies.map((movie) => (
          <Col key={movie.id} className="mb-3">
            <Link to={`/movie/${movie.id}`}>
              <Cards
                title={movie.title}
                url={movie.poster_path}
                rating={movie.vote_average}
                className="h-100"
              />
            </Link>
          </Col>
        ))}
      </Row>
      <MyPagination 
      currentPage={currentPagee}
      totalPages={totalPages}
      onPageChange={handlePageChange}
      onPrevClick={handlePrevClick}
      onNextClick={handleNextClick}/>
    </Container>
  );
};

export default Home;
