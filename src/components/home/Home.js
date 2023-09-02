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

  const handlePageChange = (newPage) => {
    const searchParams = new URLSearchParams();
    searchParams.set("page", newPage);
    window.history.replaceState({}, "", `?${searchParams.toString()}`);
    dispatch(setCurrentPage(newPage));
    currentPage = newPage;
    dispatch(fetchPopularMovies(newPage));
  };
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
    <Container className="mt-4" >
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
