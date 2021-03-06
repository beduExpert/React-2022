[`React`](../README.md) > `Sesi贸n 08: Unit Testing en React`

---

# Sesi贸n 08: Unit Testing en React

## 馃幆 Objetivos

- Diferenciar los distintos tipos de pruebas
- Crear pruebas unitarias para componentes de React
- Utilizar Mocks para simular funciones y/o m贸dulos

## 馃洜 Contenido

Para esta sesi贸n utilizaremos una instalaci贸n nueva con Create React App. En esta ocasi贸n no ser谩 necesario eliminar ning煤n archivo como lo hemos hecho en ocasiones anteriores. El 煤nico cambio que haremos ser谩 en `App.js`, nuestro punto de partida ser谩 el siguiente:

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

Pondremos en pr谩ctica el TDD (Test Driven Development), esto significa que primero crearemos un test que falle, despu茅s agregaremos el c贸digo necesario a nuestra aplicaci贸n para que dicho test pase.

### Interacciones de usuario

Hasta ahora no hemos trabajado con pruebas unitarias, en lugar de eso hemos hecho pruebas manuales o manual testing conforme vamos avanzando. Esto implica que cuando creamos un nuevo componente inicializamos la aplicaci贸n con `npm run start` y vamos al navegador para validar los cambios que estamos haciendo, especialmente las interacciones de usuario.

Cuando creamos una aplicaci贸n con Create React App ya tenemos configurado lo necesario para realizar pruebas unitarias en escenarios complejos como las interacciones de usuario, podemos evaluar un click o incluso llenar un formulario.

- [`Ejemplo 01: Interacciones de usuario`](./Ejemplo-01/Readme.md)

### Testing as铆ncrono

Cuando tenemos un componente que hace alguna operaci贸n as铆ncrona como una petici贸n HTTP es importante considerar qu茅 es lo que queremos evaluar mediante unit tests. Por ejemplo, un componente que hace una petici贸n HTTP a una API para renderizar una lista de publicaciones, es m谩s importante probar que la lista se renderiza en lugar de probar que la petici贸n se hizo.

- [`Ejemplo 02: Testing as铆ncrono`](./Ejemplo-02/Readme.md)

### Mocks

Si hacemos un test de alg煤n componente que est谩 haciendo una llamada a una API externa no es buena pr谩ctica dejar que el test haga la petici贸n HTTP. Esto puede ocasionar costos inesperados ya que est谩s aumentando el tr谩fico a la API cada vez que se ejecutan los tests, lo cu谩l puede ser muy frecuente si est谩s usando alg煤n flujo de integraci贸n continua como GitHub Actions. Tambi茅n puede ser que los tests fallen si hay problemas de conexi贸n o si la API est谩 ca铆da.

Para evitar estos escenarios Jest cuenta con Funciones Mock. Los mocks capturan llamadas a funciones como `fetch` y evitan que se haga la petici贸n HTTP, recuerda que debemos enfocarnos probar lo que sucede despu茅s de una peticic贸n HTTP y no la petici贸n como tal.

- [`Ejemplo 03: Mocks`](./Ejemplo-03/Readme.md)

- [`Reto 01: Mock de errores`](./Reto-01/Readme.md)

- [`Reto 02: Mock e interacciones`](./Reto-02/Readme.md)

## 馃摑 Postwork

- [`Postwork`](./Postwork/Readme.md)
