import StatusText from "./components/StatusText";
import Subtitle from "./components/Subtitle";
import Title from "./components/Title";
import styles from "./App.module.css";

export default function App() {
  const status = true;

  return (
    <div className={styles.app}>
      <Title />
      <Subtitle />
      <StatusText />
      <p>{true && "text"}</p> {/* operadores de curto circuito também funcionam*/}
    </div>
  )
}