import  { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

  // Индикаторы, всегда три, и возвращаемся к первому после третьего
  const indicators = new Array(3).fill(null);

  return (
    <div className="w-[880px] h-[560px] rounded-[10px] bg-[#1A1A1A] flex justify-center items-center mb-[80px] mt-[70px] m-auto">
    <div className="relative bg-black text-white  rounded-2xl  shadow-lg w-[1700px]  left-[-80px] ">
      <div className="flex">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width={300}
          height={450}
          className="w-1/3 rounded-xl shadow-md"
        />
        <div className="ml-14 mt-[40px] flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold">{movie.title} <span className="text-gray-400 text-xl">{new Date(movie.release_date).getFullYear()}</span></h2>
            <p className="text-sm text-gray-400 mt-1">Жанры: {movie.genre_ids.join(" • ")}</p>
            <p className="mt-4 text-gray-300 text-sm w-[400px]">{movie.overview.slice(0, 300)}...</p>
          </div>
        </div>
      </div>
      {/* Индикатор слайдов (три точки) */}
      <div className="absolute right-10 top-1/2  transform -translate-y-1/2 flex flex-col gap-[20px] ">
        {indicators.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-6 rounded-full transition-all ${index === currentIndex % 3 ? "bg-red-500 h-[40px] w-[10px] ml-[3px]" : "bg-gray-600 rounded-[50%] w-[15px] h-[15px]"}`}
          />
        ))}
      </div>
        <Link to={`/movie/${movie.id}`}><button className="cursor-pointer left-[350px] w-[120px] h-[40px] rounded-[36px] bg-[#ba2e24] hover:bg-[#EF4234] absolute top-[250px]">Смотреть</button></Link>
    </div>
    </div>
  );
};

export default MovieCarousel;
