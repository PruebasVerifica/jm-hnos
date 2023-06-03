import React from "react";
import styles from './Home.module.css';
import { Link } from "react-scroll/modules";

const Home = () => {
    return (
        <div name="Home" className={styles.home}> 
            <div className={styles.titleContainer}>
                <p>Bienvenido a Galería JM&HNOS</p>
            </div>
            <div className={styles.contactContainer}>
                <Link
                to="Contact"
                smooth
                duration={500}
                className={styles.callToAction}>Reserve su próxima visita</Link>
            </div>
        </div>
    );
}

export default Home;