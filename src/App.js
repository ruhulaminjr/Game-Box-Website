import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import GameDetails from "./components/Pages/GameDetails/GameDetails";
import Home from "./components/Pages/Home/Home/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<GameDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
