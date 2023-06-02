import React from "react";
import styles from './Cosmetics.module.css';

const Cosmetics = () => {
    return (
        <div name="Cosmetics" className={styles.cosmetics}>
            <h2 className={styles.title}>Cosmética</h2>
            <img className={styles.img} src={require("../img/img1.png")}/>
        </div>
    );
}

export default Cosmetics;