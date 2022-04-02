import Button from "../UI/Button/Button";
import styles from "./Navigation.module.css";

function Navigation(props) {
  return (
    <nav className={styles.nav}>
      <ul>
        {props.isLoggedIn && (
          <li>
            <a href="/">Usuarios</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <Button onClick={props.onLogout} color="secondary">
              Salir
            </Button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
