import styled from "styled-components";
import Button from "../Button";

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ErrorMessageWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const Error = ({ error, handleReload }) => (
  <ErrorWrapper>
    <ErrorMessageWrapper>
      <b>Error:</b> {error}{" "}
    </ErrorMessageWrapper>
    <Button variant="retry" onClick={handleReload}>
      RETRY
    </Button>
  </ErrorWrapper>
);

export default Error;
