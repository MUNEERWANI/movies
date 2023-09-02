import {Routes, Route } from "react-router";
import SearchedMovies from "./components/SearchedMovies/SearchedMovies";
import MovieDetails from "./components/SingleMovieDetails/MovieDetails";
import TopRatedMovies from './components/TopRatedMovies/TopRatedMovies';
import Upcoming from './components/UpcomingMovies/Upcoming';
import Home from './components/Home/Home';
import Header from './components/Navigation/Header'



function App() {
    return (
      <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/top-rated" element={<TopRatedMovies />}/>
        <Route path="/upcoming" element={<Upcoming />}/>
        <Route path="/searched/:movieName" element={<SearchedMovies />} />
        <Route path="/movie/:movieId" element={<MovieDetails />} />
      </Routes>
      </div>
      );
}

export default App;
