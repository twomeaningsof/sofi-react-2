import { useState } from "react";
import { addIndex, map } from "ramda";
import "./Card.scss";
import Modal from "../Modal";
import Button from "../Button";

const Card = ({ name, score, position, playersList, description, variant }) => {
  const [isModalHidden, setIsModalHidden] = useState(true);
  const handleIsModalHidden = () => {
    return isModalHidden === true
      ? setIsModalHidden(false)
      : setIsModalHidden(true);
  };

  return (
    <article className="card">
      <div className="card__image"></div>
      <div className="card__content">
        <header className="card__title">{name}</header>
        {variant === "player" ? (
          <>
            <p className="card__info">Score: {score}</p>
            <p className="card__info">Position: {position}</p>
            <p className="card__description">{description}</p>
          </>
        ) : null}
        {variant === "team" ? (
          <ul className="card__info">
            {addIndex(map)(
              (player, index) => (
                <li key={index}>{player}</li>
              ),
              playersList
            )}
          </ul>
        ) : null}
        <Button variant="card" onClick={handleIsModalHidden}>
          MORE
        </Button>
        {variant === "player" ? (
          <Modal
            isModalHidden={isModalHidden}
            closeModal={handleIsModalHidden}
            name={name}
            score={score}
            position={position}
            description={description}
            variant="player"
          ></Modal>
        ) : null}
        {variant === "team" ? (
          <Modal
            isModalHidden={isModalHidden}
            closeModal={handleIsModalHidden}
            name={name}
            score={score}
            playersList={playersList}
            description={description}
            variant="team"
          ></Modal>
        ) : null}
      </div>
    </article>
  );
};

export default Card;
