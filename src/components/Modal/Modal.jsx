import "./Modal.scss";
import Button from "../Button";

const Modal = ({
  isModalHidden,
  closeModal,
  name,
  score,
  position,
  description,
  variant,
  playersList,
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
            {variant === "player" ? (
              <>
                <p>Score: {score}</p>
                <p>Position: {position}</p>
              </>
            ) : null}
            {variant === "team" ? (
              <>
                <p>Score: {score}</p>
                <ul>
                  {playersList.map((player) => (
                    <li>{player}</li>
                  ))}
                </ul>
              </>
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
