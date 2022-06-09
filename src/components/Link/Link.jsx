import "./Link.scss";

const Link = ({ children }) => {
  return (
    <li>
      <a href="#link1" className="footer__link">
        {children}
      </a>
    </li>
  );
};

export default Link;
