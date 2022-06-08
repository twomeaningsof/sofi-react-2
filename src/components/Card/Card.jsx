import "./Card.scss";

const Card = ({firstName, lastName, description }) => {
  return (
    <article className="card">
      <div className="card__image"></div>
      <div className="card__content">
        <header className="card__title">{`${firstName} ${lastName}`}</header>
        <p className="card__text">{description}</p>
        <button className="button button--card">MORE</button>
      </div>
    </article>
  );
};

export default Card;
