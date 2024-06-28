import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login"
import "./styles/reset.scss"
import "./styles/style.scss"

function App() {

  return (
    <>
      <main className="container wrapper">
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/:id" element={<Detail />} /> */}
        </Routes>
      </main>
    </>
  )
}

export default App
