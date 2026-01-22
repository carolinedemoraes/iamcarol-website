import { Header } from "../components/Header/Header";
import styles from "./styles/About.module.scss";

export function About() {
  return (
    <section className={styles.aboutSection}>
      <Header />
      <div className={styles.profileWrapper}>
        <img
          src="/aboutme.jpg"
          alt="Carol sorrindo em frente a uma parede branca"
          className={styles.profileImage}
        />
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>
          About <span className={styles.highlight}>Me</span>
        </h1>

        <p>
          Hi! I’m <span className={styles.highlight}>Carol</span> — a Front-End
          Developer with a background in{" "}
          <span className={styles.highlight}>History</span>. That path taught me
          to observe carefully, think critically, and collaborate with others.
        </p>

        <p>
          I discovered the world of{" "}
          <span className={styles.highlight}>technology</span> during the
          pandemic, and it was love at first line of code. Since then, I’ve been
          diving into <span className={styles.highlight}>HTML</span>,{" "}
          <span className={styles.highlight}>CSS</span>,{" "}
          <span className={styles.highlight}>JavaScript</span>, and{" "}
          <span className={styles.highlight}>React</span>.
        </p>

        <p>
          I’m also passionate about{" "}
          <span className={styles.highlight}>design</span>—exploring{" "}
          <span className={styles.highlight}>Figma</span> helped me understand
          how UX/UI and development work together to create meaningful digital
          experiences.
        </p>

        <p>
          I currently live in <span className={styles.highlight}>Portugal</span>{" "}
          🇵🇹 and I’m looking for my{" "}
          <span className={styles.highlight}>first opportunity</span> in the
          field. I’d love to connect and collaborate on something creative!
        </p>
      </div>
    </section>
  );
}
