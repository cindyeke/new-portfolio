import Title from "@/src/components/Title/Title";
import Button from "@/src/components/Button/Button";
import { PROFILE_TITLE } from "@/src/constants";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.root}>
      <Title label={PROFILE_TITLE} />
      <div className={styles.description}>
        <span>I am a software engineer based in Lagos, Nigeria.</span>
        <span>
          I build mobile, web and desktop applications and currently, I am
          focused on taking my frontend skills to the next level.
        </span>
      </div>
      <div className={styles.btnsWrapper}>
        <Button label="my resume" buttonClass={styles.resumeBtn} />
        <Button label="view projects" buttonClass={styles.projectsBtn} />
      </div>
    </div>
  );
};

export default Profile;
