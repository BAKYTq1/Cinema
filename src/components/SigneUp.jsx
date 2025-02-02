import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SigneUp.css';

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
    alert('Регистрация прошла успешно');
    navigate('/signin'); // Переход на страницу входа
  };

  return (
    <div className='big-div'>
      <div className='registration-container-info'>
        <h1>Регистрация</h1>
        <h2>
          Зарегистрируйтесь, чтобы <br />
          получить доступ ко всем преимуществам <br /> нашей платформы.
        </h2>
        <Link to="../signin">
          <button>Войти</button>
        </Link>
      </div>

      <div className="registration-container">
        <h2>Создать аккаунт</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Имя пользователя</label>
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
              value={formData.lastName}
              onChange={handleChange}
              required
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
          Уже есть аккаунт? <Link to="../signin">Войти</Link>
        </p>
      </div>
    </div>
  );
}

export default SigneUp;
