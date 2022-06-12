import "./PageTitle.scss";

const PageTitle = ({ children }) => (
  <h1 className="title-wrapper">
    <span className="title-content">{children}</span>
  </h1>
);

export default PageTitle;
