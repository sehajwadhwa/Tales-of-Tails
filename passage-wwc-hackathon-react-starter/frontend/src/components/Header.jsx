import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";
import LogoutButton from "./LogoutButton";
import React, { useEffect } from "react";
import axios from "axios";
import { Passage } from "@passageidentity/passage-js";
import { usePassageUserInfo } from "../actions";

function Header() {
  const { loading, userInfo } = usePassageUserInfo();
  return (
    <div className={styles.mainHeader}>
      <Link to={"/"}>
        <div className={styles.Logo}></div>
      </Link>
      {/* <div className={styles.headerText}>Hackathon Project</div> */}
      <div className={styles.content}>
        <Link to={"/lost-and-found"}>Lost & Found</Link>
        <Link to={"/adopt"}>Adopt</Link>
        <Link to={"/shelter-screen"}>Shelters</Link>
      </div>
      {userInfo && !loading ? (
        <Link to={"/profile"}>
          {" "}
          <button>Profile</button>
        </Link>
      ) : (
        <Link to={"/login"}>
          {" "}
          <button>Associate Login</button>
        </Link>
      )}
    </div>
  );
}
export default Header;
