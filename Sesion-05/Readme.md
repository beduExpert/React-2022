[`React`](../README.md) > `Sesión 05: Efectos Secundarios, Reducers y Context`

---

# Sesión 05: Efectos Secundarios, Reducers y Context

## 🎯 Objetivos

- Manejar efectos secundarios usando el hook useEffect
- Manipular el state con lógica compleja mediante el uso del hook useReducer
- Pasar datos entre componentes sin enviar props en cada nivel

## 🛠 Contenido

Para esta sesión usaremos un nuevo proyecto. Después de instalar una nueva aplicación con `npx create-react-app` copia el contenido del [Proyecto Inicial](./Proyecto-Inicial/).

### useEffect Hook

Las mutaciones, suscripciones, temporizadores, registro y otros efectos secundarios no están permitidos dentro del cuerpo principal de un componente de función (denominado como _render phase_ de React). El hook `useEffect` nos permite ejecutar una función que produce efectos secundarios dentro de un componente de React.

Por defecto, los efectos se ejecutar después de cada renderizado pero podemos controlar este comportamiento definiendo dependencias.

- [`Ejemplo 01: useEffect Hook`](./Ejemplo-01/Readme.md)

- [`Reto 01: useEffect con dependencias`](./Reto-01/Readme.md)

- [`Ejemplo 02: Limpiando efectos`](./Ejemplo-02/Readme.md)

### useReducer Hook

El hook `useReducer` nos ayuda a manejar el state por lo que es similar al hook `useState` pero con capacidades distintas que nos permiten trabajar con state más complejo. Por ejemplo, múltiples states, múltiples formas de cambiar el state o dependencias con otros states.

- [`Ejemplo 03: useReducer Hook`](./Ejemplo-03/Readme.md)

- [`Reto 02: useReducer Hook`](./Reto-02/Readme.md)

### useContext Hook

Context provee una forma de pasar datos a través del árbol de componentes sin tener que pasar `props` manualmente en cada nivel. Un ejemplo es `isLoggedIn` y `logoutHandler` que tenemos en `App`, los pasamos mediante `props` al componente `Header` pero este componene no los utiliza, solo los recibe para pasarlos nuevamente al componente `Navigation`. Con context podemos saltarnos `Header` y acceder a lo que necesitamos directamente en `Navigation`.

- [`Ejemplo 04: useContext Hook`](./Ejemplo-04/Readme.md)

Si lo necesitas puedes revisar el código final de la aplicación que trabajamos en esta sesión: [Proyecto Terminado](./Proyecto-Terminado/)

## 📝 Postwork

- [`Postwork`](./Postwork/Readme.md)
