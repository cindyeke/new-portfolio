import Image from "next/image";
import GitHubIcon from "@/public/svgs/github.svg";
import MailIcon from "@/public/svgs/mail.svg";
import LinkedInIcon from "@/public/svgs/linkedin.svg";
import styles from "./Socials.module.css";

const Socials = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <Image src={GitHubIcon} className={styles.icon} alt="github" priority />
        <Image src={MailIcon} className={styles.icon} alt="mail" priority />
        <Image
          src={LinkedInIcon}
          className={styles.icon}
          alt="linkedin"
          priority
        />
      </div>
    </div>
  );
};

export default Socials;
