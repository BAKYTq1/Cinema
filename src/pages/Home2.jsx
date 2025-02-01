import React from 'react'
import { FaSearch } from "react-icons/fa";
import { Cinema } from '../data/Cinema';
import { useState } from 'react';
import './mirbek.css'


function Home2() {
    const [currentIndex, setCurrentIndex] = useState(0);  
    const slidesToShow = 3; // Количество отображаемых карточек  
  
    const nextSlide = () => {  
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (Cinema.length - slidesToShow + 1));  
    };  
  
    const prevSlide = () => {  
      setCurrentIndex((prevIndex) => (prevIndex - 1 + (Cinema.length - slidesToShow + 1)) % (Cinema.length - slidesToShow + 1));  
    };  
  return (
    
    <>
<div class="search-section">
    <h1 class="search-title">Поиск по сайту</h1>
    <p class="search-description">На нашем сайте вы найдете подходящие вам фильмы и сериалы</p>
    <div class="search-bar">
        <input class="search-input" type="text" placeholder="Поиск..." />
        <FaSearch  className='search-icon'/>
    </div>
</div>
<div class="mirba">
    <h1 class="main-title">Смотрите фильмы, которые вам нравятся</h1>
    <p class="description">На нашем сайте собрано огромное количество фильмов и сериалов на любой вкус</p>
    <div class="genre-cards">
        <div class="genre-card">
            <h1 class="genre-title">Драма</h1>
            <h2 class="genre-count">120k+ фильмов</h2>
        </div>
        <div class="genre-card">
            <h1 class="genre-title">Ужасы</h1>
            <h2 class="genre-count">100k+ фильмов</h2>
        </div>    
        <div class="genre-card">
            <h1 class="genre-title">Комедия</h1>
            <h2 class="genre-count">90k+ фильмов</h2>
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
      {Cinema.map((item, index) => (
        <div key={index} className="slide">
          <div className="card">
            <div className="rating">{item.rating}</div>
            <img src={item.poster} className="poster" />
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