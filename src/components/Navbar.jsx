

import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle"; // Component for toggling themes (dark/light mode)
import { User, BriefcaseBusiness, GraduationCap, AtSign } from "lucide-react"; // Using lucide-react library for icons


function Navbar() {
  return (
    <nav className="navbar">
      <ThemeToggle /> {/* Rendering ThemeToggle component (slider-switch) for dark/light mode switching */}
      <ul>
        <li className="nav-item">
          <Link to="/" className="nav-link">
          <User className="nav-icon" />
          <p>About</p>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/experience" className="nav-link">
          <GraduationCap className="nav-icon" />
          <p>Exp.</p>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/projects" className="nav-link">
          <BriefcaseBusiness className="nav-icon" />
          <p>Proj.</p>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/contact" className="nav-link">
          <AtSign className="nav-icon" />
          <p>Contact</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}


export default Navbar;