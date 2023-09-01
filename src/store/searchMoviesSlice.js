import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY='c45a857c193f6302f2b5061c3b85e743';
export const fetchSearchedMovies=createAsyncThunk(
    'movies/fetchSearchedMovies',
    async ()=>{
        const response=await axios.get(
    `Get search result
    https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${movie_name}&page=1`
        );
        return response.data.results;
    }
);

const initialState={
    searchedMovies:[]
}
export const searchedMoviesSlice=createSlice({
    name:'searchedMovies',
    initialState:initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchSearchedMovies.fulfilled,(state,action)=>{
            state.searchedMovies=action.payload;
        })
    }
}
    
)
