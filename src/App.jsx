import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login"
import Register from "./pages/Register";
import AuthLayout from "./pages/AuthLayout";
import "./styles/reset.scss"
import "./styles/style.scss"

function App() {

  return (
    <>
      <main className="">
        <Routes>
          <Route path="/authLogin" element={<AuthLayout />} />
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </>
  )
}

export default App
