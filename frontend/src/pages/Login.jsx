import { NavBar } from "../components/NavBar";

export function Login() {
  return (
    <div>
        <NavBar page={"Profile"}/>
        Login
      <form action="">
        
        <label>Usuario</label> <input type="text" />
        <label>Contraseña</label> <input type="password" />
        <button type="sumbit">Ingresar</button>
      </form>
    </div>
  );
}
