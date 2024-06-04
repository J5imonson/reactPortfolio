import { NavLink } from "react-router-dom"
import './Header.css'

function Header() {

  return (
    <header>
      <h1 className="my-name">Joel Simonson</h1>
      <nav className="links">
        <NavLink className="a" to="/" style={({ isActive }) => {
          return isActive ? { color: "white" } : {};
        }}>About Me</NavLink>

        <NavLink className="a" to="/Contact" style={({ isActive }) => {
          return isActive ? { color: "white" } : {};
        }}>Contact</NavLink>

        <NavLink className="a" to="/Portfolio" style={({ isActive }) => {
          return isActive ? { color: "white" } : {};
        }} >Portfolio</NavLink>

        <NavLink className="a" to="/Resume" style={({ isActive }) => {
          return isActive ? { color: "white" } : {};
        }}>Resume</NavLink>
      </nav>
    </header>
  );
}

export default Header