import Image from "next/image";
import Socials from "@/src/components/Socials/Socials";
import Avatar from "@/src/components/Avatar/Avatar";
import Profile from "@/src/components/Profile/Profile";
import Circles1 from "@/public/svgs/circles-1.svg";
import Circles2 from "@/public/svgs/circles-2.svg";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
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
        <div className={styles.contentWrapper}>
          <Socials />
          <Avatar rootClass={styles.avatarRoot} />
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Home;
