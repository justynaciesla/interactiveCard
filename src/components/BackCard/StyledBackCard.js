import styled from "styled-components";
import { mainTheme } from "../../globalStyles/themes/mainTheme";

export const StyledBackImg = styled.img`
  //width: 100%;
  @media ${mainTheme.devices.mobile} {
  
  max-width: 80vw;

}
`;

export const StyledBackCardWrapper = styled.div`
  position: relative;
  left: 100px;
  top: 50px;
  order:2;
  @media ${mainTheme.devices.mobile} {
  
    order:1

  }
`;

export const StyledCVC = styled.div`
  position: absolute;
  bottom: 120px;
  right: 80px;
  color: white;
  font-size: 18px;
  letter-spacing: 5px;
`;
