import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import GameDetails from "./components/Pages/GameDetails/GameDetails";
import Home from "./components/Pages/Home/Home/Home";
import Register from "./components/Pages/Register/Register";
import AuthProvider from "./Context/AuthProvider";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game/:id" element={<GameDetails />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
