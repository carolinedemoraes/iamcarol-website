import { Link } from "react-router-dom";
import styles from "./MainPage.module.scss";
import { Header } from "../Header/Header";

export function MainPage() {
  return (
    <div className={styles.main}>
      <Header />

      <div className={styles.content}>
        <h1 className={styles.intro}>Hi,</h1>
        <h1 className={styles.name}>
          I am <span className="highlight">Carol!</span>
        </h1>
        <p className={styles.role}>Front-end Developer & UX Design Student</p>
        {/* <p>I built this from zer0!</p>*/}
      </div>

      <div className={styles.footer}>
        <Link to="/about" aria-label="About me page" rel="noopener noreferrer">
          About Me
        </Link>
        <Link
          to="/projects"
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
