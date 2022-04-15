import { NavBar } from "../components/NavBar";
import logo from "../img/cinema.png";

export function Home() {
  return (
    <div>
      <NavBar page={"Home"}/>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>MoviePop!</p>
    </header>
    </div>
  );
}
