import React from "react";
import styles from './Store.module.css';

const Store = () => {
    return (
        <div name="Store" className={styles.store}>
            <h2 className={styles.title}>Lo último en la moda</h2>
            <div className={styles.containerImages}>
                <ul>
                    <li>
                        <img className={styles.img} src={require("../img/img3.jpg")} />
                    </li>
                    <li>
                        <img className={styles.img} src={require("../img/img4.jpg")} />
                    </li>
                    <li>
                        <img className={styles.img} src={require("../img/img5.jpg")} />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Store;