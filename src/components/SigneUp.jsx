import React from 'react'
import './SigneUp.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SignIn from './sign in/SignIn';

function SigneUp() {
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (event) => {
        event.preventDefault();
    

        const user = {
          login,
          email,
          password,
        };
    

        const users = JSON.parse(localStorage.getItem('users')) || [];
    

        const userExists = users.some((u) => u.email === email);
        if (userExists) {
          alert('Пользователь с таким email уже зарегистрирован!');
          return;
        }
    

        users.push(user);
    
        localStorage.setItem('users', JSON.stringify(users));
    

        setLogin('');
        setEmail('');
        setPassword('');
    
        alert('Регистрация прошла успешно!');
      };
  return (
    <>
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
          </>

    
  )
}

export default SigneUp