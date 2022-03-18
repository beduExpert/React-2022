[`React`](../../../README.md) > [`Sesión 03: Trabajando con estilos`](../../Readme.md) > [`Reto 01`](../Readme.md) > Solución

---

## Reto 01: Solución

### `ExpenseForm.js`

```jsx
import { useState } from "react";
import styles from "./ExpenseForm.module.css";

function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [isTitleValid, setIsTitleValid] = useState(true);
  const [isAmountValid, setIsAmountValid] = useState(true);
  const [isDateValid, setIsDateValid] = useState(true);

  const titleChangeHandler = (event) => {
    const { value } = event.target;
    if (value.length > 0) setIsTitleValid(true);
    setTitle(value);
  };

  const amountChangeHandler = (event) => {
    const { value } = event.target;
    if (value.length > 0) setIsAmountValid(true);
    setAmount(value);
  };

  const dateChangeHandler = (event) => {
    const { value } = event.target;
    if (value.length > 0) setIsDateValid(true);
    setDate(value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    validateFields();
    if (!(title && amount && date)) return;

    const expense = {
      title,
      amount,
      date: new Date(date),
    };

    props.onSaveExpense(expense);

    setTitle("");
    setAmount("");
    setDate("");
  };

  const validateFields = () => {
    if (title.trim().length === 0) {
      setIsTitleValid(false);
    }

    if (amount.trim().length === 0) {
      setIsAmountValid(false);
    }

    if (date.trim().length === 0) {
      setIsDateValid(false);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles["new-expense-controls"]}>
        <div
          className={`${styles["new-expense-control"]} ${
            !isTitleValid && styles.invalid
          }`}
        >
          <label>Descripción</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div
          className={`${styles["new-expense-control"]} ${
            !isAmountValid && styles.invalid
          }`}
        >
          <label>Monto</label>
          <input
            type="number"
            min="1"
            step="1"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div
          className={`${styles["new-expense-control"]} ${
            !isDateValid && styles.invalid
          }`}
        >
          <label>Fecha</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className={styles["new-expense-actions"]}>
        <button type="submit">Agregar</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
```
