import Navigation from "./Navigation";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles["main-header"]}>
      <h2>React App</h2>
      <Navigation />
    </header>
  );
}

export default Header;
