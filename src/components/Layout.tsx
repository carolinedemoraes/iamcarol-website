import { ReactNode } from "react";
import { useTheme } from "./useTheme";

export function Layout({ children }: { children: ReactNode }) {
    useTheme();
    return <>{children}</>;
}
