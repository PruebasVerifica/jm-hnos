import React from "react";
import styles from './Hairdresser.module.css';

const Hairdresser = () => {
    return (
        <div name="Hairdresser"  className={styles.hairdresser}>
            <h2 className={styles.title}>Peluquería</h2>
            <img className={styles.img} src={require("../img/img1.png")}/>
        </div>
    );
}

export default Hairdresser;