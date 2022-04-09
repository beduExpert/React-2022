[`React`](../README.md) > `Sesión 06: Peticiones HTTP y Custom Hooks`

---

# Sesión 06: Peticiones HTTP y Custom Hooks

## 🎯 Objetivos

- Realizar peticiones HTTP con React y el hook useEffect
- Manejar errores HTTP
- Crear hooks personalizados

## 🛠 Contenido

Antes de empezar asegúrate de contar con un proyecto de Firebase listo. Puedes consultar una guía rápida [aquí](./Firebase/Readme.md).

### Peticiones HTTP

Existen varias librerías que nos ayudan con las peticiones HTTP y que se acoplan muy bien con React. [Axios](https://axios-http.com/) es un ejemplo de una librería muy popular para realizar peticiones HTTP. Como no queremos enfocarnos en los detalles de otras librerías, en esta sesión trabajaremos con la [API Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch) nativa de JavaScript.

- [`Ejemplo 01: Fetch con React`](./Ejemplo-01/Readme.md)

- [`Reto 01: Peticiones HTTP`](./Reto-01/Readme.md)

### `useEffect` para enviar peticiones HTTP

Ya vimos cómo hacer una petición HTTP usando `fetch` y un _event handler_. En ocasiones necesitamos realizar una petición HTTP al momento de renderizar o cargar un componente, para esto podemos apoyarnos del hook `useEffect` que como sabes nos sirve para trabajar con efectos secundarios, recuerda que las peticiones HTTP se consideran efectos secundarios.

- [`Ejemplo 02: useEffect y fetch`](./Ejemplo-02/Readme.md)

- [`Ejemplo 03: Manejo de errores y del estado de carga`](./Ejemplo-03/Readme.md)
