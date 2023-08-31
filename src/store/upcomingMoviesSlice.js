import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY='c45a857c193f6302f2b5061c3b85e743';
export const fetchUpcomingMovies=createAsyncThunk(
    'movies/fetchUpcomingMovies',
    async ()=>{
        const response=await axios.get(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
        );
        return response.data.results;
    }
);

const initialState={
    upcomingMovies:[]
}
export const upcomingMoviesSlice=createSlice({
    name:'upcomingMoviesSlice',
    initialState:initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchUpcomingMovies.fulfilled,(state,action)=>{
            state.upcomingMovies=action.payload;
        })
    }
}  
)
