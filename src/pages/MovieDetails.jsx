import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './mirbek.css'

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_KEY = '18e278777fe86a077b3fe657f9b52f77';
    const fetchMovieDetails = async () => {
      try {
        const [movieRes, creditsRes, videosRes] = await Promise.all([
          fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=ru-RU`),
          fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=ru-RU`),
          fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=ru-RU`)
        ]);

        const movieData = await movieRes.json();
        const creditsData = await creditsRes.json();
        const videosData = await videosRes.json();

        setMovie(movieData);
        setCredits(creditsData.cast.slice(0, 5));
        setVideos(videosData.results.slice(0, 3));
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Загрузка...</p>;
  console.log(movie);
  

  return (
    <div className="bg-black text-white min-h-screen p-6 mt-[-100px]">
      <div className="bg-i m-auto flex flex-col md:flex-row items-center md:items-start gap-6 w-full h-[700px] "
      style={{backgroundImage : `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`}}
      >
        <div className='mt-[100px] m-auto w-[700px] flex '>

        <motion.img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="rounded-xl shadow-lg w-64 ml-[-90px] md:w-80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          />
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className='h-[400px] ml-[84px] mt-[50px]'
        >
          <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
          <p className="text-gray-400 mb-4">
            {movie.release_date.slice(0, 4)} • {movie.runtime} мин • {movie.genres.map(g => g.name).join(', ')}
          </p>
          <p className="mb-4 text-gray-300">{movie.overview}</p>
          <div className="flex gap-4">
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl">Смотреть по подписке</button>
            <button className="bg-transparent border border-gray-400 hover:bg-gray-700 text-white px-4 py-2 rounded-xl">В избранное</button>
          </div>
        </motion.div>
          </div>

      </div>

      <motion.div className="mt-10 w-[400px] m-auto justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        <h2 className="text-2xl font-semibold mb-4">Трейлеры</h2>
        <div className="flex gap-4 overflow-x-auto">
          {videos.map(video => (
            <div key={video.id} className="min-w-[200px] ">
              <iframe
                src={`https://www.youtube.com/embed/${video.key}`}
                title={video.name}
                className="w-64 h-36 rounded-lg shadow-md ml-[80px]"
                allowFullScreen
              ></iframe>
              <p className="mt-2 text-center">{video.name}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div className="mt-10 w-[500px] m-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
        <h2 className="text-2xl font-semibold mb-4">Актёры и Создатели</h2>
        <div className="relative flex gap-4 overflow-x-auto h-[160px]">
          {credits.map(actor => (
            <div key={actor.id} className=" relative text-center min-w-[120px] ">
              <img
                src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                alt={actor.name}
                className="w-24 h-24 ml-[15px] object-cover absolute rounded-full mx-auto"
              />
                <div className='bg-[#1A1A1A] mt-[50px] rounded-xl h-[90px] overflow-hidden'>
              <p className="mt-[50px] text-sm font-medium">{actor.name}</p>
              <p className="text-xs text-gray-400">{actor.known_for_department}</p>

              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default MovieDetails;
