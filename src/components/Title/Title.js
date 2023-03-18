import styles from "./Title.module.css";

const Title = ({ label }) => {
  return (
    <div className={styles.root}>
      <span className={styles.regular}>{label.regular}</span>
      <span className={styles.bold}>{label.bold}</span>
      <hr className={styles.line} />
    </div>
  );
};

export default Title;
