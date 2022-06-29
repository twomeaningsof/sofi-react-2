import { useState } from "react";
import { ifElse, always } from "ramda";
import styled from "styled-components";
import CardContext from "../../context/CardContext";

const CardWrapper = styled.article`
  @media screen and (min-width: 320px) {
    height: 400px;
    margin-bottom: 80px;
    flex-basis: 100%;
    display: flex;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  }

  @media screen and (min-width: 769px) {
    flex-basis: 30%;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 1201px) {
    flex-direction: row-reverse;
    flex-wrap: nowrap;
  }

  @media screen and (min-width: 2000px) {
    flex-direction: row-reverse;
    flex-wrap: nowrap;
  }
`;

const CardImage = styled.div`
  @media screen and (min-width: 320px) {
    width: 25%;
    height: 100%;
    border-radius: 7px 0 0 7px;
    background-color: rgba(244, 162, 97, 0.75);
  }

  @media screen and (min-width: 769px) {
    width: 100%;
    height: 25%;
    border-radius: 7px 7px 0 0;
  }

  @media screen and (min-width: 1201px) {
    width: 25%;
    height: 100%;
    border-radius: 0 7px 7px 0;
  }
`;

const CardContent = styled.div`
  @media screen and (min-width: 320px) {
    width: 75%;
    padding: 20px 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 0 7px 7px 0;
    background-color: rgba(255, 255, 255, 0.92);
  }

  @media screen and (min-width: 769px) {
    width: 100%;
    height: 75%;
    border-radius: 0 0 7px 7px;
  }

  @media screen and (min-width: 1201px) {
    width: 75%;
    height: 100%;
    border-radius: 7px 0 0 7px;
  }
`;

export const CardTitle = styled.header`
  @media screen and (min-width: 320px) {
    margin-bottom: 10px;
    font-size: 25px;
    font-weight: 500;
    letter-spacing: 1px;
  }

  @media screen and (min-width: 1201px) {
    font-size: 29px;
  }

  @media screen and (min-width: 2000px) {
    font-size: 38px;
  }
`;

export const CardParagraphInfo = styled.p`
  @media screen and (min-width: 320px) {
    margin: 5px 0;
    min-height: 20px;
    overflow: hidden;
  }

  @media screen and (min-width: 1201px) {
    font-size: 18px;
  }
`;

export const CardUnorderedListInfo = styled(CardParagraphInfo)`
  padding-left: 18px;
`;

export const CardDescription = styled.p`
  @media screen and (min-width: 320px) {
    margin: 17px 0;
    font-size: 17px;
    font-weight: 300;
    line-height: 24px;
    text-align: justify;
    overflow: hidden;
  }

  @media screen and (min-width: 1201px) {
    font-size: 20px;
  }

  @media screen and (min-width: 2000px) {
    font-size: 25px;
    line-height: 40px;
  }
`;

const Card = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const handleHidden = ifElse(
    always(hidden === true),
    () => setHidden(false),
    () => setHidden(true)
  );

  return (
    <CardWrapper>
      <CardImage />
      <CardContent>
        <CardContext.Provider value={{ hidden, handleHidden }}>
          {children}
        </CardContext.Provider>
      </CardContent>
    </CardWrapper>
  );
};

export default Card;
