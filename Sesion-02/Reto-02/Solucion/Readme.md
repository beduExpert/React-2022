[`React`](../../../README.md) > [`Sesión 02: React State y Eventos`](../../Readme.md) > [`Reto 02`](../Readme.md) > Solución

---

## Reto 02: Solución

### `Expenses.js`

```jsx
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [year, setYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onChangeFilter={filterChangeHandler} />
      {filteredExpenses.length === 0 ? (
        <h3>No se encontraron gastos</h3>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          />
        ))
      )}
    </Card>
  );
}

export default Expenses;
```

### `ExpensesFilter.js`

```jsx
import "./ExpensesFilter.css";

function ExpensesFilter(props) {
  const changeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter-control">
        <label>Filtrar por año</label>
        <select selected={props.year} onChange={changeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}

export default ExpensesFilter;
```
