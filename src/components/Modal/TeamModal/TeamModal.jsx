import Modal from "..";
import mapIndexed from "../../../utils/mapIndexed";

const TeamModal = ({ playersList, name, score, description }) => (
  <Modal>
    <div className="modal-content__title">{name}</div>
    <div className="modal-content__body">
      <div className="modal-content__body-info">
        <p>Score: {score}</p>
        <ul>
          {mapIndexed(
            (player, index) => (
              <li key={index}>{player}</li>
            ),
            playersList
          )}
        </ul>
      </div>
      <p>{description}</p>
    </div>
  </Modal>
);

export default TeamModal;
