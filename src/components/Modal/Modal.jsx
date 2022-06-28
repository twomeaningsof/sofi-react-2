import { useContext } from "react";
import styled from "styled-components";
import CardContext from "../../context/CardContext";
import Button from "../Button";

const ModalWrapper = styled.div`
  @media screen and (min-width: 320px) {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    display: flex;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.438);
  }
`;

const ModalContentWrapper = styled.div`
  @media screen and (min-width: 320px) {
    width: 80%;
    height: 70vh;
    padding: 20px 30px;
    position: fixed;
    top: 15%;
    display: flex;
    flex-direction: column;
    line-height: 23px;
    background-color: whitesmoke;
    border-width: 2px;
    border-radius: 30px;
    border-style: solid;
    border-color: rgba(236, 128, 40, 0.164);
  }

  @media screen and (min-width: 769px) {
    height: 60vh;
    top: 20%;
    line-height: 32px;
  }

  @media screen and (min-width: 1201px) {
    height: 70vh;
    padding: 30px 50px 25px 50px;
  }

  @media screen and (min-width: 2000px) {
    padding: 60px 70px 45px 60px;
  }
`;

export const ModalContentTitle = styled.div`
  @media screen and (min-width: 320px) {
    font-size: 23px;
  }

  @media screen and (min-width: 769px) {
    font-size: 29px;
  }
`;

export const ModalContentBody = styled.div`
  @media screen and (min-width: 320px) {
    margin-top: 15px;
    font-size: 18px;
  }
  @media screen and (min-width: 769px) {
    padding-right: 30px;
    font-size: 18px;
  }
  @media screen and (min-width: 1201px) {
    padding-right: 30px;
  }
  @media screen and (min-width: 2000px) {
    padding-right: 50px;
  }
`;

export const ModalContentBodyInfo = styled.div`
  @media screen and (min-width: 320px) {
    margin: 10px 0;
  }
  @media screen and (min-width: 769px) {
    margin: 10px 0;
  }
`;

const ModalContentFooter = styled.div`
  @media screen and (min-width: 320px) {
    margin-top: auto;
    display: flex;
    justify-content: center;
  }
`;

const Modal = ({ children }) => {
  const { hidden, handleHidden } = useContext(CardContext);

  if (hidden) {
    return null;
  }

  return (
    <ModalWrapper>
      <ModalContentWrapper>
        {children}
        <ModalContentFooter>
          <Button variant="modal" onClick={handleHidden}>
            <p>CLOSE</p>
          </Button>
        </ModalContentFooter>
      </ModalContentWrapper>
    </ModalWrapper>
  );
};

export default Modal;
