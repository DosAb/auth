import { useFormik } from "formik";
import { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { registerSchema } from "../schemas";
import { increment } from "../store/counterSlice";
import { postRegister } from "../api/axios";

import eyeOpenedImg from "/imgs/eye-opened.svg";
import eyeClosedImg from "/imgs/eye-closed.svg";

export default function RegisterForm() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleIncrement() {
    dispatch(increment());
    console.log(count);
  }

  const [succes, setSucces] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handlePasswordShow = () => setShowPassword(!showPassword);
  const handleConfirmPasswordShow = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const handleRegister = async (data) => {
    try {
      const response = await postRegister(data);
      console.log(response.data);
    } catch (err) {
      if (!err?.response) {
        console.log(err);
      }
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting,
  } = useFormik({
    initialValues: {
      email: "",
      login: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values, actions) => {
      console.log("submit");
      actions.resetForm();
      handleRegister({
        email: values.email,
        username: values.login,
        password: values.password,
      });
      navigate("/authLayout");
    },
  });

  function testPasswordValidation(password, condition, text) {
    const icon = password ? (condition ? "✅" : "❌") : "";
    const classname = password ? (condition ? "correct" : "error") : "";
    return (
      <li className={classname}>
        {text} {icon}
      </li>
    );
  }

  return (
    <div className="form__section">
      <h2>Создать аккаунт Lorby</h2>
      <form onSubmit={handleSubmit}>
        {errors.email && touched.email && (
          <p className="error">{errors.email}</p>
        )}
        <input
          className={errors.email && touched.email ? "input-error" : ""}
          type="email"
          placeholder="Введи адрес почты"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        {errors.login && touched.login && (
          <p className="error">{errors.login}</p>
        )}
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
          {/* {errors.password && touched.password && <p className="error">{errors.password}</p>} */}
          <input
            type={showPassword ? "text" : "password"}
            className={
              errors.password && touched.password ? "input-error red" : ""
            }
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
        <ul className="form__validation-list">
          {testPasswordValidation(
            values.password,
            values.password.length >= 8 && values.password.length <= 15,
            "От 8 до 15 символов"
          )}
          {testPasswordValidation(
            values.password,
            /[a-z]/.test(values.password) && /[A-Z]/.test(values.password),
            "Строчные и прописные буквы"
          )}
          {testPasswordValidation(
            values.password,
            /\d/.test(values.password),
            "Минимум 1 цифра"
          )}
          {testPasswordValidation(
            values.password,
            /[^a-zA-Z0-9]/.test(values.password),
            'Минимум 1 спецсимвол (!, ", #, $...)'
          )}
        </ul>
        <div className="input__container">
          {errors.confirmPassword && touched.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}
          <input
            type={showConfirmPassword ? "text" : "password"}
            className={
              errors.confirmPassword && touched.confirmPassword
                ? "input-error"
                : ""
            }
            placeholder="Повтори пароль"
            name="confirmPassword"
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
        <button type="submit" className="login__btn">
          Далее
        </button>
      </form>
    </div>
  );
}
