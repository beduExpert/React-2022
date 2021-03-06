[`React`](../README.md) > `Sesi贸n 06: Peticiones HTTP y Custom Hooks`

---

# Sesi贸n 06: Peticiones HTTP y Custom Hooks

## 馃幆 Objetivos

- Realizar peticiones HTTP con React y el hook useEffect
- Manejar errores HTTP
- Crear hooks personalizados

## 馃洜 Contenido

Antes de empezar aseg煤rate de contar con un proyecto de Firebase listo. Puedes consultar una gu铆a r谩pida [aqu铆](./Firebase/Readme.md).

### Peticiones HTTP

Existen varias librer铆as que nos ayudan con las peticiones HTTP y que se acoplan muy bien con React. [Axios](https://axios-http.com/) es un ejemplo de una librer铆a muy popular para realizar peticiones HTTP. Como no queremos enfocarnos en los detalles de otras librer铆as, en esta sesi贸n trabajaremos con la [API Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch) nativa de JavaScript.

- [`Ejemplo 01: Fetch con React`](./Ejemplo-01/Readme.md)

- [`Reto 01: Peticiones HTTP`](./Reto-01/Readme.md)

### `useEffect` para enviar peticiones HTTP

Ya vimos c贸mo hacer una petici贸n HTTP usando `fetch` y un _event handler_. En ocasiones necesitamos realizar una petici贸n HTTP al momento de renderizar o cargar un componente, para esto podemos apoyarnos del hook `useEffect` que como sabes nos sirve para trabajar con efectos secundarios, recuerda que las peticiones HTTP se consideran efectos secundarios.

- [`Ejemplo 02: useEffect y fetch`](./Ejemplo-02/Readme.md)

- [`Ejemplo 03: Manejo de errores y del estado de carga`](./Ejemplo-03/Readme.md)

### Custom Hooks

Hasta ahora hemos usado distintos hooks que ya vienen con React, adem谩s de estos hooks React nos permite crear nuestros propios hooks con la l贸gica que necesitemos.

- [`Ejemplo 04: Custom HTTP hook`](./Ejemplo-04/Readme.md)

- [`Reto 02: Usando custom hooks`](./Reto-02/Readme.md)

## 馃摑 Postwork

- [`Postwork`](./Postwork/Readme.md)
