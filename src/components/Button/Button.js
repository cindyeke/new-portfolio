import styles from "./Button.module.css";

const Button = ({ label, buttonClass, children, download }) => {
  return (
    <button className={`${styles.btn} ${buttonClass}`} onClick={download}>
      <span>{label}</span>
      <span>{children}</span>
    </button>
  );
};

export default Button;
