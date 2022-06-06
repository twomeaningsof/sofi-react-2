import "./FooterLink.scss";

const FooterLink = ({ children }) => {
  return (
    <li>
      <a href="#link1" className="footer__link">
        {children}
      </a>
    </li>
  );
};

export default FooterLink;
