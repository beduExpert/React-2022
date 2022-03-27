[`React`](../../../README.md) > [`Sesión 04: Fragments, Portals y Refs`](../../Readme.md) > [`Reto 02`](../Readme.md) > Solución

---

## Reto 01: Solución

### `Modal.js`

```jsx
import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";
import styles from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => (
  <Card className={styles.modal}>
    <header className={styles.header}>
      <h2>{props.title}</h2>
    </header>
    <div className={styles.content}>
      <p>{props.message}</p>
    </div>
    <footer className={styles.actions}>
      <Button onClick={props.onConfirm}>Aceptar</Button>
    </footer>
  </Card>
);

function Modal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
}

export default Modal;
```
