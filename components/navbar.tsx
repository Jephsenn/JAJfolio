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
                    <Link href="/#Home">
                        <div className={styles.nav_link}>
                            <FontAwesomeIcon className={styles.fai} icon={faHouse}/>
                            Home
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/#About">
                        <div className={styles.nav_link}>
                            <FontAwesomeIcon className={styles.fai} icon={faUser}/>
                            About
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/#Services">
                        <div className={styles.nav_link}>
                            <FontAwesomeIcon className={styles.fai} icon={faBriefcase}/>
                            Services
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/#Experience">
                        <div className={styles.nav_link}>
                            <FontAwesomeIcon className={styles.fai} icon={faGraduationCap}/>
                            Experience
                        </div>
                    </Link>
                    
                </li>
                <li>
                    <Link href="/#Portfolio">
                        <div className={styles.nav_link}>
                            <FontAwesomeIcon className={styles.fai} icon={faLayerGroup}/>
                            Portfolio
                        </div>
                    </Link>         
                </li>
                <li>
                    <Link href="/#Contact">
                        <div className={styles.nav_link}>
                            <FontAwesomeIcon className={styles.fai} icon={faComments}/>
                            Contact
                        </div>
                    </Link>                  
                </li>
            </ul>
            <div className={styles.footer}>
                &copy; 2021 <br/>John A Josephsen
            </div>
        </div>
    )
}