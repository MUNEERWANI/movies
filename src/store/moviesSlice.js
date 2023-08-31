
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios'

const API_KEY='c45a857c193f6302f2b5061c3b85e743';

export const fetchPopularMovies=createAsyncThunk(
    'movies/fetchPopularMovies',
    async ()=>{
    const response =await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    return response.data.results;
});

const initialState={
    popularMovies:[],
    movieDetails:[],
}
export  const moviesSlice=createSlice({
    name:'movies',
    initialState:initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchPopularMovies.fulfilled,(state,action)=>{
            state.popularMovies=action.payload;
        })
    }

})

