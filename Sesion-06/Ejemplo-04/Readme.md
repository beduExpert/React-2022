[`React`](../../README.md) > [`Sesión 06: Peticiones HTTP y Custom Hooks`](../Readme.md) > `Ejemplo 04: Custom HTTP hook`

---

## Ejemplo 04: Custom HTTP hook

Empecemos creando una nueva carpeta `src/hooks` y dentro crearemos un archivo `use-http.js`. Este nuevo hook contendrá la lógica que hemos usado hasta ahora para enviar peticiones HTTP.

```jsx
import { useState } from "react";

function useHttp() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
}

export default useHttp;
```

Los hooks personalizados deben empezar con `use` igual a todos los hooks que hemos usado. Empezamos agregando los estados de carga y de error, ahora necesitamos una lógica similar a la que usamos en el componente `Home` pero más flexible para que este hook se pueda usar con cualquier tipo de petición HTTP.

```jsx
import { useState } from "react";

function useHttp() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = async (requestConfig) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(requestConfig.url, {
      method: requestConfig.method ? requestConfig.method : "GET",
      headers: requestConfig.headers ? requestConfig.headers : {},
      body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
    });
  };
}

export default useHttp;
```

En lugar de `fetchUser` creamos una función con un nombre más genérico `request`. Esta función tiene como parámetro `requestConfig` el cual es un objeto con todo lo que necesitamos para usar `fetch`. Contiene `url`, `method`, `headers` y `body`. También hemos agregado cierta lógica que nos permite asignar valores por defecto en caso que `requestConfig` no contenga alguna de las propiedades.

```jsx
import { useState } from "react";

function useHttp() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = async (requestConfig) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) throw new Error("Algo salió mal :(");

      setIsLoading(false);
      return await response.json();
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };
}

export default useHttp;
```

Agregamos un `try/catch` para poder manejar cualquier error que suceda al momento de hacer la petición HTTP. Dependiendo del resultado estamos actualizando los estados `isLoading` y `error`. Si todo sale bien regresamos el `body` de la respuesta a nuestra petición.

```jsx
import { useCallback, useState } from "react";

function useHttp() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(async (requestConfig) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) throw new Error("Algo salió mal :(");

      setIsLoading(false);
      return await response.json();
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  return { isLoading, error, request };
}

export default useHttp;
```

Aquí tenemos que usar un hook que no hemos visto antes. El hook `useCallback` devuelve una versión memorizada del callback que solo cambia si una de las dependencias ha cambiado. Necesitamos crear una versión memorizada de `request` para asegurarle a React que el contenido de esa función no va a cambiar, esto será útil cuando quieras usar `request` en un `useEffect`.

El paso final es devolver un objeto con `isLoading`, `error`, y `request`. Cuando usemos este hook podemos destructurar estas propiedades y usarlas como hemos usado otros hooks.
