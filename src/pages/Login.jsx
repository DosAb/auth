import { useFormik } from "formik"
import { useState } from "react"
import "../styles/login.scss"

import { useNavigate, NavLink } from 'react-router-dom';

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
  <div className="login container wrapper">
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
        <NavLink to="/">
          <h3 className="">У меня еще нет аккаунта</h3>
        </NavLink>
      </form>
    </div>
  </div>
  </>
}