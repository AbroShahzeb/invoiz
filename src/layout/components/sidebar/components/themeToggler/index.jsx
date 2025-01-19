import { useState } from "react";
import iconMoon from "../../../../../assets/icon-moon.svg";
import iconSun from "../../../../../assets/icon-sun.svg";

export const ThemeToggler = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const handleThemeChange = () => {
    const currentTheme = theme;

    if (currentTheme === "light") {
      setTheme("dark");
      document.getElementById("body").classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.getElementById("body").classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button onClick={handleThemeChange}>
      <img
        src={theme === "dark" ? iconSun : iconMoon}
        alt={theme === "dark" ? "Sun Icon" : "Moon Icon"}
      />
    </button>
  );
};
