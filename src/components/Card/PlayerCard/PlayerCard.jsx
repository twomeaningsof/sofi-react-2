import { useContext } from "react";
import CardContext from "../../../context/CardContext";
import PlayerModal from "../../Modal/PlayerModal";
import Button from "../../Button";

const PlayerCard = ({ name, score, position, description }) => {
  const { handleHidden } = useContext(CardContext);

  return (
    <>
      <header className="card__title">{name}</header>
      <p className="card__info">Score: {score}</p>
      <p className="card__info">Position: {position}</p>
      <p className="card__description">{description}</p>
      <Button variant="card" onClick={handleHidden}>
        MORE
      </Button>
      <PlayerModal
        name={name}
        score={score}
        position={position}
        description={description}
      />
    </>
  );
};

export default PlayerCard;
