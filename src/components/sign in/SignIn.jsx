import 'react'
import './style.css'
function SignIn() {
  return (
    <div className='signIn'>
     <div className='Sign-r'>
      <div>
        <h1>Регистрация</h1>
        <p>Зарегистрируйтесь, чтобы <br />
        получить доступ ко всем преимуществам <br /> нашей платформы. Уже есть аккаунт?</p>
        <button>Зарегистрироваться</button>
      </div>
     </div>
     <div className='item-signIn2'>
        <div>
         <div className='Voyti'>
            <h1>Войти</h1>
            <input type="email" id='email' placeholder='E-mail'/>
            <input type="password" id='password' placeholder='Пароль'/>
            <button>Войти</button>
         </div>
         </div>
     </div>
    </div>
  )
}

export default SignIn
