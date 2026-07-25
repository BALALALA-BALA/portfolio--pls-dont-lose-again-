import { Link, NavLink } from "react-router-dom";
import "../../css/component/navbar.css";

function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive ? "active" : "";

  return (
    <nav className="header__nav">
      <div className="header__logo">
        <Link to="/">
          <h4>Name</h4>
        </Link>
      </div>

      <ul className="header__menu" id="nav">
        <li>
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
        </li>

        <li>
          <NavLink to="/portfolio" className={linkClass}>
            Portfolio
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

