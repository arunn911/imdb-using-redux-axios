import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows, getSearchedMovies } from '../../features/movies/movieSlice';
import MovieCard from "../MovieCard/MovieCard";
import './MovieListing.scss'

const MovieListing = () => {

    const movies = useSelector(getAllMovies);
    const shows = useSelector(getAllShows);
    const searchedMovies = useSelector(getSearchedMovies);

    // console.log(movies);

    let renderMovies, renderShows, renderSearchedMovies = "";

    renderMovies = movies.Response === "True" ? (movies.Search.map((movie, index) => {
        return (
            <MovieCard key={index} data={movie} />
        )
    })
    ) : (<div className="movies-error"><h3>{movies.Error}</h3></div>)

    // console.log(renderMovies)

    ///-------------------------------------------------------------------------------------------------------------------------------------------------///

    renderShows = shows.Response === "True" ? (shows.Search.map((movie, index) => {
        return (
            <MovieCard key={index} data={movie} />
        )
    })
    ) : (<div className="shows-error"><h3>{shows.Error}</h3></div>)

    // console.log(renderShows)

    ///---------------------------------------------------------------------------------------------------------------------------------------------------///

    renderSearchedMovies = searchedMovies.Response === "True" ?
        (searchedMovies.Search.map((movie, index) => {
            return (
                <MovieCard key={index} data={movie} />
            )
        })
        ) : (<div className="searchedMovies-error"><h3>{searchedMovies.Error}</h3></div>)

    console.log(renderSearchedMovies)


    ///--------------------------------------------------------------------------------------------------------------------------------------------------///

    return (
        <div className="movie-wrapper">
 { searchedMovies.Response === "True" ? 
           ( <>
            <div className="searched-movie-list">
            <h2>Movies related to your search</h2>
                <div className="movie-container">
                    {renderSearchedMovies}
                </div>
            </div>
            </> ) : (<div></div>)
}
            <div className="movie-list">
                <h2>Movies</h2>
                <div className="movie-container">
                    {renderMovies}
                </div>
            </div>
            <div className="show-list">
                <h2>Series</h2>
                <div className="movie-container">
                    {renderShows}
                </div>
            </div>
        </div>
    );
};

export default MovieListing;