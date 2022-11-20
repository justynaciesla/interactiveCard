import styled from "styled-components";
import { mainTheme } from "../../globalStyles/themes/mainTheme";


export const StyledMainWrapper = styled.div`
  display: flex;
  width: 100vw; 
  height: 100vh;
  @media ${mainTheme.devices.mobile} {
  flex-direction: column


}
`;