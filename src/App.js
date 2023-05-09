import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./page/Register/Register";
import Login from "./page/Login/Login";
import Home from "./page/home/Home";
import ProtectedRoutes from "./ProtectedRoutes";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
