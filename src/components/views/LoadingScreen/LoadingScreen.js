import Image from "next/image";
import Circles1 from "@/public/images/circles-1.svg";
import Circles2 from "@/public/images/circles-2.svg";
import styles from './LoadingScreen.module.css'

const LoadingScreen = () => {
  return (
    <div className={styles.root}>
      <Image src={Circles1} className={`${styles.circle} ${styles.topCircle}`} alt="circles" priority />
      <Image src={Circles2} className={`${styles.circle} ${styles.bottomCircle}`} alt="circles" priority />
      <div className={styles.content}>
        <span>CE</span>
        <span className={styles.footer}>Designed and developed by Cindy</span>
      </div>
    </div>
  );
};

export default LoadingScreen;
