import styled from "styled-components";
import Modal from "..";
import {
  ModalContentTitle,
  ModalContentBody,
  ModalContentBodyInfo,
} from "../Modal.jsx";
import mapIndexed from "../../../utils/mapIndexed";

const ModalContentBodyUnorderedList = styled.ul`
  padding-left: 18px;
`;

const ModalContentBodyListElement = styled.li`
  margin-top: 6px;
`;

const TeamModal = ({ playersList, name, score, description }) => (
  <Modal>
    <ModalContentTitle>{name}</ModalContentTitle>
    <ModalContentBody>
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
    </ModalContentBody>
  </Modal>
);

export default TeamModal;
