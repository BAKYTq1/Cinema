import 'react'
import { FaSearch } from "react-icons/fa";
import { Cinema } from '../data/Cinema';
import { useState, useEffect } from 'react';
import './mirbek.css'


function Home2() {
  const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      
      async function fetchMovies() {
        try {
          const API_KEY = '18e278777fe86a077b3fe657f9b52f77'; // Твой ключ API
          const response = await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ru-RU`
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
  
      fetchMovies();
    }, []);
    // if (loading) return <p>Загрузка...</p>;
    // if (error) return <p>Ошибка: {error}</p>;
    console.log(movies);
    
    
    const [currentIndex, setCurrentIndex] = useState(0);  
    const slidesToShow = 3;  
  
    const nextSlide = () => {  
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (Cinema.length - slidesToShow + 1));  
    };  
  
    const prevSlide = () => {  
      setCurrentIndex((prevIndex) => (prevIndex - 1 + (Cinema.length - slidesToShow + 1)) % (Cinema.length - slidesToShow + 1));  
    };  
  return (
    
    <>
<div className="search-section">
    <h1 className="search-title text-start text-[26px] font-[400]">Поиск по сайту</h1>
    <p className="search-description text-start text-[#979797]">На нашем сайте вы найдете подходящие вам <br /> фильмы и сериалы</p>
    <div className="search-bar">
        <input className="search-input" type="text" placeholder="Поиск..." />
        <FaSearch  className='search-icon'/>
    </div>
</div>
<div className="mirba">
    <h1 className="main-title">Смотрите фильмы, которые вам нравятся</h1>
    <p className="description">На нашем сайте собрано огромное количество фильмов и сериалов на любой вкус</p>
    <div className="genre-cards">
        <div className="genre-card">
            <h1 className="genre-title">Драма</h1>
            <h2 className="genre-count">120k+ фильмов</h2>
        </div>
        <div className="genre-card">
            <h1 className="genre-title">Ужасы</h1>
            <h2 className="genre-count">100k+ фильмов</h2>
        </div>    
        <div className="genre-card">
            <h1 className="genre-title">Комедия</h1>
            <h2 className="genre-count">90k+ фильмов</h2>
        </div>
    </div>
</div>
    <div className='block3-2-1'>
        <h1 className='center'>Новинки <div></div></h1>
        <h1 className='center'>Популярное<div></div></h1>
        <h1 className='center'>Смотрят сейчас<div></div></h1>
        <h1 className='center'>Рекомендации<div></div></h1>
        <h1 className='center'>Топ 10<div></div></h1>
        <h1 className='center'>Скоро на Cinemax<div></div></h1>
    </div>
    <div className="con">
  <div className="slider-wrapper">
    <div
      className="slider"
      style={{ transform: `translateX(-${(currentIndex * 100) / slidesToShow}%)` }}
    >
      {movies.map((item) => (
        <div key={item.id} className="slide">
          <div className="card">
            <div className="rating">{item.rating}</div>
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt={item.title}
            />
            <h2 className="movie-title">{item.name}</h2>
            <p className="movie-year">{item.year}</p>
          </div>
        </div>
      ))}
    </div>

    <button onClick={prevSlide} className="nav-button left">Prev</button>
    <button onClick={nextSlide} className="nav-button right">Next</button>
  </div>
</div>

</>
  )
}

export default Home2