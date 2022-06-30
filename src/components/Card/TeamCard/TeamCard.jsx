import { useContext } from "react";
import styled from "styled-components";
import { CardTitle, CardUnorderedListInfo } from "../Card.jsx";
import CardContext from "../../../context/CardContext";
import Button from "../../Button";
import TeamModal from "../../Modal/TeamModal";
import mapIndexed from "../../../utils/mapIndexed";

const CardListElement = styled.li`
  margin-top: 6px;
`;

const TeamCard = ({ playersList, name, score, description }) => {
  const { handleHidden } = useContext(CardContext);
  return (
    <>
      <CardTitle>{name}</CardTitle>
      <CardUnorderedListInfo as="ul">
        {playersList
          |> mapIndexed((player, index) => (
            <CardListElement key={index + player}>{player}</CardListElement>
          ))}
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
