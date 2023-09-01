import Home from "./components/home/Home";
import Header from "./components/navigation/Header";
import {Routes, Route } from "react-router";
import TopRatedMoviesPage from "./pages/TopRatedMoviesPage";
import UpComingMoviesPage from "./pages/UpComingMoviesPage";
import SearchedMovies from "./components/searched-movies/SearchedMovies";


function App() {
    return (
      <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/top-rated" element={<TopRatedMoviesPage />}/>
        <Route path="/upcoming" element={<UpComingMoviesPage />}/>
        <Route path="/searched" element={<SearchedMovies />} />

      </Routes>
      </div>
      );
}

export default App;
