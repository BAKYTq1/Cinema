import 'react'
import { VscAccount } from "react-icons/vsc";
// import logo from '../img/Ellipse 101'
import './style.css'
import { Link } from 'react-router-dom';
import { FaHouseUser } from "react-icons/fa6";
function Header() {
  return (
    <header>
      <div className='header'>
        <nav>
            <ul className='container active'>
                <li className='boss-div'>Cinema</li>
            </ul>
            <ul className='header-div'>
             
              <Link to='/'>
                <li>Главная</li>
              </Link>
              
            </ul>
        </nav>
            <div className='header-icon'>
                <h3>EN</h3>
                <div>
                  <Link to='signup'>
                <VscAccount />
                  </Link>
                </div>
                <div>
                  <Link to='profile'>
                <FaHouseUser />
                  </Link>
                </div> 
            </div>
      </div>
    </header>
  )
}

export default Header
