[`React`](../README.md) > `Sesi贸n 05: Efectos Secundarios, Reducers y Context`

---

# Sesi贸n 05: Efectos Secundarios, Reducers y Context

## 馃幆 Objetivos

- Manejar efectos secundarios usando el hook useEffect
- Manipular el state con l贸gica compleja mediante el uso del hook useReducer
- Pasar datos entre componentes sin enviar props en cada nivel

## 馃洜 Contenido

Para esta sesi贸n usaremos un nuevo proyecto. Despu茅s de instalar una nueva aplicaci贸n con `npx create-react-app` copia el contenido del [Proyecto Inicial](./Proyecto-Inicial/).

### useEffect Hook

Las mutaciones, suscripciones, temporizadores, registro y otros efectos secundarios no est谩n permitidos dentro del cuerpo principal de un componente de funci贸n (denominado como _render phase_ de React). El hook `useEffect` nos permite ejecutar una funci贸n que produce efectos secundarios dentro de un componente de React.

Por defecto, los efectos se ejecutar despu茅s de cada renderizado pero podemos controlar este comportamiento definiendo dependencias.

- [`Ejemplo 01: useEffect Hook`](./Ejemplo-01/Readme.md)

- [`Reto 01: useEffect con dependencias`](./Reto-01/Readme.md)

- [`Ejemplo 02: Limpiando efectos`](./Ejemplo-02/Readme.md)

### useReducer Hook

El hook `useReducer` nos ayuda a manejar el state por lo que es similar al hook `useState` pero con capacidades distintas que nos permiten trabajar con state m谩s complejo. Por ejemplo, m煤ltiples states, m煤ltiples formas de cambiar el state o dependencias con otros states.

- [`Ejemplo 03: useReducer Hook`](./Ejemplo-03/Readme.md)

- [`Reto 02: useReducer Hook`](./Reto-02/Readme.md)

### useContext Hook

Context provee una forma de pasar datos a trav茅s del 谩rbol de componentes sin tener que pasar `props` manualmente en cada nivel. Un ejemplo es `isLoggedIn` y `logoutHandler` que tenemos en `App`, los pasamos mediante `props` al componente `Header` pero este componene no los utiliza, solo los recibe para pasarlos nuevamente al componente `Navigation`. Con context podemos saltarnos `Header` y acceder a lo que necesitamos directamente en `Navigation`.

- [`Ejemplo 04: useContext Hook`](./Ejemplo-04/Readme.md)

Si lo necesitas puedes revisar el c贸digo final de la aplicaci贸n que trabajamos en esta sesi贸n: [Proyecto Terminado](./Proyecto-Terminado/)

## 馃摑 Postwork

- [`Postwork`](./Postwork/Readme.md)
