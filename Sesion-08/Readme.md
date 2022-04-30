[`React`](../README.md) > `Sesión 08: Unit Testing en React`

---

# Sesión 08: Unit Testing en React

## 🎯 Objetivos

- Diferenciar los distintos tipos de pruebas
- Crear pruebas unitarias para componentes de React
- Utilizar Mocks para simular funciones y/o módulos

## 🛠 Contenido

Para esta sesión utilizaremos una instalación nueva con Create React App. En esta ocasión no será necesario eliminar ningún archivo como lo hemos hecho en ocasiones anteriores. El único cambio que haremos será en `App.js`, nuestro punto de partida será el siguiente:

```jsx
import React from "react";

function App() {
  return (
    <React.Fragment>
      <h1>Hello World</h1>
    </React.Fragment>
  );
}

export default App;
```

Pondremos en práctica el TDD (Test Driven Development), esto significa que primero crearemos un test que falle, después agregaremos el código necesario a nuestra aplicación para que dicho test pase.

### Interacciones de usuario

Hasta ahora no hemos trabajado con pruebas unitarias, en lugar de eso hemos hecho pruebas manuales o manual testing conforme vamos avanzando. Esto implica que cuando creamos un nuevo componente inicializamos la aplicación con `npm run start` y vamos al navegador para validar los cambios que estamos haciendo, especialmente las interacciones de usuario.

Cuando creamos una aplicación con Create React App ya tenemos configurado lo necesario para realizar pruebas unitarias en escenarios complejos como las interacciones de usuario, podemos evaluar un click o incluso llenar un formulario.

- [`Ejemplo 01: Interacciones de usuario`](./Ejemplo-01/Readme.md)

### Testing asíncrono

Cuando tenemos un componente que hace alguna operación asíncrona como una petición HTTP es importante considerar qué es lo que queremos evaluar mediante unit tests. Por ejemplo, un componente que hace una petición HTTP a una API para renderizar una lista de publicaciones, es más importante probar que la lista se renderiza en lugar de probar que la petición se hizo.

- [`Ejemplo 02: Testing asíncrono`](./Ejemplo-02/Readme.md)

### Mocks

Si hacemos un test de algún componente que está haciendo una llamada a una API externa no es buena práctica dejar que el test haga la petición HTTP. Esto puede ocasionar costos inesperados ya que estás aumentando el tráfico a la API cada vez que se ejecutan los tests, lo cuál puede ser muy frecuente si estás usando algún flujo de integración continua como GitHub Actions. También puede ser que los tests fallen si hay problemas de conexión o si la API está caída.

Para evitar estos escenarios Jest cuenta con Funciones Mock. Los mocks capturan llamadas a funciones como `fetch` y evitan que se haga la petición HTTP, recuerda que debemos enfocarnos probar lo que sucede después de una peticicón HTTP y no la petición como tal.

- [`Ejemplo 03: Mocks`](./Ejemplo-03/Readme.md)
