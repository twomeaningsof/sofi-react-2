import Modal from "..";
import {
  ModalContentTitle,
  ModalContentBody,
  ModalContentBodyInfo,
} from "../Modal.jsx";
import mapIndexed from "../../../utils/mapIndexed";

const TeamModal = ({ playersList, name, score, description }) => (
  <Modal>
    <ModalContentTitle>{name}</ModalContentTitle>
    <ModalContentBody>
      <ModalContentBodyInfo>
        <p>Score: {score}</p>
        <ul style={{ paddingLeft: 18 }}>
          {mapIndexed(
            (player, index) => (
              <li key={index} style={{ marginTop: 6 }}>
                {player}
              </li>
            ),
            playersList
          )}
        </ul>
      </ModalContentBodyInfo>
      <p>{description}</p>
    </ModalContentBody>
  </Modal>
);

export default TeamModal;
