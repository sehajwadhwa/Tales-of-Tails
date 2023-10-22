import { Link} from "react-router-dom";
import styles from "../styles/Header.module.css";
import LogoutButton from "./LogoutButton";
import React from "react";
import axios from "axios";

function Header({ user, setUser }) {


  return (
    <div className={styles.mainHeader}>
      <Link to={"/"}>
        <div className={styles.Logo}></div>
      </Link>
      {/* <div className={styles.headerText}>Hackathon Project</div> */}
      <div className={styles.content}>
        <Link to={"/lostandfound"}>Lost & Found</Link>
        <Link to={"/adopt"}>Adopt</Link>
        <Link to={"/shelter"}>Shelters</Link>
        <Link to={"/faq"}>FAQ</Link>
        <Link to={"/pet-lost-and-found"}>l&f</Link>
        {/* <LogoutButton /> */}
      </div>

      <ul>
        {
          // checking if the user is set
          user ? (
            <div>
              <p className="navbar">Welcome , {user.displayName} </p>
              <button>
              <LogoutButton />
              </button>
            </div>
          ) : (
            <div className="navbar">
              <Link to={"/login"}>
                {" "}
                <button>Associate Login</button>
              </Link>
            </div>
          )
        }
      </ul>

      {/* <Link to={"/login"}> <button>Associate Login</button></Link> */}
    </div>
  );
}
export default Header;
