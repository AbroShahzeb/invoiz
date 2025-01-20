import { useEffect, useState } from "react";
import iconMoon from "../../../../../assets/icon-moon.svg";
import iconSun from "../../../../../assets/icon-sun.svg";

export const ThemeToggler = () => {
const [isToggled, setToggle] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (isToggled) {
      localStorage.setItem("theme", "dark");
      document.getElementById("body").classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.getElementById("body").classList.remove("dark");
    }
  }, [isToggled]);

  return (
    <button onClick={() => setToggle((prev) => !prev)}>
      <img
        src={isToggled ? iconSun : iconMoon}
        alt={isToggled ? "Sun Icon" : "Moon Icon"}
      />
    </button>
  );
};
