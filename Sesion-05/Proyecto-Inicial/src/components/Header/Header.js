import Navigation from "./Navigation";
import styles from "./Header.module.css";

function Header(props) {
  return (
    <header className={styles["main-header"]}>
      <h2>React App</h2>
      <Navigation
        isLoggedIn={props.isAuthenticated}
        onLogout={props.onLogout}
      />
    </header>
  );
}

export default Header;
