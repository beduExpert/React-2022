[`React`](../../README.md) > [`Sesión 05: Efectos Secundarios, Reducers y Context`](../Readme.md) > `Ejemplo 03: useReducer Hook`

---

## Ejemplo 03: useReducer Hook

### Objetivos

- Manipular el state con lógica compleja mediante el uso del hook useReducer

### Desarrollo

El componente `Login` es un claro ejemplo de un state complejo. Por una parte tenémos múltiples states y por otro lado algunos de nuestros handlers están actualizando un state que depende de otro:

```jsx
const validateEmailHandler = () => {
  setEmailIsValid(email.includes("@"));
};
```

Veamos `setEmailIsValid()` por ejemplo, está actualizando la variable de estado `emailIsValid` pero para hacerlo depende del valor de otra variable de estado diferente `email`. Ya hemos vimos cómo usar `prevState` para actualizar un state que depende de un state anterior pero en este caso no aplica porque dependemos de un state completamente distinto no de una versión anterior.

Después de importar `useReducer` vamos a crear una nueva función fuera del componente `Login`:

```jsx
function emailReducer(state, action) {
  return { value: "", isValid: false };
}
```

Esta función retorna un state y en este caso lo usaremos para combinar tanto `email` como `emailIsValid`. Podríamos usar el mismo reducer para manipular también `password` y `passwordIsValid` pero vamos a enfocarnos en el correo primero para que sea más sencillo y para poder compararlo con `useState`. Ahora dentro del componente `Login` usamos el hook `useReducer`:

```jsx
const [emailState, dispatchEmail] = useReducer(emailReducer, {
  value: "",
  isValid: null,
});
```

El primer argumento de `useReducer` es la función que creamos afuera y el segundo argumento es el state inicial. Este hook nos retorna el state y una función que podemos usar para actualizar dicho state, hasta ahora notarás que es muy similar a `useState`. Veamos qué pasa en `emailChangeHandler`:

```jsx
const emailChangeHandler = (event) => {
  dispatchEmail({ type: "UPDATE_EMAIL", payload: event.target.value });
};
```

El objeto que estamos pasando a `dispatchEmail` corresponde al parámetro `action` de la función `emailReducer`. La propiedad `type` define el nombre de la acción y por convención usamos mayúsculas. La siguiente propiedad es `payload` y corresponde al valor que necesita el reducer, en este caso, el valor del input. Aprovechemos para actualizar también `isValid`:

```jsx
const validateEmailHandler = () => {
  dispatchEmail({ type: "INPUT_BLUR" });
};
```

En esta ocasión no necesitamos un `payload` ya que no vamos a usar el valor del input. Ya podemso regresar a `emailReducer` y terminarlo:

```jsx
function emailReducer(state, action) {
  switch (action.type) {
    case "UPDATE_EMAIL":
      return { value: action.payload, isValid: action.payload.includes("@") };
    case "INPUT_BLUR":
      return { value: state.value, isValid: state.value.includes("@") };
    default:
      return { value: "", isValid: false };
  }
}
```

Usamos un `switch` para evaluar `action.type`. Esto nos indica cuál handler llamó a `dispatchEmail` gracias al nombre que le dimos a cada acción. En el caso de `"UPDATE_EMAIL"` actualizamos `value` con el valor del input el cual viene en el `payload`, y usamos ese mismo valor para evaluar si es un correo válido. En el caso de `"INPUT_BLUR"` dijimos que no necesitamos usar el valor del input, en su lugar usamos el valor actual del state.

Finalmente podemos borrar el state que teníamos anteriormente para el `email` y reemplazarlo con el que produce nuestro nuevo reducer:

```jsx
import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import styles from "./Login.module.css";

function emailReducer(state, action) {
  switch (action.type) {
    case "UPDATE_EMAIL":
      return { value: action.payload, isValid: action.payload.includes("@") };
    case "INPUT_BLUR":
      return { value: state.value, isValid: state.value.includes("@") };
    default:
      return { value: "", isValid: false };
  }
}

function Login(props) {
  const [password, setPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const { isValid } = emailState;

  useEffect(() => {
    const timer = setTimeout(() => {
      setFormIsValid(isValid && password.trim().length > 6);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [isValid, password]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "UPDATE_EMAIL", payload: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(password.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, password);
  };

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${styles.control} ${
            emailState.isValid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="email">Correo</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${styles.control} ${
            passwordIsValid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
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
