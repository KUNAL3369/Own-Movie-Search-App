import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import MovieCard from './MovieCard';

const API_URL = "http://www.omdbapi.com/?apikey=8d0013e8";

const MovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovie('transformers');
  }, []);

  const searchMovie = async (title) => {
    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error searching movies:", error);
      setMovies([]);
    }
  };

  return (
    <div className="search-container">
      <div className="search">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <button onClick={() => searchMovie(searchTerm)}>
          <FaSearch />
        </button>
      </div>
      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <div key={movie.imdbID}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default MovieSearch;
