import movieTrailer from 'movie-trailer';
import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import axios from './axios';
import './Row.css';


const base_url = "http://image.tmdb.org/t/p/original/"; //where my images come from

function Row({ title, fetchUrl, isLargeRow }) {
   const [movies, setMovies] = useState([]);
   const [trailerUrl, setTrailerUrl] = useState("");

    // A snippet of code that runs based on specific conditions
    useEffect(() => {
        //if [] is empty run once the row loads and dont run again
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]); //fetchurl is included for it to load

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        },
    };
// when the user clicks on the picture
    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        }else {
            movieTrailer(movie?.name || "")
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            })
            .catch((error) => console.log(error));
        }
    };

  return (
        <div className='row'>
            <h2>{title}</h2>

            <div className='row__posters'>
                {/* several row_posters */}

                {movies.map((movie) => (
                    <img 
                    key={movie.id} 
                    onClick={() => handleClick(movie)}
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    src={`${base_url}${
                        isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`} 
                    alt={movie.name}
                    />
                ))}   
            </div> 
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    );
}

export default Row;