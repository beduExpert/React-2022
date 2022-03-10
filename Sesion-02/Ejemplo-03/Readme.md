[`React`](../../README.md) > [`Sesión 02: React State y Eventos`](../Readme.md) > `Ejemplo 03: prevState`

---

## Ejemplo 03: prevState

En el ejemplo anterior creamos tres variables de estado, una por cada input. No es obligatorio manejar múltiples estados, recuerda que el state puede ser cualquier tipo de dato incluyendo objetos y arreglos por lo que podríamos usar un objeto para agrupar los valores de todos los inputs.

```jsx
const [data, setData] = useState({
  description: "",
  amount: "",
  date: "",
});
```

Aquí por ejemplo usamos un solo state y agrupamos todo en el mismo objeto. Un cambio como este implica ajustar los handlers también ya que cada uno contiene el valor de un solo input, tendríamos que decirle a `setData` que sobreescriba solo un valor del state. Esto se podría lograr haciendo uso de object destructuring, veamos cómo sería si actualizamos `descriptionChangeHandler`:

```jsx
const [data, setData] = useState({
  description: "",
  amount: "",
  date: "",
});

const descriptionChangeHandler = (event) => {
  setData({
    ...data,
    description: event.target.value,
  });
};
```

Con este cambio `setState` copia todo lo que esté en `data` en ese momento y actualiza solamente `description`. Esto nos va a funcionar la mayoría de las veces, sin embargo, React agenda las actualizaciones de estado, es decir, no las hace instantáneamente y esto puede ser un problema cuando queremos actualizar un state que depende de un valor anterior del mismo state, cabe la posibilidad de tener un state desactualizado al momento que React ejecute `setState`.

Cuando queremos actualizar state que depende de un state anterior podemos pasarle una función a `setState` con el argumento `prevState`. React se asegurará de darnos la versión más actualizada de ese state que necesitamos y la guardará en dicho objeto `prevState`.

```jsx
const descriptionChangeHandler = (event) => {
  setData((prevState) => ({
    ...prevState,
    description: event.target.value,
  }));
};
```

Ahora sí, usando `prevState` no corremos el riesgo de sobreescribir un state desactualizado. Nuestro componente completo usando un solo state se vería de la siguiente manera:

```jsx
import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  const [data, setData] = useState({
    description: "",
    amount: "",
    date: "",
  });

  const descriptionChangeHandler = (event) => {
    setData((prevState) => ({
      ...prevState,
      description: event.target.value,
    }));
  };

  const amountChangeHandler = (event) => {
    setData((prevState) => ({
      ...prevState,
      amount: event.target.value,
    }));
  };

  const dateChangeHandler = (event) => {
    setData((prevState) => ({
      ...prevState,
      date: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expense = {
      description: data.description,
      amount: data.amount,
      date: data.date,
    };

    console.log(expense);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense-controls">
        <div className="new-expense-control">
          <label>Descripción</label>
          <input
            type="text"
            value={data.description}
            onChange={descriptionChangeHandler}
          />
        </div>
        <div className="new-expense-control">
          <label>Monto</label>
          <input
            type="number"
            min="1"
            step="1"
            value={data.amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense-control">
          <label>Fecha</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={data.date}
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

> Los cambios en este componente los hicimos para explicar la diferencia de trabajar con múltiples state o con uno solo y para demostrar cómo se debe actualizar el state cuando dependemos de un state anterior. Seguiremos trabajando la aplicación con varios states pero puedes continuar con uno solo si lo deseas.
