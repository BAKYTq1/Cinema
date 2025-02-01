import React from 'react'
import './SigneUp.css'
import { useState } from 'react';

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
        <h2>Зарегистрируйтесь, чтобы
        получить доступ ко всем преимуществам нашей платформы. Уже есть аккаунт?</h2>
       
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
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          required
          />
      </div>
      <div>
        <label>E-mail</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          />
      </div>
      <div>
        <label>Пароль</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          />
      </div>
      <button type="submit">Зарегистрироваться</button>
    </form>
    <p>
      Уже есть аккаунт? <a href="/login">Войти</a>
    </p>
  </div>

          </div>
          </>

    
  )
}

export default SigneUp