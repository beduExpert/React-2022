[`React`](../../README.md) > [`Sesión 01: Fundamentos de React`](../Readme.md) > [`Reto 02`](../Readme.md) > Solución

---

## Reto 02: Solución

### `Expenses.js`

```jsx
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  return (
    <div className="expenses">
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
    </div>
  );
}

export default Expenses;
```

### `App.js`

```jsx
import Expenses from "./Expenses";

function App() {
  const expenses = [
    {
      id: Math.random(),
      date: new Date(2022, 4, 23),
      title: "Libros",
      amount: 250,
    },
    {
      id: Math.random(),
      date: new Date(2022, 2, 20),
      title: "Café",
      amount: 50,
    },
    {
      id: Math.random(),
      date: new Date(2022, 3, 18),
      title: "Comida",
      amount: 600,
    },
  ];

  return (
    <div>
      <h1>Hello World</h1>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
```
