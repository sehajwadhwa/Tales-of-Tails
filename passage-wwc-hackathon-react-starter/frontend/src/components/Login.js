import "@passageidentity/passage-elements/passage-login";
import styles from "../styles/Login.module.css";

export function Login() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.loginContainer}>
        <passage-auth
          app-id={process.env.REACT_APP_PASSAGE_APP_ID}
        ></passage-auth>
      </div>
    </div>
  );
}
