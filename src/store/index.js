import { configureStore } from "@reduxjs/toolkit";
import { moviesSlice } from "./moviesSlice";
import { topRatedMoviesSlice } from "./topRatedMovieSlice";
import { upcomingMoviesSlice } from "./upcomingMoviesSlice";

const store=configureStore({
    reducer:{
        movies:moviesSlice.reducer,
        topRated:topRatedMoviesSlice.reducer,
        upcoming:upcomingMoviesSlice.reducer,
    },
});
export default store;