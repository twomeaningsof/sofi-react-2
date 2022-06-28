import { useContext } from "react";
import { CardTitle, CardParagraphInfo, CardDescription } from "../Card.jsx";
import CardContext from "../../../context/CardContext";
import PlayerModal from "../../Modal/PlayerModal";
import Button from "../../Button";

const PlayerCard = ({ name, score, position, description }) => {
  const { handleHidden } = useContext(CardContext);

  return (
    <>
      <CardTitle>{name}</CardTitle>
      <CardParagraphInfo>Score: {score}</CardParagraphInfo>
      <CardParagraphInfo>Position: {position}</CardParagraphInfo>
      <CardDescription>{description}</CardDescription>
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
