import { useContext } from "react";
import Button from "../UI/Button/Button";
import styles from "./Navigation.module.css";
import AuthContext from "../../context/AuthContext";

function Navigation() {
  const { isLoggedIn, onLogout } = useContext(AuthContext);

  return (
    <nav className={styles.nav}>
      <ul>
        {isLoggedIn && (
          <li>
            <a href="/">Usuarios</a>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <Button onClick={onLogout} color="secondary">
              Salir
            </Button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
