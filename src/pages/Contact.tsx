import { Header } from "../components/Header/Header";
import styles from "./styles/Contact.module.scss";

export function Contact() {
  return (
    <section className={styles.contact}>
      <Header />
      <div className={styles.contactContent}>
        <h1 className={styles.contactTitle}>Let’s work together</h1>

        <p className={styles.contactText}>
          I am a dedicated and responsible professional who is always learning.
          <br />
          <span className={styles.highlight}>Shall we work together?</span>
        </p>

        <div className={styles.contactInfo}>
          <p className={styles.contactLabel}>Contact:</p>

          <a href="mailto:caroliineedemoraes@gmail.com">Email</a>

          <a
            href="https://www.linkedin.com/in/carolinemmoraes/"
            target="_blank"
          >
            LinkedIn
          </a>

          <a href="https://github.com/carolinedemoraes" target="_blank">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
