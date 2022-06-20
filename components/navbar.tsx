import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faBriefcase, faGraduationCap, faLayerGroup, faComments } from '@fortawesome/free-solid-svg-icons'

type Props = {
    page: string;
  };

export default function Navbar(props: Props){
    return (
        <div className={styles.main_nav}>
            <div className={styles.logo}>JAJ</div>
            <ul className={styles.nav_container}>
                <li>
                    <FontAwesomeIcon className={styles.fai} icon={faHouse}/>
                    Home 
                </li>
                <li>
                    <FontAwesomeIcon className={styles.fai} icon={faUser}/>
                    About
                </li>
                <li>
                    <FontAwesomeIcon className={styles.fai} icon={faBriefcase}/>
                    Service
                </li>
                <li>
                    <FontAwesomeIcon className={styles.fai} icon={faGraduationCap}/>
                    Experience
                </li>
                <li>
                    <FontAwesomeIcon className={styles.fai} icon={faLayerGroup}/>
                    Portfolio
                </li>
                <li>
                    <FontAwesomeIcon className={styles.fai} icon={faComments}/>
                    Contact
                </li>
            </ul>
            <div className={styles.footer}>
                &copy; 2021 <br/>John A Josephsen
            </div>
        </div>
    )
}