import styled from "styled-components";

const TitleWrapper = styled.h1`
  @media screen and (min-width: 320px) {
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
  @media screen and (min-width: 769px) {
    width: 100%;
    height: 70%;
    font-size: 60px;
  }
  @media screen and (min-width: 1201px) {
    font-size: 65px;
  }
  @media screen and (min-width: 2000px) {
    font-size: 90px;
    letter-spacing: 30px;
  }
`;

const TitleContent = styled.span`
  @media screen and (min-width: 320px) {
    margin: 0 50px;
  }
`;

const PageTitle = ({ children }) => (
  <TitleWrapper>
    <TitleContent>{children}</TitleContent>
  </TitleWrapper>
);

export default PageTitle;
