import  { useState, useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
import { Cinema } from '../data/Cinema';
import './mirbek.css';
import { Link, useNavigate } from 'react-router-dom';

function Home2() {
  const [movies, setMovies] = useState([]);
  const [, setLoading] = useState(true);
  const [, setError] = useState(null);
  const [currentCategory, setCurrentCategory] = useState('popular'); // Состояние для текущей категории
  const navigate = useNavigate();

  const fetchMovies = async (category) => {
    try {
      const API_KEY = '18e278777fe86a077b3fe657f9b52f77'; // Твой ключ API
      let endpoint = '';

      switch (category) {
        case 'now_playing':
          endpoint = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=ru-RU`;
          break;
        case 'top_rated':
          endpoint = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=ru-RU`;
          break;
        case 'upcoming':
          endpoint = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=ru-RU`;
          break;
        case 'top_10':
          endpoint = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=ru-RU`;
          break;
        case 'soon_on_cinemax':
          endpoint = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=ru-RU`;
          break;
        default:
          endpoint = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ru-RU`;
      }

      const response = await fetch(endpoint);

      if (!response.ok) throw new Error('Ошибка загрузки фильмов');

      const data = await response.json();

      // Для "Топ 10" берем только первые 10 фильмов
      if (category === 'top_10') {
        setMovies(data.results.slice(0, 10));
      } else {
        setMovies(data.results);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(currentCategory);
  }, [currentCategory]);

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesToShow = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (Cinema.length - slidesToShow + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + (Cinema.length - slidesToShow + 1)) % (Cinema.length - slidesToShow + 1));
  };

  const handleSearchClick = () => {
    navigate('/search');
  };

  return (
    <>
      <div className="search-section">
        <h1 className="search-title text-start text-[26px] font-[400]">Поиск по сайту</h1>
        <p className="search-description text-start text-[#979797]">На нашем сайте вы найдете подходящие вам <br /> фильмы и сериалы</p>
        <div className="search-bar">
          <input
            className="search-input"
            type="text"
            placeholder="Поиск..."
            onClick={handleSearchClick}
            readOnly={true}
          />
          <FaSearch className="search-icon" />
        </div>
      </div>
      <div className="mirba">
        <h1 className="main-title">Смотрите фильмы, которые вам нравятся</h1>
        <p className="description">На нашем сайте собрано огромное количество фильмов и сериалов на любой вкус</p>
        <div className="genre-cards">
          <Link to='filter/drama'>
            <div className="genre-card">
              <h1 className="genre-title">Драма</h1>
              <h2 className="genre-count">120k+ фильмов</h2>
            </div>
          </Link>
          <Link to='filter/horror'>
            <div className="genre-card">
              <h1 className="genre-title">Ужасы</h1>
              <h2 className="genre-count">100k+ фильмов</h2>
            </div>
          </Link>
          <Link to='filter/comedy'>
            <div className="genre-card">
              <h1 className="genre-title">Комедия</h1>
              <h2 className="genre-count">90k+ фильмов</h2>
            </div>
          </Link>
        </div>
      </div>
      <div className='block3-2-1'>
        <h1 className='center' onClick={() => handleCategoryChange('now_playing')}>Новинки<div></div></h1>
        <h1 className='center' onClick={() => handleCategoryChange('popular')}>Популярное<div></div></h1>
        <h1 className='center' onClick={() => handleCategoryChange('top_rated')}>Смотрят сейчас<div></div></h1>
        <h1 className='center' onClick={() => handleCategoryChange('upcoming')}>Рекомендации<div></div></h1>
        <h1 className='center' onClick={() => handleCategoryChange('top_10')}>Топ 10<div></div></h1>
        <h1 className='center' onClick={() => handleCategoryChange('soon_on_cinemax')}>Скоро на Cinemax<div></div></h1>
      </div>
      <div className="con">
        <div className="slider-wrapper">
          <div className="slider" style={{ transform: `translateX(-${(currentIndex * 100) / slidesToShow}%)` }}>
            {movies.map((item) => (
              <div key={item.id} className="slide">
                <div className="card">
                  <div className="rating">{Math.round(item.vote_average * 100) / 100}</div>
                  <Link to={`/movie/${item.id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                      alt={item.title}
                      style={{ cursor: 'pointer' }}
                    />
                  </Link>
                  <h2 className="movie-title">{item.title}</h2>
                  <p className="movie-year">{item.release_date}</p>
                </div>
              </div>
            ))}
          </div>
          <button onClick={prevSlide} className="nav-button left">Prev</button>
          <button onClick={nextSlide} className="nav-button right">Next</button>
        </div>
      </div>
    </>
  );
}

export default Home2;