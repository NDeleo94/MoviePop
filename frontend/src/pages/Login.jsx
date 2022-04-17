import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../components/NavBar";

import styles from "../pages styles/Login.module.css";

export function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const history = useNavigate();

  const handleSumbit = (e) => {
    e.preventDefault();
    history("/");
  };

  return (
    <div>
      <NavBar page={"Profile"} />
      <h1 className={styles.login}>MoviePop!</h1>
      <form className={styles.loginContainer} onSubmit={handleSumbit}>
        <div className={styles.loginBox}>
        <input
          className={styles.loginInput}
          type="text"
          placeholder="Usuario"
          onChange={(e) => setUser(e.target.value)}
          value={user}
        />
        <input
          className={styles.loginInput}
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button className={styles.loginButton} type="sumbit">
          Login
        </button>
        </div>
        
      </form>
    </div>
  );
}
