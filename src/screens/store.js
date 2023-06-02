import React from "react";
import styles from './Store.module.css';

const Store = () => {
    return (
        <div name="Store" className={styles.store}>
            <h2 className={styles.title}>Tienda</h2>
            <img className={styles.img} src={require("../img/img1.png")} />
        </div>
    );
}

export default Store;