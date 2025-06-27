import { BrowserRouter, Route, Routes } from "react-router";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import LandinPage from "./pages/LandinPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandinPage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
