import "./App.css";
import { NavBar } from "./components/NavBar";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Home } from "./pages/Home";
import { Grid } from "./pages/Grid";
import { Detail } from "./pages/Detail";

export default function MoviePop() {
  return (
    <div className="App">
      <Router>
      <div>
        <NavBar/>
        <main>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/buscar" element={<Grid/>}>Ramon</Route>
            <Route path="/detalle" element={<Detail/>}></Route>
          </Routes>
        </main>
      </div>
    </Router>
    </div>
  );
}