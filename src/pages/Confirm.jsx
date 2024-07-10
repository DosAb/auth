import { postLogin } from "../api/axios";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import background from "/imgs/background.svg";
import "../styles/confirm.scss"


export default function Confirm()
{
  const login = useSelector((state) => state.login);

  const navigate = useNavigate()
  console.log(login)

    const handleLogin = async (data) => {
        try {
          const response = await postLogin(login.value);
          // Execute myFunction after a 3-second delay (3000 milliseconds)
          setTimeout(()=>{
            navigate('/authLayout')
          }, 1000);
          console.log(response.data);
        } catch (err) {
          if (!err?.response) {
            console.log(err);
          }
          alert("что-то пошло не так")
        }
    };

    return (
        <main className="confirm container wrapper">
        <div className="confirm__container">
          <img src={background} alt="background" />
          <h1>Lorby</h1>
          <h2>твой личный репетитор</h2>
        </div>
        <div className="confirm__description">
          <h3>Выслали письмо со ссылкой для завершения регистрации на example@gmail.com</h3>
          <p>Если письмо не пришло, не спеши ждать совиную почту - лучше проверь ящик “Спам” <span>(´｡• ω •｡`)</span></p>
          <button onClick={() => {handleLogin()}}>подтвердил регистрацию</button>
          <button onClick={() => {}}>Письмо не пришло</button>
        </div>
      </main>
    )
}