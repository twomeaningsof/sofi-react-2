import styled, { css } from "styled-components";
import { cond, always, equals } from "ramda";
import { device } from "../../constants/device";

const Button = styled.button`
  width: 140px;
  height: 40px;
  border-radius: 20px;
  border-width: 2px;
  border-style: solid;
  border-color: rgba(231, 142, 69, 0.281);
  background-color: rgba(231, 142, 69, 0.445);
  font-size: 14px;
  letter-spacing: 3px;
  transition: all 180ms ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.04) perspective(10px);
  }

  ${({ variant }) =>
    cond([
      [
        equals("card"),
        always(css`
          margin-top: 8px;
          align-self: center;
          flex-shrink: 0;
        `),
      ],
      [
        equals("modal"),
        always(css`
          display: flex;
          justify-content: center;
          align-items: center;
        `),
      ],
      [
        equals("float"),
        always(css`
          width: 55px;
          height: 55px;
          position: fixed;
          right: 20px;
          bottom: 20px;
          border-radius: 55px;
          background-color: #ffffff77;

          @media screen and ${device.tablet} {
            display: none;
          }
        `),
      ],
      [
        equals("retry"),
        always(css`
          width: 110px;
          height: 40px;
          margin-top: 8px;
          align-self: center;
          flex-shrink: 0;
          border-color: rgb(238, 57, 57);
          background-color: rgb(250, 68, 68);
        `),
      ],
    ])(variant)}
`;

export default Button;
