import { Link } from "react-router-dom";
import styles from "./MainPage.module.scss";
import { SocialMedia } from "./SocialMedia";
import { Tech } from "./Tech";
import { useTheme } from "./useTheme";

export function MainPage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`${styles.main} ${theme}`}>
      <div className={styles.leftGroup}>
        <button
          onClick={toggleTheme}
          className={styles.themeToggle}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? "🌞" : "🌙"}
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
        <Link
          to="#"
          aria-label="About me page"
          title="Coming Soon"
          rel="noopener noreferrer"
        >
          About Me
        </Link>
        <Link
          to="#"
          aria-label="Projects page"
          title="Coming Soon"
          rel="noopener noreferrer"
        >
          Projects
        </Link>
        <Link to="/contact" aria-label="Contact page" rel="noopener noreferrer">
          Let's Work Together
        </Link>
      </div>
    </div>
  );
}
