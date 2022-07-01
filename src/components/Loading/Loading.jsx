import { always } from "ramda";
import styled from "styled-components";
import { Spinner } from "@chakra-ui/react";

const SpinnerStyled = styled(Spinner)`
  width: 30px;
  height: 30px;
  margin-left: 15px;
  position: relative;
  top: 11px;
  left: 0;
  color: #d86144;
`;

const Loading = always(
  <div>
    Loading <SpinnerStyled />
  </div>
);

export default Loading;
