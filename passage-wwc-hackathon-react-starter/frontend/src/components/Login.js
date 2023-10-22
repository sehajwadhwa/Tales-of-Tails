import "@passageidentity/passage-elements/passage-login";
import styles from "../styles/Login.module.css";
import { PassageAuth } from "@passageidentity/passage-react";
import { Link } from "react-router-dom";

export function Login() {
  const onSuccess = () => {
    window.location.href = "/";
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.loginContainer}>
        <PassageAuth onSuccess={onSuccess}></PassageAuth>
      </div>
    </div>
  );
}
