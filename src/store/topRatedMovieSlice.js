import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY='c45a857c193f6302f2b5061c3b85e743';
export const fetchTopRatedMovies=createAsyncThunk(
    'movies/fetchTopRatedMovies',
    async ()=>{
        const response=await axios.get(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
        );
        return response.data.results;
    }
);

const initialState={
    topRatedMovies:[]
}
export const topRatedMoviesSlice=createSlice({
    name:'topRatedMovies',
    initialState:initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchTopRatedMovies.fulfilled,(state,action)=>{
            state.topRatedMovies=action.payload;
        })
    }
}
    
)