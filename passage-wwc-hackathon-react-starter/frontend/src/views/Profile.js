import { PassageProfile } from "@passageidentity/passage-react";
import styles from "../styles/PassageStyling.css";
import LogoutButton from "../components/LogoutButton";

function Profile() {
  return (
    <div className="profile">
      <PassageProfile className={styles.PassageProfile} />
      <LogoutButton />
    </div>
  );
}

export default Profile;
