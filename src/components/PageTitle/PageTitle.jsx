import styled from "styled-components";
import { device } from "../../constants/device";

const TitleWrapper = styled.h1`
  @media screen and ${device.mobile} {
    width: 70%;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 35px;
    font-weight: 300;
    letter-spacing: 10px;
    line-height: 1.5em;
    color: rgb(253, 253, 253);
    background-color: #e76f51;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
  }
  @media screen and ${device.tablet} {
    width: 100%;
    height: 70%;
    font-size: 60px;
  }
  @media screen and ${device.laptopM} {
    font-size: 65px;
  }
  @media screen and ${device.desktop} {
    font-size: 90px;
    letter-spacing: 30px;
  }
`;

const TitleContent = styled.span`
  @media screen and ${device.mobile} {
    margin: 0 50px;
  }
`;

const PageTitle = ({ children }) => (
  <TitleWrapper>
    <TitleContent>{children}</TitleContent>
  </TitleWrapper>
);

export default PageTitle;
