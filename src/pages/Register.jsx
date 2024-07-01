import { useFormik } from "formik"
import { useState, useRef, useEffect } from "react"
import "../styles/login.scss"

import eyeOpenedImg from '/imgs/eye-opened.svg'
import eyeClosedImg from '/imgs/eye-closed.svg'
import background from '/imgs/background.svg'

import { basicSchema } from "../schemas"

export default function Register() {

  const [succes, setSucces] = useState(false)

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handlePasswordShow = () => setShowPassword(!showPassword);
  const handleConfirmPasswordShow = () => setShowConfirmPassword(!showConfirmPassword);

  const {values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting} = useFormik({
    initialValues: {
      email: '',
      login: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: basicSchema,
    onSubmit: ()=>{
      console.log("submit")
    },
  });

  return (
    <>
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
            {isSubmitting ? (<h1>submitin</h1>) : ''}
        </form>
      </div>
    </>
  );
}
