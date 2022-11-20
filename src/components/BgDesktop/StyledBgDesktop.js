import styled from "styled-components";
import { mainTheme } from "../../globalStyles/themes/mainTheme";


export const StyledWrapper = styled.div`
  position: relative;
`;

export const StyledImg = styled.img`
  @media ${mainTheme.devices.mobile} {
    width: 100vw;
    height: 30vh; 
  }
`

export const StyledCardWrapper = styled.div`
display: flex;
flex-direction: column; 
position: relative;
 left: 100px; 
 bottom: 800px;
 @media ${mainTheme.devices.mobile} {
    top: 0px;
    width: 80vw;
    position: absolute;
    left:0px
  }


`