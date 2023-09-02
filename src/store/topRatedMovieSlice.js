import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY='c45a857c193f6302f2b5061c3b85e743';
export const fetchTopRatedMovies=createAsyncThunk(
    'movies/fetchTopRatedMovies',
    async (page=1)=>{
        const response=await axios.get(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`
        );
        return{
            results:response.data.results,
            total_pages: response.data.total_pages,
        } 
    }
);

const initialState={
    topRatedMovies:[],
    currentPage:1,
    totalPages: 0,
}
export const topRatedMoviesSlice=createSlice({
    name:'topRatedMovies',
    initialState:initialState,
    reducers:{
        setCurrentTopRatedPage: (state, action) => {
            state.currentPage = action.payload;
          },
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchTopRatedMovies.fulfilled,(state,action)=>{
            state.topRatedMovies=action.payload.results;
            state.totalPages = action.payload.total_pages;

        })
    }
}
    
)
export const {setCurrentTopRatedPage}=topRatedMoviesSlice.actions;
