import styles from "./Header.module.scss";
import { useTheme } from "../useTheme";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className={styles.header}>
      <button
        onClick={toggleTheme}
        className={styles.themeToggle}
        aria-label="Toggle theme"
      >
        {theme === "dark" ? "🌞" : "🌙"}
      </button>
    </header>
  );
}
