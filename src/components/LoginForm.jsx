import { useFormik } from "formik";
import { useState } from "react";

import { useNavigate, NavLink } from "react-router-dom";
import { postLogin } from "../api/axios";

import eyeOpenedImg from "/imgs/eye-opened.svg";
import eyeClosedImg from "/imgs/eye-closed.svg";

import { loginSchema } from "../schemas";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordShow = () => setShowPassword(!showPassword);

  const handleLogin = async (data) => {
    try {
      const responce = await postLogin(data);
      console.log(responce.data);
    } catch (err) {
      if (!err?.responce) {
        console.log(err);
      }
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting,
  } = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values, actions) => {
      console.log("submit");
      handleLogin({ username: values.login, password: values.password });
    },
  });

  return (
    <div className="form__section">
      <h2>Вэлком бэк!</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" className="login__btn">
          Войти
        </button>
        <NavLink to="/">
          <h3 className="">У меня еще нет аккаунта</h3>
        </NavLink>
      </form>
    </div>
  );
}
