import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./SocialMedia.module.scss";

export function SocialMedia() {
    return (
        <div className={styles.media}>
            <a
                href="https://www.linkedin.com/in/carolinemmoraes/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
            >
                <FaLinkedin className={styles.icon} />
            </a>
            <a
                href="https://github.com/carolinedemoraes"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
            >
                <FaGithub className={styles.icon} />
            </a>
        </div>
    );
}
