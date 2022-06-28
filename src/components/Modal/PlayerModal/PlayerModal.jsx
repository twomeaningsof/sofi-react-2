import Modal from "..";
import {
  ModalContentTitle,
  ModalContentBody,
  ModalContentBodyInfo,
} from "../Modal.jsx";

const PlayerModal = ({ name, score, position, description }) => (
  <Modal>
    <ModalContentTitle>{name}</ModalContentTitle>
    <ModalContentBody>
      <ModalContentBodyInfo>
        <p>Score: {score}</p>
        <p>Position: {position}</p>
      </ModalContentBodyInfo>
      <p>{description}</p>
    </ModalContentBody>
  </Modal>
);

export default PlayerModal;
