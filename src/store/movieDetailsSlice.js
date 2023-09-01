import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const API_KEY = "c45a857c193f6302f2b5061c3b85e743";

export const fetchMovieDetail = createAsyncThunk(
  "movies/moviedetail",
  async (movie_id) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  }
);

export const fetchMovieCastDetails = createAsyncThunk(
  "movies/moviecastdetail",
  async (movie_id) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`
    );
    return response.data.cast;
  }
);



const initialState = {
  movieDetail: [],
  movieCastDetails:[],
};
export const movieDetailsSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchMovieDetail.fulfilled, (state, action) => {
      state.movieDetail = action.payload;
    })
    .addCase(fetchMovieCastDetails.fulfilled, (state, action) => {
      state.movieCastDetails = action.payload;
    });
  },
});
