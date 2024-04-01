import styles from "./styles.module.scss";
import { ExampleTypes } from "./types";

const Example = ({ title }: ExampleTypes) => {
  return (
    <div className={styles.example}>
      <h1>{title}</h1>
    </div>
  );
};

export default Example;
