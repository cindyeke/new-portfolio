import Image from "next/image";
import AvatarImg from "@/public/images/girl.png";
import styles from "./Avatar.module.css";

const Avatar = ({ rootClass }) => {
  return (
    <div className={`${styles.root} ${rootClass}`}>
      <div className={styles.imgWrapper}>
        <Image src={AvatarImg} alt="avatar" className={styles.img} />
      </div>
    </div>
  );
};

export default Avatar;
