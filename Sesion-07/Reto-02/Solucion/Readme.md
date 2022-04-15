[`React`](../../../README.md) > [`Sesión 07: React Router`](../../Readme.md) > [`Reto 02`](../Readme.md) > Solución

---

## Reto 02: Solución

### `App.js`

```jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Public from "./components/Public/Public";
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Public />} />
          <Route path="/login" element={<Login />} />
          <Route path="/gallery/*" element={<Gallery />} />
          <Route
            path="/home/:userId"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
```

### `Home.js`

```jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import Card from "../UI/Card/Card";
import styles from "./Home.module.css";

const BASE_URL = "https://react-http-bc6c7-default-rtdb.firebaseio.com/";

function Home() {
  const { userId } = useParams();
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });

  const { isLoading, error, request } = useHttp();

  useEffect(() => {
    const fetchUser = async () => {
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

### `Login.js`

```jsx
import React, { useState, useEffect, useReducer, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import styles from "./Login.module.css";
import AuthContext from "../../context/AuthContext";

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_EMAIL":
      return {
        ...state,
        email: action.payload,
        emailIsValid: action.payload.includes("@"),
      };
    case "UPDATE_PASSWORD":
      return {
        ...state,
        password: action.payload,
        passwordIsValid: action.payload.trim().length > 6,
      };
    case "INPUT_BLUR":
      return {
        ...state,
        emailIsValid: state.email.includes("@"),
        passwordIsValid: state.password.trim().length > 6,
      };
    default:
      return state;
  }
}

function Login() {
  const { onLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const [formIsValid, setFormIsValid] = useState(false);

  const [state, dispatch] = useReducer(reducer, {
    email: "",
    emailIsValid: null,
    password: "",
    passwordIsValid: null,
  });

  const { emailIsValid, passwordIsValid } = state;

  useEffect(() => {
    const timer = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatch({ type: "UPDATE_EMAIL", payload: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatch({ type: "UPDATE_PASSWORD", payload: event.target.value });
  };

  const validateHandler = () => {
    dispatch({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    onLogin(state.email, (userId) => {
      if (from === "/home") from = `${from}/${userId}`;
      navigate(from, { replace: true });
    });
  };

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${styles.control} ${
            state.emailIsValid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="email">Correo</label>
          <input
            type="email"
            id="email"
            value={state.email}
            onChange={emailChangeHandler}
            onBlur={validateHandler}
          />
        </div>
        <div
          className={`${styles.control} ${
            state.passwordIsValid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={state.password}
            onChange={passwordChangeHandler}
            onBlur={validateHandler}
          />
        </div>
        <div className={styles.actions}>
          <Button type="submit" disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default Login;
```

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

  const loginHandler = async (email, callback) => {
    try {
      const user = await fetchUser(email);
      const userId = Object.keys(user)[0];

      if (!userId) throw new Error("Correo inválido");

      localStorage.setItem("isLoggedIn", "1");
      localStorage.setItem("userId", userId);
      setIsLoggedIn(true);

      return callback(userId);
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
