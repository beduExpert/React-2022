[`React`](../../../README.md) > [`Sesión 07: React Router`](../../Readme.md) > [`Reto 01`](../Readme.md) > Solución

---

## Reto 01: Solución

### `Navigation.js`

```jsx
import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import Button from "../UI/Button/Button";
import styles from "./Navigation.module.css";

function Navigation() {
  const { isLoggedIn, onLogout } = useContext(AuthContext);

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/">Public</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          {isLoggedIn ? (
            <Button color="secondary" onClick={onLogout}>
              Logout
            </Button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
```
