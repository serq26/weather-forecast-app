import React from "react";
import { useBackground } from "../contexts/BackgroundContext";
import { useTheme } from "../contexts/ThemeContext";
import Dropdown from "./Dropdown";
import Header from "./Header";
import Weather from "./Weather";

export default function Container() {
  const { background } = useBackground();
  const { theme } = useTheme();
  return (
    <div
      className={`app ${theme === 'dark' ? theme : ''}`}
      data-theme={theme}
      style={{ backgroundImage: `url(../images/${background}.jpg)`,backgroundRepeat: "no-repeat",backgroundSize:"cover" }}
    >
      <Header />
      <Dropdown />
      <Weather />
    </div>
  );
}
