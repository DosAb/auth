import { useFormik } from "formik"
import { useState, useRef, useEffect } from "react"
import { useNavigate, NavLink } from 'react-router-dom';
import "../styles/login.scss"

import axios from "../api/axios"

import eyeOpenedImg from '/imgs/eye-opened.svg'
import eyeClosedImg from '/imgs/eye-closed.svg'
import background from '/imgs/background.svg'
import arrowBack from '/imgs/arrow-back.svg'

import { registerSchema } from "../schemas"

const register_url = "https://pudge-backender.org.kg/register/"

export default function Register() {

  const navigate = useNavigate()

  const [succes, setSucces] = useState(false)

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handlePasswordShow = () => setShowPassword(!showPassword);
  const handleConfirmPasswordShow = () => setShowConfirmPassword(!showConfirmPassword);

  const handleRegister = async (e) => {
    try{
      const responce = await axios.post(
        register_url,
        JSON.stringify({ email: "user@example.com", username: "someone", password: "password"}), 
        {
          headers: {'Content-Type': 'application/json'},
          withCredentials: true
        }
      )
      console.log(responce.data)
    } catch (err) {
      if(!err?.responce){
        console.log(err)
      }
    }
  }

  const {values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting} = useFormik({
    initialValues: {
      email: '',
      login: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: registerSchema,
    onSubmit: (values, actions)=>{
      console.log("submit")
      actions.resetForm()
      handleRegister()
    },
  });

  return (
    <>
      <NavLink className="back__btn" to="/login">
        <img src={arrowBack} alt="arrowBack" />
        <h3>Назад</h3>
      </NavLink>
      <div className="register container wrapper">
        <img className="background__img" src={background} alt="background" />
        <div className="form__section">
          <h2>Вэлком бэк!</h2>
          <form onSubmit={handleSubmit}>
            {errors.email && touched.email && <p className="error">{errors.email}</p>}
            <input
              className={errors.email && touched.email ? "input-error" : ""}
              type='email'
              placeholder='Введи адрес почты'
              name='email'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.login && touched.login && <p className="error">{errors.login}</p>}
            <input
              type="text"
              className={errors.login && touched.login ? "input-error" : ""}
              placeholder="Придумай логин"
              name="login"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.login}
            />
            <div className="input__container">
              {errors.password && touched.password && <p className="error">{errors.password}</p>}
              <input
                type={showPassword ? "text" : "password"}
                className={errors.password && touched.password ? "input-error" : ""}
                placeholder="Создай пароль"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <img
                src={showPassword ? eyeClosedImg : eyeOpenedImg}
                alt="eyeImg"
                onClick={handlePasswordShow}
              />
            </div>
            <div className="input__container">
              {errors.confirmPassword && touched.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
              <input
                type={showConfirmPassword ? "text" : "password"}
                className={errors.confirmPassword && touched.confirmPassword ? "input-error" : ""}
                placeholder='Повтори пароль'
                name='confirmPassword'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
              />
              <img
                src={showConfirmPassword ? eyeClosedImg : eyeOpenedImg}
                alt="eyeImg"
                onClick={handleConfirmPasswordShow}
              />
            </div>
            <button type="submit" className="login__btn">Далее</button>

          </form>
        </div>
      </div>
    </>
  );
}
