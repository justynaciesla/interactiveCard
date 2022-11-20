import React, { useContext } from "react";
import MainContext from "../../context ";
import {
  StyledBackCardWrapper,
  StyledBackImg,
  StyledCVC,
} from "./StyledBackCard";
import backCard from "../../assets/images/bg-card-back.png";

const BackCard = () => {
  const { cvc } = useContext(MainContext);
  return (
    <StyledBackCardWrapper>
      <StyledBackImg alt="front" src={backCard} />
      <StyledCVC>{cvc}</StyledCVC>
    </StyledBackCardWrapper>
  );
};

export default BackCard;
