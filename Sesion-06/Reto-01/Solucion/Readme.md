[`React`](../../../README.md) > [`Sesión 06: Peticiones HTTP y Custom Hook`](../../Readme.md) > [`Reto 01`](../Readme.md) > Solución

---

## Reto 01: Solución

### `AuthContext.js`

```jsx
import React, { useState, useEffect } from "react";

const BASE_URL = "https://react-http-bc6c7-default-rtdb.firebaseio.com/";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: () => {},
});

export function AuthContextProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isLoggedIn");

    if (isAuthenticated === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const fetchUser = async (email) => {
    const url = `${BASE_URL}users.json?orderBy="email"&equalTo="${email}"`;
    const response = await fetch(url);

    if (!response.ok) throw new Error("Algo salió mal");

    return response.json();
  };

  const loginHandler = async (email) => {
    try {
      const user = await fetchUser(email);
      const userId = Object.keys(user)[0];

      if (!userId) throw new Error("Correo inválido");

      localStorage.setItem("isLoggedIn", "1");
      localStorage.setItem("userId", userId);
      setIsLoggedIn(true);
    } catch (error) {
      console.log("Error:", error.message);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userId");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
```
