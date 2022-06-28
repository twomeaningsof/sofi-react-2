import { useContext } from "react";
import { CardTitle, CardUnorderedListInfo } from "../Card.jsx";
import CardContext from "../../../context/CardContext";
import Button from "../../Button";
import TeamModal from "../../Modal/TeamModal";
import mapIndexed from "../../../utils/mapIndexed";

const TeamCard = ({ playersList, name, score, description }) => {
  const { handleHidden } = useContext(CardContext);

  return (
    <>
      <CardTitle>{name}</CardTitle>
      <CardUnorderedListInfo>
        {mapIndexed(
          (player, index) => (
            <li key={index}>{player}</li>
          ),
          playersList
        )}
      </CardUnorderedListInfo>
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
