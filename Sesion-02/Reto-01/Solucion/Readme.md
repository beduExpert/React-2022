[`React`](../../../README.md) > [`Sesión 02: React State y Eventos`](../../Readme.md) > [`Reto 01`](../Readme.md) > Solución

---

## Reto 01: Solución

### `ExpenseForm.js`

```jsx
import "./ExpenseForm.css";

function ExpenseForm() {
  const descriptionChangeHandler = (event) => {
    console.log(`Description: ${event.target.value}`);
  };

  const amountChangeHandler = (event) => {
    console.log(`Amount: ${event.target.value}`);
  };

  const dateChangeHandler = (event) => {
    console.log(`Date: ${event.target.value}`);
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense-controls">
        <div className="new-expense-control">
          <label>Descripción</label>
          <input type="text" onChange={descriptionChangeHandler} />
        </div>
        <div className="new-expense-control">
          <label>Monto</label>
          <input
            type="number"
            min="1"
            step="1"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense-control">
          <label>Fecha</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense-actions">
        <button type="submit">Agregar</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
```
