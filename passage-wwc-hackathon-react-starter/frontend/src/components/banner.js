import { Link } from "react-router-dom";
import styles from '../styles/Banner.module.css';
import LogoutButton from "./LogoutButton";

function Banner() {
    return ( 
        <div className={styles.mainHeader}>
            <Link to={'/'}><div className={styles.passageLogo}></div></Link>
            <div className={styles.headerText}>Hackathon Project</div>
            <div className={styles.spacer}></div>
            <Link to={'/profile'}>Profile</Link>
            <Link to={'/login'}>Login</Link>
            <Link to={'/pet-lost-and-found'}>test</Link>
            <LogoutButton/>
        </div>
    );
}
export default Banner;
