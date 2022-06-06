import "./MainNavbar.scss";

const MainNavbar = ({ children, ...props }) => {
  return (
    <>
      <nav className="navigation-wrapper">
        <ul className="navigation">{children}</ul>
      </nav>
    </>
  );
};

export default MainNavbar;

export const HamburgerMenu = () => {
  return (
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
};

export const NavigationLink = ({ children, ...props }) => {
  return (
    <li>
      <a href="#home" className="navigation__link">
        {children}
      </a>
    </li>
  );
};
