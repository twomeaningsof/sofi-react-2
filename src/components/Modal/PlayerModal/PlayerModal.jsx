import Modal from "..";
import { ModalContentBodyInfo } from "../Modal.jsx";

const PlayerModal = ({ name, score, position, description }) => (
  <Modal name={name}>
    <ModalContentBodyInfo>
      <p>Score: {score}</p>
      <p>Position: {position}</p>
    </ModalContentBodyInfo>
    <p>{description}</p>
  </Modal>
);

export default PlayerModal;
