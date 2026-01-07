import { ReactNode, useEffect } from "react";
import { useTheme } from "../useTheme";
import { Header } from "../Header/Header";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { theme } = useTheme();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <Header />
      <main className="layout-content">{children}</main>
    </>
  );
}
