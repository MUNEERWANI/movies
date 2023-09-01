import {Routes, Route } from "react-router";
import TopRatedMoviesPage from "./pages/TopRatedMoviesPage";
import UpComingMoviesPage from "./pages/UpComingMoviesPage";
import SearchedMovies from "./components/SearchedMovies/SearchedMovies";
import MovieDetails from "./components/SingleMovieDetails/MovieDetails";
import HomePage from "./pages/HomePage";
import Header from './components/Navigation/Header'


function App() {
    return (
      <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/top-rated" element={<TopRatedMoviesPage />}/>
        <Route path="/upcoming" element={<UpComingMoviesPage />}/>
        <Route path="/searched/:movieName" element={<SearchedMovies />} />
        <Route path="/movie/:movieId" element={<MovieDetails />} />
      </Routes>
      </div>
      );
}

export default App;
