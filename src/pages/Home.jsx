import  'react'
import './style.css'
import { SiYoutubemusic } from "react-icons/si";
// import SignIn from '../components/sign in/SignIn';
import Home2 from './Home2'
import MovieCard from './MovieCard';
// import MovieList from './Cinema';
function Home() {
  return (
    <>
    <main>
      <section>
        <div className='Home'>
            <div>
            <h2 style={{marginTop:'14px'}}>______</h2><h2>Выбор Cinemax</h2>
            </div>
        <div className='Home-J'>
            <h1>Джокер </h1>
            <p style={{marginTop:'15px'}}>Готэм. Комик Артур Флек живет с больной матерью,<br /> которая с детства учит его «ходить с улыбкой»</p>
        </div>
        <button style={{marginTop:'20px'}}>Смотреть <SiYoutubemusic />
        </button>
        </div>
      </section>
    </main>
    {/* <MovieList /> */}
    {/* <SignIn/> */}
    <Home2 />
    <MovieCard />
    </>
  )
}

export default Home
