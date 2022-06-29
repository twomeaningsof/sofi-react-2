import styled from "styled-components";
import { device } from "../../constants/device";

const Warning = styled.figure`
  @media screen and ${device.mobile} {
    display: none;
  }
`;

export default Warning;
