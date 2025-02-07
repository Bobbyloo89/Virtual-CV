

import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/themeSlice"; // Action to toggle the theme (dark/Light mode)
import { Sun, Moon } from "lucide-react"; // Using lucide-react library for icons


// ThemeToggle component for switching between darkmode / lightmode
function ThemeToggle() {
  const darkMode = useSelector((state) => state.theme.darkMode); // Retrieve current darkMode state from store
  const dispatch = useDispatch(); // Dispatch function from useDispatch to dispatch actions to store

  return (
    <article className="switch-container" onClick={() => dispatch(toggleTheme())}> {/* Container for slider-switch, toggle on click */}
      <article className={`switch ${darkMode ? "on" : "off"}`}> {/* Slider-switch, dynamic class based on darkMode state */}
        <article className={`switch-slider ${darkMode ? "on" : "off"}`}> {/* Slider, dynamic class based on darkMode state */}
        {darkMode ? <Moon /> : <Sun />} {/* Render Moon icon for dark mode or Sun icon for light mode */}
        </article>
      </article>
    </article>
  );
}


export default ThemeToggle;