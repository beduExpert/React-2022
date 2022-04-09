[`React`](../../../README.md) > [`Sesión 06: Peticiones HTTP y Custom Hook`](../../Readme.md) > [`Reto 02`](../Readme.md) > Solución

---

## Reto 02: Solución

### `Home.js`

```jsx
import React, { useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";
import Card from "../UI/Card/Card";
import styles from "./Home.module.css";

const BASE_URL = "https://react-http-bc6c7-default-rtdb.firebaseio.com/";

function Home() {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });

  const { isLoading, error, request } = useHttp();

  useEffect(() => {
    const fetchUser = async () => {
      const userId = localStorage.getItem("userId");
      const url = `${BASE_URL}/users.json?orderBy="$key"&equalTo="${userId}"`;

      const data = await request({ url });

      setUser({
        first_name: data[userId].first_name,
        last_name: data[userId].last_name,
        email: data[userId].email,
      });
    };

    fetchUser();
  }, [request]);

  const loadingMessage = <h2>Cargando...</h2>;

  const errorMessage = <h2>{error}</h2>;

  return (
    <Card className={styles.home}>
      {isLoading && loadingMessage}
      {error && errorMessage}
      {!isLoading && !error && (
        <React.Fragment>
          <h1>¡Bienvenido!</h1>
          <h2>
            {user.first_name} {user.last_name}
          </h2>
        </React.Fragment>
      )}
    </Card>
  );
}

export default Home;
```
