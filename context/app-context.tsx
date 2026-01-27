"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, translations } from "@/lib/translations";

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
  t: typeof translations.en;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLanguage =
      (localStorage.getItem("language") as Language) || "en";
    const savedTheme =
      (localStorage.getItem("theme") as "light" | "dark") || "dark";
    setLanguage(savedLanguage);
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("language", language);
    }
  }, [language, mounted]);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("theme", theme);
      document.documentElement.classList.toggle("dark", theme === "dark");
    }
  }, [theme, mounted]);

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        theme,
        setTheme,
        t: translations[language],
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within AppProvider");
  }
  return context;
}
