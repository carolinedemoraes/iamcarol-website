import { useEffect } from "react";
import { useTheme } from "../useTheme";
import { Header } from "../Header/Header";
import { Outlet } from "react-router-dom";

export function Layout() {
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

      <main className="layout-content">
        <Outlet />
      </main>
    </>
  );
}
