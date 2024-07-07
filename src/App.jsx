import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login"
import Register from "./pages/Register";
import AuthLogin from "./components/AuthLogin";
import "./styles/reset.scss"
import "./styles/style.scss"

function App() {

  return (
    <>
      <main className="">
        <Routes>
          <Route path="/authLogin" element={<AuthLogin />} />
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </>
  )
}

export default App
