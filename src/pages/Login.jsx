import { useFormik } from "formik"
import { useState } from "react"
import "../styles/login.scss"

import eyeOpenedImg from '/imgs/eye-opened.svg'
import eyeClosedImg from '/imgs/eye-closed.svg'
import background from '/imgs/background.svg'


export default function Login()
{
  const [showPassword, setShowPassword] = useState(false)

  const handlePasswordShow = () => setShowPassword(!showPassword);

  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    }
  })


  return <>
  <img className="background__img" src={background} alt="background" />
  <div className="form__section">
    <h2>Вэлком бэк!</h2>
    <form>
      <input
        type='text'
        id="login"
        placeholder='Введи туда-сюда логин'
        name='login'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.login}
      />
      <div className="input__container">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder='Пароль (тоже введи)'
          name='password'
          id="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        <img
          src={showPassword ? eyeClosedImg : eyeOpenedImg}
          alt='eye opened'
          onClick={handlePasswordShow}
        />
      </div>
      <button className="login__btn">Войти</button>

      <h3>У меня еще нет аккаунта</h3>
    </form>
  </div>
  </>
}