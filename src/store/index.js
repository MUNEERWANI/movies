import { configureStore } from "@reduxjs/toolkit";
import { moviesSlice } from "./moviesSlice";
import { topRatedMoviesSlice } from "./topRatedMovieSlice";
import { upcomingMoviesSlice } from "./upcomingMoviesSlice";
import { searchedMoviesSlice } from "./searchMoviesSlice";
const store=configureStore({
    reducer:{
        movies:moviesSlice.reducer,
        topRated:topRatedMoviesSlice.reducer,
        upcoming:upcomingMoviesSlice.reducer,
        searched:searchedMoviesSlice.reducer,
    },
});
export default store;