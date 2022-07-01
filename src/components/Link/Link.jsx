import styled from "styled-components";
import { device } from "../../constants/device";

const LinkStyled = styled.a`
  @media screen and ${device.mobile} {
    position: relative;
    margin: 10px;
    font-size: 16px;
    text-decoration: none;
    color: rgba(245, 245, 245, 0.719);

    ::before {
      content: "";
      width: 100%;
      height: 1px;
      position: absolute;
      bottom: -4px;
      left: 0;
      transform-origin: right;
      transform: scaleX(0);
      transition: transform 0.3s ease-in-out;
      border-radius: 4px;
      background-color: rgba(245, 245, 245, 0.445);
    }

    :hover::before {
      transform-origin: left;
      transform: scaleX(1);
    }
  }

  @media screen and ${device.laptopM} {
    font-size: 26px;
  }

  @media screen and ${device.desktop} {
    font-size: 29px;
  }
`;

const Link = ({ children }) => <LinkStyled href="#">{children}</LinkStyled>;

export default Link;
