"use client";

import { ThemeProvider } from "@/provider/ThemeProvider";
import QueryProvider from "@/provider/QueryProvider";
import { Navbar } from "./_components/ui/Navbar";
import { useTheme } from "@/provider/ThemeProvider";

// Wrapper component to use hooks
const LayoutWithTheme = ({ children }: { children: React.ReactNode }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>{children}</main>
    </>
  );
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <QueryProvider>
      <ThemeProvider>
        <LayoutWithTheme>{children}</LayoutWithTheme>
      </ThemeProvider>
    </QueryProvider>
  );
}
