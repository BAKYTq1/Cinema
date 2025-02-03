import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './style.css'
import { FaSearch } from "react-icons/fa";


function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]); // Состояние для хранения фильмов
  const [loading, setLoading] = useState(false); // Состояние для загрузки
  const [error, setError] = useState(null); // Состояние для ошибок

  // Функция для поиска фильмов
  const searchMovies = async (query) => {
    if (!query) {
      setMovies([]); // Если запрос пустой, очищаем результаты
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const API_KEY = '18e278777fe86a077b3fe657f9b52f77'; // Ваш API-ключ
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=ru-RU&query=${query}`
      );

      if (!response.ok) {
        throw new Error('Ошибка при загрузке фильмов');
      }

      const data = await response.json();
      setMovies(data.results); // Устанавливаем результаты поиска
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Эффект для выполнения поиска при изменении searchQuery
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      searchMovies(searchQuery);
    }, 500); // Задержка 500 мс для уменьшения количества запросов

    return () => clearTimeout(delayDebounceFn); // Очистка таймера
  }, [searchQuery]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="search-page"
    >
      <div className="search-bar">
        <input
          className="search-input"
          type="text"
          placeholder="Поиск..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          autoFocus
        />
        <FaSearch className="search-icon" />
      </div>

      {loading && <p>Загрузка...</p>}
      {error && <p>Ошибка: {error}</p>}

      {searchQuery && (
        <div className="search-results">
          <h2>Результаты поиска для: {searchQuery}</h2>
          <div className="movies-grid">
            {movies.length > 0 ? (
              movies.map((movie) => (
                <Link to={`/movie/${movie.id}`} key={movie.id}>
                  <motion.div
                    className="movie-card"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      className="movie-poster"
                    />
                    <h3 className="movie-title">{movie.title}</h3>
                    <p className="movie-year">
                      {movie.release_date && movie.release_date.split('-')[0]}
                    </p>
                  </motion.div>
                </Link>
              ))
            ) : (
              <p>Ничего не найдено.</p>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default SearchPage;