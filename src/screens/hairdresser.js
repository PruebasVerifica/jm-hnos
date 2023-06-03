import React from "react";
import styles from './Hairdresser.module.css';

const Hairdresser = () => {
    return (
        <div name="Hairdresser" className={styles.hairdresser}>
            <h2 className={styles.title}>Peluquería</h2>
            <div>
                <img className={styles.img} src={require("../img/img1.jpg")} />
                <p >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."</p>
            </div>
        </div>
    );
}

export default Hairdresser;