import styles from "./Button.module.css";

function Button(props) {
  const color = props.color ? styles[props.color] : styles.primary;
  return (
    <button
      type={props.type || "button"}
      className={`${styles.button} ${color}`}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
