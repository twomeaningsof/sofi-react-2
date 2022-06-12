import { addIndex, map } from "ramda";
import "./Modal.scss";
import Button from "../Button";

const Modal = ({
  isModalHidden,
  closeModal,
  name,
  score,
  position,
  playersList,
  description,
  variant,
}) => {
  if (isModalHidden) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-content__title">{name}</div>
        <div className="modal-content__body">
          <div className="modal-content__body-info">
            <p> Score: {score}</p>
            {variant === "player" ? <p>Position: {position}</p> : null}
            {variant === "team" ? (
              <ul>
                {addIndex(map)(
                  (player, index) => (
                    <li key={index}>{player}</li>
                  ),
                  playersList
                )}
              </ul>
            ) : null}
          </div>
          <p>{description}</p>
        </div>
        <div className="modal-content__footer">
          <Button variant="modal" onClick={closeModal}>
            <p>CLOSE</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
