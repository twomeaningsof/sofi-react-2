import "./Card.scss";

const Card = ({ children }) => {
  return (
    <article className="card">
      <div className="card__image"></div>
      <div className="card__content">
        <header className="card__title">Title placeholder</header>
        <p className="card__text">{children}</p>
        <button className="button button--card">DETAILS</button>
      </div>
    </article>
  );
};

export default Card;
