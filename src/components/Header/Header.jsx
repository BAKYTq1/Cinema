import 'react'
import { VscAccount } from "react-icons/vsc";
// import logo from '../img/Ellipse 101'
import './style.css'
function Header() {
  return (
    <header>
      <div className='header'>
        <nav>
            <ul className='container active'>
                <li className='boss-div'>Cinema</li>
            </ul>
            <ul className='header-div'>
                <li>Главная</li>
            </ul>
        </nav>
            <div className='header-icon'>
                <h3>EN</h3>
                <div>
                <VscAccount />
                </div>
                
            </div>
      </div>
    </header>
  )
}

export default Header
