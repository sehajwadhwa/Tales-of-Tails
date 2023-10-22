import "@passageidentity/passage-elements/passage-login";
import styles from "../styles/Login.module.css";
import {  PassageAuth} from "@passageidentity/passage-react";

export function Login() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.loginContainer}>
        <PassageAuth></PassageAuth>
      </div>
    </div>
  );
}
