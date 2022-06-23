import { useContext } from "react";
import CardContext from "../../context/CardContext";
import Button from "../Button";
import "./Modal.scss";

const Modal = ({ children }) => {
  const { hidden, handleHidden } = useContext(CardContext);

  if (hidden) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        {children}
        <div className="modal-content__footer">
          <Button variant="modal" onClick={handleHidden}>
            <p>CLOSE</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
