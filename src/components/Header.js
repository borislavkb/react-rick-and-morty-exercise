import "./Header.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="Top">
      <img src="#" alt="Logo" />

      <nav className="top_nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/characters">Characters </NavLink>
      </nav>
    </header>
  );
}
