import styled from "styled-components";
import Modal from "..";
import { ModalContentBodyInfo } from "../Modal.jsx";
import mapIndexed from "../../../utils/mapIndexed";

const ModalContentBodyUnorderedList = styled.ul`
  padding-left: 18px;
`;

const ModalContentBodyListElement = styled.li`
  margin-top: 6px;
`;

const TeamModal = ({ playersList, name, score, description }) => (
  <Modal name={name}>
    <ModalContentBodyInfo>
      <p>Score: {score}</p>
      <ModalContentBodyUnorderedList>
        {playersList
          |> mapIndexed((player, index) => (
            <ModalContentBodyListElement key={player + index}>
              {player}
            </ModalContentBodyListElement>
          ))}
      </ModalContentBodyUnorderedList>
    </ModalContentBodyInfo>
    <p>{description}</p>
  </Modal>
);

export default TeamModal;
