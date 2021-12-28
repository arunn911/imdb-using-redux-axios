import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovieOrShowDetail, removeSelectedMovieOrShow } from '../../features/movies/movieSlice';
import { getMovieOrShowDetail } from '../../features/movies/movieSlice';
import { useSelector } from 'react-redux';
import StarIcon from '@mui/icons-material/Star';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import TheatersIcon from '@mui/icons-material/Theaters';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import "./MovieDetails.scss"
import ReactLoading from 'react-loading';

const Loading = () => {
    return(
        <div className="loading" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
    <ReactLoading type="bubbles" color="white" height={'75px'} width={'75px'} />
    <h4>loading</h4>
    </div>
    )
};
const MovieDetails = () => {

    const { imdbID } = useParams();
    const dispatch = useDispatch();
    const data = useSelector(getMovieOrShowDetail);


    useEffect(() => {
        dispatch(fetchAsyncMovieOrShowDetail(imdbID))
        return () => {
            dispatch(removeSelectedMovieOrShow())
        }
    }, [dispatch, imdbID])


    console.log(data)


    return (
        <div className="movie-section">
            {Object.keys(data).length === 0 ? 
        (<Loading/>) :     
        (
            <>
                <div className="section-left">
                    <img src={data.Poster} alt={data.Title} />
                </div>
                <div className="section-right">
                    <div className="movie-title"> <h1>{data.Title}</h1> </div>
                    <div className="movie-rating">
                        <div className="rating-type">
                           <span> IMDB rating </span>  <StarIcon style={{ color: "Yellow", margin: "5px" }} /> {data.imdbRating}
                        </div>
                        <div className="rating-type">
                        <span> IMDB votes </span>  <ThumbUpIcon style={{ color: "#9393ed", margin: "5px" }} /> {data.imdbVotes}
                        </div>
                        <div className="rating-type">
                        <span> Length </span>  <TheatersIcon style={{ color: "#9393ed", margin: "5px" }} /> {data.Runtime}
                        </div>
                        <div className="rating-type">
                        <span> Year  </span>  <CalendarTodayIcon style={{ color: "Yellow", margin: "5px" }} /> {data.Year}
                        </div>
                    </div>
                    <div className="movie-plot">{data.Plot}</div>
                    <div className="movie-info">
                        <div>
                            <span> Director</span>
                            <span> {data.Director}</span>
                        </div>
                        <div>
                            <span> Stars</span>
                            <span> {data.Actors}</span>
                        </div>
                        <div>
                            <span> Genre</span>
                            <span> {data.Genre}</span>
                        </div>
                        <div>
                            <span> Languages</span>
                            <span> {data.Language}</span>
                        </div>
                        <div>
                            <span> Awards</span>
                            <span> {data.Awards}</span>
                        </div>
                    </div>
                </div>
            </>
        )}
        </div>
    );
};




export default MovieDetails;