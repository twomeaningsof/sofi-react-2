import Modal from "..";

const PlayerModal = ({ name, score, position, description }) => (
  <Modal>
    <div className="modal-content__title">{name}</div>
    <div className="modal-content__body">
      <div className="modal-content__body-info">
        <p>Score: {score}</p>
        <p>Position: {position}</p>
      </div>
      <p>{description}</p>
    </div>
  </Modal>
);

export default PlayerModal;
