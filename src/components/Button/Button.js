import styles from "./Button.module.css";

const Button = ({ label, buttonClass }) => {
  return <button className={`${styles.btn} ${buttonClass}`}>{label}</button>;
};

export default Button;
