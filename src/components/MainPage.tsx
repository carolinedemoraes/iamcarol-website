import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./MainPage.module.scss";
import { SocialMedia } from "./SocialMedia";
import { Tech } from "./Tech";

export function MainPage() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.body.classList.toggle("dark", darkMode);
    }, [darkMode]);

    return (
        <>
            <div className={styles.main}>
                <div className={styles.header}>
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className={styles.themeToggle}
                        aria-label="Toggle theme"
                    >
                        {darkMode ? "🌞" : "🌙"}
                    </button>
                    <Tech />
                    <SocialMedia />
                </div>

                <div className={styles.content}>
                    <h1 className={styles.intro}>Hi,</h1>
                    <h1 className={styles.name}>I am Carol!</h1>
                    <p className={styles.role}>Front-end Developer & UX Design Student</p>
                </div>

                <div className={styles.footer}>
                    <div className={styles.footerLeft}>
                        <Link to="/about" aria-label="About me page">About Me</Link><br />
                        <Link to="/projects" aria-label="Projects page">Projects</Link>
                    </div>
                    <div className={styles.footerRight}>
                        <Link to="/contact" aria-label="Contact page">Let's Work <br /> Together</Link>
                    </div>
                </div>
            </div>

        </>
    );
}
