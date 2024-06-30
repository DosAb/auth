import { useFormik } from "formik"
import { useState, useRef, useEffect } from "react"
import "../styles/login.scss"

import eyeOpenedImg from '/imgs/eye-opened.svg'
import eyeClosedImg from '/imgs/eye-closed.svg'
import background from '/imgs/background.svg'


export default function Register() {

  const userRef = useRef()
  const errorRef = useRef()
  
  const [errorMessage, setErrorMessage] = useState('')
  const [succes, setSucces] = useState(false)


  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordShow = () => setShowPassword(!showPassword);

  const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;

  const {values, handleBlur, handleChange} = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
  });

  useEffect(()=>{
    // useRef.current.focus()
  },[])

  return (
    <>
      <img className="background__img" src={background} alt="background" />
      <div className="form__section">
        <h2>Вэлком бэк!</h2>
        <form>
          <input
            type="text"
            id="login"
            placeholder="Введи туда-сюда логин"
            name="login"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.login}
          />
          <div className="input__container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Пароль (тоже введи)"
              name="password"
              id="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <img
              src={showPassword ? eyeClosedImg : eyeOpenedImg}
              alt="eye opened"
              onClick={handlePasswordShow}
            />
          </div>
          <button className="login__btn">Далее</button>
        </form>
      </div>
    </>
  );
}
