import Card from "../UI/Card/Card";
import styles from "./Home.module.css";

function Home() {
  return (
    <Card className={styles.home}>
      <h1>¡Bienvenido!</h1>
    </Card>
  );
}

export default Home;
