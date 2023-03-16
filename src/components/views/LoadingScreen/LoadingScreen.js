import Image from "next/image";
import Circles1 from "@/public/images/circles-1.svg";
import Circles2 from "@/public/images/circles-2.svg";
import styles from "./LoadingScreen.module.css";
import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [displayLogo, setDisplayLogo] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 5) {
      const interval = setInterval(() => {
        setDisplayLogo((prevState) => !prevState);
        setCount((prevCount) => prevCount + 1);
      }, 1200);
      return () => clearInterval(interval);
    }
  }, [count]);

  return (
    <div className={styles.root}>
      <Image
        src={Circles1}
        className={`${styles.circle} ${styles.topCircle}`}
        alt="circles"
        priority
      />
      <Image
        src={Circles2}
        className={`${styles.circle} ${styles.bottomCircle}`}
        alt="circles"
        priority
      />
      <div className={styles.content}>
        <div
          className={`${styles.categoryWrapper} ${
            displayLogo && styles.animate
          }`}
        >
          <button>
            <span>
              <span>
                <span data-attr-span="See the Range">C E</span>
              </span>
            </span>
          </button>
        </div>
        <span className={styles.footer}>Designed and developed by Cindy</span>
      </div>
    </div>
  );
};

export default LoadingScreen;
