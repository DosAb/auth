import "../styles/login.scss";
import background from "/imgs/background.svg";
import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <>
      <div className="login container wrapper">
        <img className="background__img" src={background} alt="background" />
        <LoginForm />
      </div>
    </>
  );
}
