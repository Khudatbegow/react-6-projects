import React, { useState } from "react";
import Button from "./components/Button/Button.jsx";
import styles from "./App.module.css";

const App = () => {
  const [counter, setCounter] = useState(0);
  const decrement = () => setCounter(counter - 1);
  const increment = () => setCounter(counter + 1);

  return (
    <div className={styles.app}>
      <div className={styles.counterHeader}>
        <h2 className={styles.counterTitle}>Счетчик:</h2>
        <output className={styles.counterOutput}>{counter}</output>
      </div>
      <div className={styles.counterFooter}>
        <Button variant="minus" type="button" onClick={decrement}>
          - Минус
        </Button>
        <Button variant="plus" type="button" onClick={increment}>
          Плюс +
        </Button>
      </div>
    </div>
  );
};

export default App;
