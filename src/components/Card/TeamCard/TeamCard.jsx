import { useContext } from "react";
import CardContext from "../../../context/CardContext";
import Button from "../../Button";
import TeamModal from "../../Modal/TeamModal";
import mapIndexed from "../../../utils/mapIndexed";

const TeamCard = ({ playersList, name, score, description }) => {
  const { handleHidden } = useContext(CardContext);

  return (
    <>
      <header className="card__title">{name}</header>
      <ul className="card__info">
        {mapIndexed(
          (player, index) => (
            <li key={index}>{player}</li>
          ),
          playersList
        )}
      </ul>
      <Button variant="card" onClick={handleHidden}>
        MORE
      </Button>
      <TeamModal
        playersList={playersList}
        name={name}
        score={score}
        description={description}
      />
    </>
  );
};

export default TeamCard;
