import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "c45a857c193f6302f2b5061c3b85e743";
export const fetchSearchedMovies = createAsyncThunk(
  "movies/fetchSearchedMovies",
  async (searchTerm) => {
    try{
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=1`
      );
      return response.data.results;
    }catch(error){
      console.error('Not able to fetch',error);
      throw error;
    }
  }
);

const initialState = {
  searchedMovies: [],
};
export const searchedMoviesSlice = createSlice({
  name: "searchedMovies",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSearchedMovies.fulfilled, (state, action) => {
      state.searchedMovies = action.payload;
    });
  },
});
