[`React`](../README.md) > `Sesi贸n 02: React State y Eventos`

---

# Sesi贸n 02 - React State y Eventos

## 馃幆 Objetivos

- Distinguir los eventos en React
- Manipular el State de un componente mediante el hook useState
- Emplear el State con el input de un usuario

## 馃洜 Contenido

### Event Handlers

En la sesi贸n anterior creamos nuestra aplicaci贸n de gastos y agregamos una lista de elementos, sin embargo, esta lista no es din谩mica. En esta sesi贸n agregaremos nuevos elementos a nuestra lista de gastos y nos apoyaremos de eventos para esto. Los componentes de React manejan eventos de una manera muy similar a como lo hacemos con nodos del DOM cuando usamos JavaScript.

Para ver este tema vamos a empezar creando una nueva carpeta dentro de `components` y la vamos a llamar `NewExpense`, en esta carpeta ir谩n todos los componentes necesarios para crear un formulario que nos permita agregar nuevos gastos. Vamos a crear dos componentes en esta carpeta, `NewExpense` y `ExpenseForm` junto con sus respectivos archivos CSS.

![New Expense Directory](./assets/new-expense-directory.png)

- [`Ejemplo 01: Event Handlers`](./Ejemplo-01/Readme.md)

- [`Reto 01: Event Handlers`](./Reto-01/Readme.md)

### State y useState hook

Ya vimos c贸mo usar los props para pasar informaci贸n entre componentes y hacerlos din谩micos. El state es similar a los props en el sentido que contienen la informaci贸n que el componente necesita, pero difiere de los props porque el state es privado y el componente es el que tiene el control. Cada componente es independiente y tiene su propio state.

Como estamos trabajando con componentes funcionales usaremos el hook useState, recuerda que inicialmente el state era exclusivo de las clases. Los hooks son funciones especiales que permiten a los componentes usar caracter铆sticas de las clases como el state.

- [`Ejemplo 02: useState hook`](./Ejemplo-02/Readme.md)

- [`Ejemplo 03: prevState`](./Ejemplo-03/Readme.md)

### Comunicaci贸n de componente hijo a padre

Nuestro componente `ExpenseForm` ya cuenta con state y es capaz de actualizarlo con la informaci贸n que proporcione el usuario. Ahora necesitamos que esa informaci贸n llegue varios niveles arriba hasta el componente `App` que es donde tenemos la lista `expenses`. 驴C贸mo hacemos esto si antes dijimos que la informaci贸n fluye de componentes padres a hijos? De la misma forma, usando `props`. As铆 como pasamos strings, arreglos u objetos a trav茅s de los `props`, tambi茅n podemos pasar referencias a funciones. Veamos c贸mo hacerlo un nivel a la vez.

- [`Ejemplo 04: Comunicaci贸n hijo a padre`](./Ejemplo-04/Readme.md)

### Renderizado condicional

El renderizado condicional se referie a mostrar cierto contenido u otro dependiendo de si una condici贸n se cumple o no. En nuestra aplicaci贸n por ejemplo, un buen uso ser铆a en la lista de gastos, si tenemos gastos se renderizan pero si no tenemos gastos podemos mostrar un mensaje alternativo.

- [`Reto 02: Renderizado condicional`](./Reto-02/Readme.md)

## 馃摑 Postwork

- [`Postwork`](./Postwork/Readme.md)
