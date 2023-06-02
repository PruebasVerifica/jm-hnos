import React from "react";
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <div name="Contact" className={styles.contact}>
            <h2 className={styles.title}>Contacto</h2>
            <form className={styles.form} method="post" action="">
                <label></label>
                <input className={styles.input} placeholder="Nombre"></input>
                <label></label>
                <input className={styles.input} placeholder="Email"></input>
                <label></label>
                <textarea className={styles.textArea} placeholder="Mensaje"></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Contact;