import React, { useContext } from "react";
import MainContext from "../../context ";
import {
  StyledFilledRound,
  StyledEmptyRound,
  StyledCardNumber,
  StyledCardholderName,
  StyledExpireDate,
  StyledFrontImg,
  StyledFrontCardWrapper,
} from "./StyledFrontCard";
import frontCard from "../../assets/images/bg-card-front.png";

const FrontCard = () => {
  const { cardholderName, cardNumber, expireMonth, expireYear } =
    useContext(MainContext);
  return (
    <StyledFrontCardWrapper>
      <StyledFrontImg alt="front" src={frontCard} />
      <StyledFilledRound></StyledFilledRound>
      <StyledEmptyRound></StyledEmptyRound>
      <StyledCardNumber>{cardNumber}</StyledCardNumber>
      <StyledCardholderName>{cardholderName}</StyledCardholderName>
      <StyledExpireDate>
        {expireMonth}/{expireYear}
      </StyledExpireDate>
    </StyledFrontCardWrapper>
  );
};

export default FrontCard;
