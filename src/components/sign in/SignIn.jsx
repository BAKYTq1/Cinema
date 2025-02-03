import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Получаем данные пользователя из localStorage
    const storedUser = JSON.parse(localStorage.getItem('registrationData'));
    
    // Проверяем, существуют ли данные и совпадают ли они с введенными
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      alert('Вход успешен!');
      navigate('/profile'); // Перенаправляем на профиль
    } else {
      alert('Неверный email или пароль');
    }
  };

  return (
    <div className='signIn'>
      <div className='Sign-r'>
        <div>
          <h1>Регистрация</h1>
          <p>
            Зарегистрируйтесь, чтобы <br />
            получить доступ ко всем преимуществам <br /> нашей платформы. Уже есть аккаунт?
          </p>
          <Link to={'/signup'}>
            <button>Зарегистрироваться</button>
          </Link>
        </div>
      </div>

      <div className='item-signIn2'>
        <div>
          <div className='Voyti'>
            <h1>Войти</h1>
            <form onSubmit={handleLogin}>
              <input
                type="email"
                id='email'
                placeholder='E-mail'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                id='password'
                placeholder='Пароль'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit">Войти</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
