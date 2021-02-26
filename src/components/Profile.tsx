import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengeContext";
import styles from "../styles/components/Profile.module.css";

const Profile = () => {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/emanuel71jo.png" alt="João Emanuel" />
      <div>
        <strong>João Emanuel</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
};
export default Profile;
