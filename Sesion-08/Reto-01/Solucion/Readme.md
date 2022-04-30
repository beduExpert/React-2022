[`React`](../../../README.md) > [`Sesión 08: Unit Testing en React`](../../Readme.md) > [`Reto 01`](../Readme.md) > Solución

---

## Reto 01: Solución

### `Posts.test.js`

```jsx
import { render, screen } from "@testing-library/react";
import Posts from "./Posts";

describe("Posts component", () => {
  test("renders posts if request succeds", async () => {
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

    render(<Posts />);

    const listItems = await screen.findAllByRole("listitem");
    expect(listItems).not.toHaveLength(0);
  });

  test("renders error message if request fails", async () => {
    const errorMessage = "Request failed";

    window.fetch = jest.fn();
    window.fetch.mockRejectedValueOnce(new Error(errorMessage));

    render(<Posts />);

    const error = await screen.findByText(errorMessage);
    expect(error).toBeInTheDocument;

    const listItems = await screen.queryAllByRole("listitem");
    expect(listItems).toBeNull;
  });
});
```

### `Posts.js`

```jsx
import { useEffect, useState } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((e) => setError(e.message));
  }, []);

  return (
    <ul>
      {error && <p>{error}</p>}
      {!error && posts.map((post) => <li key={post.id}>{post.title}</li>)}
    </ul>
  );
}

export default Posts;
```
