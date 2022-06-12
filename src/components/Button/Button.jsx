import "./Button.scss";

const Button = ({ children, variant, ...props }) => (
  <button className={`button button--${variant}`} {...props}>
    {children}
  </button>
);

export default Button;
