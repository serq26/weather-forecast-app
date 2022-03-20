import React from "react";
import { useTheme } from "../contexts/ThemeContext";

export default function Header() {
  const { theme, setTheme } = useTheme();

  const handleChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="menu">
              <div className="app-title">
                <h1>Weather Foreacast App</h1>
              </div>
              <div className="app-actions">
                <div className="theme-wrapper">
                  <div className={`text ${theme === "light" ? "":"disabled"}`} id="light-theme-text">
                    Light
                  </div>
                  <div className="theme-switch-wrapper">
                    <label htmlFor="theme-btn">
                      <input type="checkbox" id="theme-btn" onChange={handleChange} value={theme} checked={theme === "dark" ? "checked":""}/>
                      <div className="slider-wrapper">
                        <div className="theme-btn-slider"></div>
                      </div>
                    </label>
                  </div>
                  <div className={`text ${theme === "dark" ? "":"disabled"}`} id="dark-theme-text">
                    Dark
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
