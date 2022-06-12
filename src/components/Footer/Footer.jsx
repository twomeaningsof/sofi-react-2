import "./Footer.scss";

const Footer = ({ children }) => <footer className="footer">{children}</footer>;

export default Footer;

export const FooterColumn = ({ children }) => (
  <div className="footer__column">
    <ul className="footer__links-wrapper">{children}</ul>
  </div>
);

export const FooterSeparator = () => <div className="footer__separator"></div>;
