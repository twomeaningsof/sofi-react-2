import Button from "../Button";
import "./Error.scss";

const Error = ({ error, handleReload }) => (
  <div className="error-wrapper">
    <div className="error-message-wrapper">
      <b>Error:</b> {error}{" "}
    </div>
    <Button variant="retry" onClick={handleReload}>
      RETRY
    </Button>
  </div>
);

export default Error;
