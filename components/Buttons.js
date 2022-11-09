import styles from "../styles/Topics.module.css";

const Buttons = () => {
  return (
    <div>
      <div className={styles.buttons}>
        <button className={styles.button_one}>Saved lists</button>
        <button className={styles.button_two}>Workspaces</button>
        <button className={styles.button_three}>Custom Domains</button>
        <button className={styles.button_four}>Export Options</button>
        <button className={styles.button_five}>Report Sharing</button>
      </div>
    </div>
  );
};

export default Buttons;
