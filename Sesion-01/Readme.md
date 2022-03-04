[`React`](../README.md) > `Sesión 01: Fundamentos de React`

---

# Sesión 01 - Fundamentos de React

## 🎯 Objetivos

- Identificar la ventaja de usar React en lugar de Vanilla JavaScript
- Dominar la sintaxis JSX
- Construir componentes y pasar datos entre ellos mediante props
- Mapear listas y renderizar sus elementos

## 🛠 Contenido

### ¿Qué es React?

React es una librebría open source de JavaScript creada por el equipo de Facebook para desarrollar interfaces de usuario. React está basado en componentes, estos son como piezas de lego independientes que se pueden componer para crear interfaces complejas.

### Componentes

Vamos a retomar la instalación que se hizo durante el prework para desarrollar una aplicación que nos permita dominar los conceptos de esta y las siguientes sesiones. La aplicación que vamos a hacer nos permitirá llevar un registro de gastos.

- [`Ejemplo 01`](Ejemplo-01/Readme.md)

Los componentes de React son reutilizables, si queremos ver varios gastos simplemente debemos agregar las veces que necesitemos el componente `<ExpenseItem />`. Además de esto, en el prework vimos que en JSX podemos usar expresiones de JavaScript, y como los componentes son funciones podemos tener lógica dentro del componente antes de realizar el renderizado.

En nuestro componente `<ExpenseItem />` agregamos la fecha, descripción y monto directamente en el JSX, pero podemos crear variables y usar expresiones para crear un componente que sea más flexible:

```jsx
import "./ExpenseItem.css";

function ExpenseItem() {
  const date = new Date(2022, 4, 23);
  const title = "Libros";
  const ammount = 250;

  return (
    <div className="expense-item">
      <div>{date.toLocaleDateString()}</div>
      <div className="expense-item-description">
        <h2>{title}</h2>
        <div className="expense-item-price">${ammount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
```

> El constructor `Date` genera un objeto `Date` que tiene distintos métodos como `toLocaleDateString()` que genera una cadena con una representación de la fecha en el formato indicado. Esto es de JavaScript, no de React.

### Props

TBD

## 📝 Postwork

TBD
