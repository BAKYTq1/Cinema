import 'react'
import './style.css'
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
function Footer() {
  return (
    <>
    <footer>
      <div className='footer'>
       <ul>
        <li>Cinemax</li>
        <li>О нас</li>
        <li>Блог</li>
        <li>Вакансии</li>
        <li>Акции</li>
       </ul>
       <ul>
        <li>Помощь</li>
        <li>Вопросы и ответы</li>
        <li>Контакты</li>
       </ul>
       <ul>
        <li>Поддержка</li>
     <p>Мы всегда готовы вам помочь. <br />
     Наши операторы онлайн 24/7</p>
     <div className='footer-div'>
     <div>
      <h1>
     <FaPhone />
      </h1>
     </div>
     <div>
      <h1>
     <IoIosMail />
      </h1>
     </div>
     <div>
      <h1>
     <FaTelegramPlane />
      </h1>
     </div>
     </div>
     <button>Написать в чате</button>
       </ul>
      </div>
    </footer>
      <div className='item-footer'>
        <h1>© 2015-2025 Cinemax</h1>
        <h1>Пользовательские соглашения</h1>
      </div>
    </>
  )
}

export default Footer
