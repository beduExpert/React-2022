[`React`](../../README.md) > [`Sesión 01: Fundamentos de React`](../Readme.md) > [`Reto 01`](../Readme.md) > Solución

---

## Reto 01: Solución

### `ExpenseDate.js`

```jsx
import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("es-MX", { month: "long" });
  const day = props.date.toLocaleString("es-MX", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date-month">{month}</div>
      <div className="expense-date-year">{year}</div>
      <div className="expense-date-day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
```

### `ExpenseItem.js`

```jsx
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item-description">
        <h2>{props.title}</h2>
        <div className="expense-item-price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
```
