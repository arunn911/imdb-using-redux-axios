import React, { useEffect, useState } from 'react';
import MovieListing from "../MovieListing/MovieListing"
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows, fetchSearchMovies, removeSearchedMovies } from '../../features/movies/movieSlice';
import SearchIcon from '@mui/icons-material/Search';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import "./Home.scss"


const Home = () => {

    const [movie, setMovie] = useState("")
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAsyncMovies());
        dispatch(fetchAsyncShows());
    }, [dispatch])

    useEffect(() => {
        dispatch(fetchSearchMovies(movie))
        return () => {
            dispatch(removeSearchedMovies())
        }
    }, [dispatch, movie])



    const handleChange = (e) => {
        setMovie(e.target.value)
    }
    // console.log("Movie name : ",movie)
    return (
        <div className="banner-img">
            <div className="search-box">
                <FormControl style={{ minWidth: '300px',width:'50%' }} variant="outlined">
          <InputLabel style={{color:"cadetblue"}} htmlFor="outlined-adornment-password">Search for Movies, series and shows</InputLabel>
          <OutlinedInput style={{color:"#79b8f3"}} 
            type='text'
            onChange={handleChange}
            endAdornment={
              <InputAdornment  position="end">
                <IconButton edge="end">
                <SearchIcon style={{color:"cadetblue"}} />
                </IconButton>
              </InputAdornment>
            }
            label="Search for Movies, series and shows"
          />
        </FormControl>
            </div>
            <MovieListing />
        </div>
    );
};

export default Home;




