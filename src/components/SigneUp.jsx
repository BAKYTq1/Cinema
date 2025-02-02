
import React, { useState } from 'react';
import './SigneUp.css';
import { useNavigate } from 'react-router-dom';

import React from 'react'
import './SigneUp.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SignIn from './sign in/SignIn';


function SigneUp() {
  const [formData, setFormData] = useState({
    username: '',
    lastName: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('registrationData', JSON.stringify(formData));
    alert('Регестрация прошла успешно')
  };
  return (
    <>

      <div className='big-div'>
        <div className='registration-container-info'>
          <div>
            <h1>Регистрация</h1>
            <h2>Зарегистрируйтесь, чтобы получить доступ ко всем преимуществам нашей платформы. Уже есть аккаунт?</h2>

    <div className='big-div'>
  <div className='registration-container-info'>
    <div>
        <h1>Регистрация</h1>
        <h2>Зарегистрируйтесь, чтобы <br />
        получить доступ ко всем преимуществам <br /> нашей платформы. Уже есть аккаунт?</h2>
       
    </div>
    <Link to={'../signin'}><button>Войти</button></Link>
         
  </div>

    <div className="registration-container">
    <h2>Создать аккаунт</h2>
    <form onSubmit={handleSubmit}>
      <div>
           <input
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          required placeholder='Логин'
          />
      </div>
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required placeholder='E-mail'
          />
      </div>
      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required placeholder='Пароль'
          />
      </div>
      <button type="submit">Зарегистрироваться</button>
    </form>
    <p>
      Уже есть аккаунт? <Link to="../signin">Войти</Link>
    </p>
  </div>


          </div>
          <button>Войти</button>
        </div>

        <div className="registration-container">
          <h2>Создать аккаунт</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Логин</label>
              <input
                 type="text" 
                 name="username" 
                 placeholder="Имя пользователя" 
                 value={formData.username} 
                 onChange={handleChange} 
                 required
              />
            </div>
            <div>
              <label>Фамилия</label>
              <input
                type="text"
                name="lastName"
                placeholder="Фамилия"
                required
                value={formData.lastName}
                onChange={handleChange}
                
              />
            </div>
            <div>
              <label>E-mail</label>
              <input
               type="email" 
               name="email" 
               placeholder="Email" 
               value={formData.email} 
               onChange={handleChange} 
               required 
              />
            </div>
            <div>
              <label>Пароль</label>
              <input
                 type="password" 
                 name="password" 
                 placeholder="Пароль" 
                 value={formData.password} 
                 onChange={handleChange} 
                 required 
              />

            </div>
            <button type="submit">Зарегистрироваться</button>
          </form>
          <p>
            Уже есть аккаунт? <a href="#">Войти</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default SigneUp;