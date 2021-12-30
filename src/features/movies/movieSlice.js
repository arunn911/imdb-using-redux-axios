import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import movieApi from '../../common/apis/movieApi'
import { APIKey } from '../../common/apis/movieApiKey'




export const fetchAsyncMovies = createAsyncThunk(
    'movies/fetchAsyncMovies',
    async () => {
        const movieText = "Harry";
        const response = await movieApi
            .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`);
        return response.data;
    }
);

export const fetchAsyncShows = createAsyncThunk(
    'movies/fetchAsyncShows',
    async () => {
        const seriesText = "Cold"
        const response = await movieApi
            .get(`?apiKey=${APIKey}&s=${seriesText}&type=series`);
        return response.data;
    }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
    'movies/fetchAsyncMovieOrShowDetail',
    async (id) => {
        
        const response = await movieApi
            .get(`?apiKey=${APIKey}&i=${id}&plot=full`);
        return response.data;
    }
);

export const fetchSearchMovies = createAsyncThunk(
    'movies/fetchSearchMovies',
    async (movie) => {

        const response = await movieApi
                .get(`?apiKey=${APIKey}&s=${movie}&type=movie`);
           return response.data;
    }
);






const initialState = {
    movies: {},
    shows:{},
    searchedMovie :{},
    selectedMovieOrShow:{}
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        removeSelectedMovieOrShow: (state) => {
            state.selectedMovieOrShow = {}
        },
        removeSearchedMovies: (state) => {
            state.searchedMovie = {}
        },
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("Pending");
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log("Fetched Sucessfully");
            return { ...state, movies: payload };
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("Rejected");
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log("Fetched shows Sucessfully");
            return { ...state, shows: payload };
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
            console.log("Fetched Details Sucessfully");
            return { ...state,selectedMovieOrShow: payload };
        },
        [fetchSearchMovies.fulfilled]: (state, { payload }) => {
            console.log("Fetched Details Sucessfully");
            return { ...state,searchedMovie: payload };
        }
    }
});


export const {removeSelectedMovieOrShow,removeSearchedMovies} = movieSlice.actions
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getSearchedMovies = (state) => state.movies.searchedMovie
export const getMovieOrShowDetail = (state) => state.movies.selectedMovieOrShow
export default movieSlice.reducer;