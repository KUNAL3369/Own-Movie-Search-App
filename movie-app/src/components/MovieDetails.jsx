import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const API_URL = "http://www.omdbapi.com/?apikey=8d0013e8";

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(`${API_URL}&i=${id}`); // use 'i' not 's' to fetch by IMDb ID
      const data = await response.json();
      console.log(data);
      setMovie(data);
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>...Loading</div>;
  }

  return (
    <div className='Detail-container'>
      <div className='img-container'>
        <img src={movie.Poster} alt={movie.Title} className='movie-img' />
      </div>
      <div className='movie-details'>
        <h2>{movie.Title}</h2>
        <p><strong>Year:</strong> {movie.Year}</p>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Plot:</strong> {movie.Plot}</p>
        <div className='list-container'>
          <ul className='list-group'></ul>
          <li><strong>Director:</strong>{movie.Director}</li>
          <li><strong>Actors:</strong>{movie.Actors}</li>
          <li><strong>Released:</strong>{movie.Released}</li>
          <li><strong>IMDB Rating:</strong>{movie.imdbRating}</li>
        </div>
      </div>
    </div>
  );
};
export default MovieDetails;
