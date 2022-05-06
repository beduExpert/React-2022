[`React`](../../README.md) > [`Sesión 05: Efectos Secundarios, Reducers y Context`](../Readme.md) > `Ejemplo 04: useContext Hook`

---

## Ejemplo 04: useContext Hook

### Objetivos

- Pasar datos entre componentes sin enviar props en cada nivel utilizando Context

### Desarrollo

Empecemos creando una nueva carpeta dentro de `src` la cual llamaremos `context` y dentro crearemos un nuevo archivo llamado `AuthContext.js`.

```jsx
import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
});

export default AuthContext;
```

Con la función `createContext` creamos un nuevo contexto, por el momento solo necesitamos la propiedad `isLoggedIn`. Antes de poder leer este valor es necesario envolver todos los componentes que van a tener acceso al contexto dentro de un `Provider`, lo haremos en `App` para envolver el resto de componentes.

```jsx
import React, { useState, useEffect } from "react";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import AuthContext from "./context/AuthContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isLoggedIn");

    if (isAuthenticated === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn }}>
      <Header onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
```

Después de importar `AuthContext` usamos `<AuthContext.Provider>` para que toda la aplicación tenga acceso al context. El `Provider` necesita un `value` el cual es el estado inicial del context. Ya podemos borrar el prop `isAuthenticated`. Igualmente en `Header`:

```jsx
import Navigation from "./Navigation";
import styles from "./Header.module.css";

function Header(props) {
  return (
    <header className={styles["main-header"]}>
      <h2>React App</h2>
      <Navigation onLogout={props.onLogout} />
    </header>
  );
}

export default Header;
```

Ahora para poder leer el valor de `isLoggedIn` usamos el hook `useContext` el cual recibe como argumento `AuthContext` y nos retorna el context que definimos previamente. Veamos cómo queda `Navigation`:

```jsx
import { useContext } from "react";
import Button from "../UI/Button/Button";
import styles from "./Navigation.module.css";
import AuthContext from "../../context/AuthContext";

function Navigation(props) {
  const { isLoggedIn } = useContext(AuthContext);
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
```

Gracias a este context podemos comunicar `isLoggedIn` entre componentes sin necesidad de pasarlo mediante props. También podemos agregar las funciones que manipulan `isLoggedIn` dentro del context, de hecho, podemos crear un componente que nos permita abstraer toda la lógica de autenticación. Realicemos el siguiente cambio en `AuthContext.js`:

```jsx
import React, { useState, useEffect } from "react";

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

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
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

Además de exportar `AuthContext` creamos un componente que se encarga de la autenticación y retorna `<AuthContext.Provider>`. En lugar de `App` vamos a agregarlo en `index.js`:

```jsx
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import "./index.css";

ReactDOM.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  document.getElementById("root")
);
```

Este cambio nos permite simplificar mucho más `App`:

```jsx
import React, { useContext } from "react";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import AuthContext from "./context/AuthContext";

function App() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <React.Fragment>
      <Header />
      <main>
        {!isLoggedIn && <Login />}
        {isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
```

Ya no necesitamos pasar props, cualquier componente que necesite `isLoggedIn`, `onLogin`, `onLogout` puede usar el hook `useContext` para leer o modificar el context.
