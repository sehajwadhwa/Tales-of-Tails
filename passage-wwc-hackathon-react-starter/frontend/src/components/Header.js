import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";
import LogoutButton from "./LogoutButton";

function Header() {
  return (
    <div className={styles.mainHeader}>
      <Link to={"/"}>
        <div className={styles.passageLogo}></div>
      </Link>
      <div className={styles.headerText}>Hackathon Project</div>
      <div className={styles.spacer}></div>
      <Link to={"/profile"}>Profile</Link>
      <Link to={"/login"}>Login</Link>
      <Link to={"/register"}>Register</Link>
      <Link to={"/test"}>Test</Link>
      <LogoutButton />
    </div>
  );
}
export default Header;
