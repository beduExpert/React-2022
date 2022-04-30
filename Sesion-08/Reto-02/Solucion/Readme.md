[`React`](../../../README.md) > [`Sesión 08: Unit Testing en React`](../../Readme.md) > [`Reto 02`](../Readme.md) > Solución

---

## Reto 02: Solución

### `Todos.test.js`

```jsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todos from "./Todos";

describe("Todos component", () => {
  beforeEach(() => render(<Todos />));

  test("renders todos if request succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [
        {
          userId: 1,
          id: 1,
          title: "Fake Title",
          body: "Fake Body",
        },
      ],
    });

    const button = screen.getByRole("button");
    userEvent.click(button);

    const listItems = await screen.findAllByRole("listitem");
    expect(listItems).not.toHaveLength(0);
  });

  test("renders error message if request fails", async () => {
    const errorMessage = "Request failed";

    window.fetch = jest.fn();
    window.fetch.mockRejectedValueOnce(new Error(errorMessage));

    const button = screen.getByRole("button");
    userEvent.click(button);

    const error = await screen.findByText(errorMessage);
    expect(error).toBeInTheDocument;

    const listItems = await screen.queryAllByRole("listitem");
    expect(listItems).toBeNull;
  });
});
```

### `Todos.js`

```jsx
import React, { useState } from "react";

function Todos() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);

  const clickHandler = () => {
    return fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((e) => setError(e.message));
  };

  return (
    <React.Fragment>
      <button onClick={clickHandler}>Buscar</button>
      <ul>
        {error && <p>{error}</p>}
        {!error && todos.map((todo) => <li key={todo.id}>{todo.title}</li>)}
      </ul>
    </React.Fragment>
  );
}

export default Todos;
```
