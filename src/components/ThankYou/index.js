import React, { useContext } from "react";
import MainContext from "../../context ";
import ConfirmIcon from "../../assets/images/icon-complete.svg";
import {
  StyledThankYou,
  StyledParagraph,
  StyledButton,
  StyledImg,
  StyledWrapper,
} from "./StyledThankYou";

const ThankYou = () => {
  const {
    setShowThankYou,
    setCardholderName,
    setCardNumber,
    setExpireMonth,
    setExpireYear,
    setCvc,
  } = useContext(MainContext);
  return (
    <StyledWrapper>
      <StyledImg src={ConfirmIcon} alt="confirm" />

      <StyledThankYou>THANK YOU!</StyledThankYou>
      <StyledParagraph style={{ fontSize: "15px", color: "hsl(279, 6%, 55%)" }}>
        We've added your card details
      </StyledParagraph>
      <StyledButton
        onClick={() => {
          setShowThankYou(false);
          setCardholderName("JANE APPLESEED");
          setCardNumber("0000 0000 0000 0000");
          setExpireMonth("00");
          setExpireYear("00");
          setCvc("000");
        }}
      >
        Continue
      </StyledButton>
    </StyledWrapper>
  );
};

export default ThankYou;
