import styled from "styled-components";
import {mainTheme} from "../../globalStyles/themes/mainTheme"

export const StyledFilledRound = styled.div`
  position: absolute;
  top: 30px;
  left: 20px;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: hsl(270, 3%, 87%);
`;

export const StyledEmptyRound = styled.div`
  position: absolute;
  top: 40px;
  left: 70px;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: 2px solid hsl(270, 3%, 87%);
`;

export const StyledCardNumber = styled.div`
  position: absolute;
  bottom: 80px;
  left: 30px;
  color: hsl(270, 3%, 87%);
  font-size: 30px;
  letter-spacing: 5px;
`;

export const StyledCardholderName = styled.div`
  position: absolute;
  bottom: 40px;
  left: 25px;
  color: hsl(270, 3%, 87%);
  font-size: 15px;
  letter-spacing: 3px;
`;

export const StyledExpireDate = styled.div`
  position: absolute;
  bottom: 40px;
  right: 60px;
  color: hsl(270, 3%, 87%);
  font-size: 15px;
  letter-spacing: 3px;
`;

export const StyledFrontImg = styled.img`
@media ${mainTheme.devices.mobile} {
    max-width: 80vw;
  }
`;

export const StyledFrontCardWrapper = styled.div`
  position: relative;
  order:1; 
  @media ${mainTheme.devices.mobile} {
    max-width: 80vw;
    order:2
  }
`;
