import { NavLink, useNavigate } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";

import background from "/imgs/background.svg";
import arrowBack from "/imgs/arrow-back.svg";
import "../styles/login.scss";

export default function Register() {
  return (
    <>
      <NavLink className="back__btn" to="/login">
        <img src={arrowBack} alt="arrowBack" />
        <h3>Назад</h3>
      </NavLink>
      <div className="register container wrapper">
        <img className="background__img" src={background} alt="background" />
        <RegisterForm />
      </div>
    </>
  );
}
