import  'react'
import './style.css'
import { SiYoutubemusic } from "react-icons/si";
import Home2 from './Home2'
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
            <p>Готэм. Комик Артур Флек живет с больной матерью,<br /> которая с детства учит его «ходить с улыбкой»</p>
        </div>
        <button>Смотреть <SiYoutubemusic />
        </button>
        </div>
      </section>
    </main>
    <Home2 />
    </>
  )
}

export default Home
