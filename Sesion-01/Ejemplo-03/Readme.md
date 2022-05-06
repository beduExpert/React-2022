[`React`](../../README.md) > [`Sesión 01: Fundamentos de React`](../Readme.md) > `Ejemplo 03: Children Props`

---

## Ejemplo 03: Children Props

### Objetivos

- Construir componentes y pasar datos entre ellos mediante props
- Utilizar children props para crear componentes que sirven como contenedores

### Desarrollo

En este ejemplo vamos a crear un nuevo componente `Card` que nos servirá como contenedor o wrapper de varios componentes. Este componente tendrá los siguientes estilos:

```css
.card {
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
}
```

Esto significa que podemos quitar `border-radius` y `box-shadow` tanto de `.expenses` como de `.expense-item`. Ahora creamos nuestro componente `Card`:

```jsx
import "./Card.css";

export function Card(props) {
  const classes = `card ${props.className}`;

  return <div className={classes}>{props.children}</div>;
}

export default Card;
```

Primero creamos una variable `classes` que contiene la clase `card` y cualquier otra clase le pasemos a este componente mediante props. En el JSX vemos que estamos usando `props.children`, como ya vimos `children` es un prop que tienen todos los componentes de React y representa el contenido que se encuentre entre las etiquetas de un componente. Vamos a usar este componente en `Expenses`:

```jsx
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./Expenses.css";

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        date={props.items[0].date}
        title={props.items[0].title}
        amount={props.items[0].amount}
      />
      <ExpenseItem
        date={props.items[1].date}
        title={props.items[1].title}
        amount={props.items[1].amount}
      />
      <ExpenseItem
        date={props.items[2].date}
        title={props.items[2].title}
        amount={props.items[2].amount}
      />
    </Card>
  );
}

export default Expenses;
```

También lo usaremos en `ExpenseItem`:

```jsx
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item-description">
        <h2>{props.title}</h2>
        <div className="expense-item-price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
```

Visualmente nuestra aplicación no ha cambiado, pero ahora tenemos un componente que nos sirve como contenedor y evita que dupliquemos estilos.
