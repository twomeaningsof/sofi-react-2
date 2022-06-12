import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = ({ children }) => (
  <>
    <nav className="navigation-wrapper">
      <ul className="navigation">{children}</ul>
    </nav>
  </>
);

export default Navbar;

export const HamburgerMenu = () => (
  <>
    <input
      type="checkbox"
      className="hamburger-menu__fake-checkbox"
      id="fake-checkbox"
    />
    <div className="hamburger-menu" id="hamburger-menu">
      <div className="hamburger-menu__stripe-wrapper">
        <span className="hamburger-menu__stripe"></span>
        <span className="hamburger-menu__stripe"></span>
        <span className="hamburger-menu__stripe"></span>
      </div>
    </div>
  </>
);

export const NavigationLink = ({ children, path }) => (
  <li>
    <Link to={path} className="navigation__link">
      {children}
    </Link>
  </li>
);
