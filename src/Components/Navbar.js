import React, { useEffect, useState } from "react";
import { Link } from 'react-scroll';
import styles from './Navbar.module.css';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useScrollPosition } from "../Hook/scrollPosition";

const Navbar = () => {
    const [navBarOpen, setNavBarOpen] = useState(false);
    const [windowDimension, setwindowDimension] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const ditectDimension = () => {
        setwindowDimension({
            width: window.innerWidth,
            height: window.innerHeight,
        })
    }

    useEffect(() => {
        window.addEventListener('resize', ditectDimension)
        windowDimension.width > 800 && setNavBarOpen(false)
        return () => {
            window.removeEventListener('resize', ditectDimension)
        }
    }, [windowDimension])
    const links = [
        {
            id: 1,
            link: "Home",
        },
        {
            id: 2,
            link: "Hairdresser",
        },
        {
            id: 3,
            link: "Cosmetics",
        },
        {
            id: 4,
            link: "Store",
        },
        {
            id: 5,
            link: "Contact",
        },
    ];

    //const scrollPosition = useScrollPosition();

    return (
        <div className={!navBarOpen ? styles.navBar : styles.navOpen}>
            {!navBarOpen && <p className={styles.logo}>JM&Hermanos</p>}
            {!navBarOpen && windowDimension.width < 800 ? (<AiOutlineMenu onClick={() => setNavBarOpen(!navBarOpen)} color="#f1f1f1" size={25} />) :
                (windowDimension.width < 800 && (<AiOutlineClose onClick={() => setNavBarOpen(!navBarOpen)} color="#f1f1f1" size={25} />))}
            {navBarOpen && (
                <ul className={styles.linksContainer}>
                    {links.map((x) => (
                        <div>
                            <Link
                                onClick={() => setNavBarOpen(false)}
                                to={x.link}
                                smooth
                                duration={500}
                                className={styles.navLink}>
                                {
                                    x.link === "Home" ? "Inicio" : x.link
                                        && x.link === "Hairdresser" ? "Peluquería" : x.link
                                            && x.link === "Cosmeticts" ? "Cosmética" : x.link
                                                && x.link === "Store" ? "Tienda" : x.link
                                                    && x.link === "Contact" ? "Contacto" : x.link}
                            </Link>
                            <div className={styles.border}></div>
                        </div>
                    ))}
                </ul>
            )}
            {windowDimension.width > 800 && 
            <ul className={styles.linksContainer}>
                {links.map((x) => (
                    <div>
                        <Link
                            onClick={() => setNavBarOpen(false)}
                            to={x.link}
                            smooth
                            duration={500}
                            className={styles.navLink}>
                            {
                                x.link === "Home" ? "Inicio" : x.link
                                    && x.link === "Hairdresser" ? "Peluquería" : x.link
                                        && x.link === "Cosmeticts" ? "Cosmética" : x.link
                                            && x.link === "Store" ? "Tienda" : x.link
                                                && x.link === "Contact" ? "Contacto" : x.link}
                        </Link>
                        <div className={styles.border}></div>
                    </div>
                ))}
            </ul>}
        </div>
    );
}

export default Navbar;