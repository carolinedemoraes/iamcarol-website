import { FaCss3Alt, FaFigma, FaHtml5, FaJs, FaReact, FaSass } from "react-icons/fa";

import styles from "./Tech.module.scss";

export function Tech() {
    return (
        <div className={styles.techWrapper}>
            <FaCss3Alt className={styles.techIcon} />
            <FaHtml5 className={styles.techIcon} />
            <FaJs className={styles.techIcon} />
            <FaReact className={styles.techIcon} />
            <FaFigma className={styles.techIcon} />
            <FaSass className={styles.techIcon} />
        </div>
    );
}
