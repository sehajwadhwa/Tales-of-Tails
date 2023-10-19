import { PassageProfile } from "@passageidentity/passage-react";
import styles from "../styles/PassageStyling.css";

function Profile() {
  return (
    <div>
      <PassageProfile className={styles.PassageProfile}/>
    </div>
  );
}

export default Profile;
