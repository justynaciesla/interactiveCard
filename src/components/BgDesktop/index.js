import React from "react";
import BgDesktop from "../../assets/images/bg-main-desktop.png";
import BackCard from "../BackCard";
import FrontCard from "../FrontCard";
import { StyledWrapper, StyledImg, StyledCardWrapper } from './StyledBgDesktop';

const BackgroundDesktop = () => {
  return (
    <StyledWrapper>
      <StyledImg alt="background" src={BgDesktop}/>
      <StyledCardWrapper>
        <FrontCard />
        <BackCard />
      </StyledCardWrapper>
    </StyledWrapper>
  );
};

export default BackgroundDesktop;
