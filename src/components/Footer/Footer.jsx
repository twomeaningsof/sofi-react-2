import styled from "styled-components";

const Footer = styled.footer`
  @media screen and (min-width: 320px) {
    width: 100%;
    padding: 20px;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    background-color: #264653;
  }

  @media screen and (min-width: 769px) {
    flex-direction: row;
    align-items: center;
  }
`;

export default Footer;

const FooterColumnWrapper = styled.div`
  @media screen and (min-width: 320px) {
    width: 100%;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const FooterLinksWrapper = styled.ul`
  @media screen and (min-width: 320px) {
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    list-style: none;
  }
`;

export const FooterColumn = ({ children }) => (
  <FooterColumnWrapper>
    <FooterLinksWrapper>{children}</FooterLinksWrapper>
  </FooterColumnWrapper>
);

export const FooterSeparator = styled.div`
  @media screen and (min-width: 320px) {
    display: none;
    width: 1px;
    height: 65%;
    border-right: 1px solid;
    border-color: rgba(245, 245, 245, 0.445);
  }

  @media screen and (min-width: 769px) {
    width: 1px;
    height: 130px;
    display: inline-block;
  }
`;
