import "./App.css";
import { NavBar } from "./components/NavBar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Grid } from "./pages/Grid";
import { Detail } from "./pages/Detail";
import { Login } from "./pages/Login";
import { FavList } from "./pages/FavList";

export default function MoviePop() {
  return (
    <div className="App">
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/buscar/" element={<Grid />}></Route>
            <Route
              exact
              path="/pelicula/:peliculaId"
              element={<Detail />}
            ></Route>
            <Route path="/login/" element={<Login />}></Route>
            <Route path="/favorites/" element={<FavList />}></Route>
          </Routes>
        </main>
      </Router>
    </div>
  );
}
