import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css'
import { IoChevronBackOutline } from "react-icons/io5";

function FilterComedy() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchComedyMovies() {
      try {
        const API_KEY = '18e278777fe86a077b3fe657f9b52f77'; // Ваш ключ API
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=ru-RU&with_genres=35` // Жанр "Комедия" имеет id 35
        );

        if (!response.ok) throw new Error('Ошибка загрузки фильмов');

        const data = await response.json();
        setMovies(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchComedyMovies();
  }, []);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div className="comedy-movies">
      <h1>Комедии</h1>
      <Link to="/" className="back-button">
        <IoChevronBackOutline />
      </Link>
      <div className="movies-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <Link to={`/movie/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </Link>
            <h2>{movie.title}</h2>
            <p>{movie.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterComedy;