import styled from "styled-components";
import { device } from "../../constants/device";

const SidePanelStyles = styled.aside`
  @media screen and ${device.mobile} {
    width: 25px;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    visibility: visible;
    position: fixed;
    right: 0;
    top: 0;
    transform: translateY(42%);
    transition: 0.6s;
    background-color: #264653;
    border-radius: 7px 0 0 7px;
    overflow-x: hidden;
  }

  @media screen and ${device.tablet} {
    visibility: visible;
    left: 0;
    border-radius: 0 7px 7px 0;
  }
`;

const SidePanel = ({ children, ...props }) => (
  <SidePanelStyles id="side-panel" {...props}>
    {children}
  </SidePanelStyles>
);

export default SidePanel;
