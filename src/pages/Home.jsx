import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Home2 from './Home2';
import MovieCard from './MovieCard';
import { SiYoutubemusic } from "react-icons/si";
import './style.css';

const MovieCarousel = () => {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const API_KEY = "18e278777fe86a077b3fe657f9b52f77";
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ru-RU`
        );

        if (!response.ok) throw new Error("Ошибка загрузки фильмов");

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [movies]);

  if (loading) {
    return <div className="text-white text-xl">Загрузка...</div>;
  }

  if (error) {
    return <p className="text-red-500">Ошибка: {error}</p>;
  }

  const movie = movies[currentIndex];

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black relative top-[-80px]">
      <div className="relative w-full h-full flex justify-center items-center">
        {/* Фоновое изображение */}
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          className="absolute top-0 left-0 w-full h-full object-cover opacity-60 transition-opacity duration-500"
        />

        {/* Контент */}
        <div className="relative left-[-260px] z-10 flex flex-col text-start text-white text-center w-[700px] px-10">
         <div className='text-[#979797] flex gap-[15px]'>
           <h1>______ </h1><h1>Выборь Cinemax</h1>
          </div>
          <h1 className="text-5xl font-bold mt-[22px]">{movie.title}</h1>
          {/* <p className="text-xl mt-2 opacity-80 mt-[20pz]">{new Date(movie.release_date).getFullYear()}</p> */}
          <p className="mt-4 text-lg max-w-3xl mt-[18px]">{movie.overview.slice(0, 300)}...</p>

          <Link to={`/movie/${movie.id}`}>
            <button className=" flex mt-6 px-6 gap-[10px] justify-center items-center py-3 bg-red-600 hover:bg-red-500 rounded-full text-xl transition">
              Смотреть <SiYoutubemusic />
            </button>
          </Link>
        </div>

        {/* Индикаторы слайдов */}
        <div className="absolute bottom-6 left-[188px] flex space-x-3">
          {movies.slice(0, 5).map((_, index) => (
            <div
              key={index}
              className={`w-[3px] h-[21px] rounded-full transition-all ${
                index === currentIndex % 5 ? "bg-red-500 w-[4px] h-[33px] mt-[-11px]" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

function Home() {
  return (
    <>
      <MovieCarousel />
      <Home2 />
      <MovieCard />
    </>
  );
}

export default Home;
