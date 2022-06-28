import styled from "styled-components";

const FooterLink = styled.a`
  @media screen and (min-width: 320px) {
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

  @media screen and (min-width: 1201px) {
    font-size: 26px;
  }

  @media screen and (min-width: 2000px) {
    font-size: 29px;
  }
`;

const Link = ({ children }) => (
  <li>
    <FooterLink href="#">{children}</FooterLink>
  </li>
);

export default Link;
