import styled from "styled-components";
import { Field, Form } from "formik";

export const StyledFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledFieldWrapperExpireDate = styled.div`
  display: flex;
`;

export const StyledLabel = styled.label`
  letter-spacing: 0.1rem;
  font-size: 14px;
  margin: 0px 0px 10px 0px;
`;

export const StyledField = styled(Field)`
  width: 500px;
  font-size: 18px;
  padding: 10px;
  border: 1px solid hsl(270, 3%, 87%);
  border-radius: 8px;
  color: black;
  outline: none;
  ::placeholder {
    color: hsl(270, 3%, 87%);
  }
`;

export const StyledFieldDate = styled(Field)`
  width: 100px;
  font-size: 18px;
  padding: 10px;
  border: 1px solid hsl(270, 3%, 87%);
  border-radius: 8px;
  color: black;
  outline: none;
  ::placeholder {
    color: hsl(270, 3%, 87%);
  }
`;

export const StyledForm = styled(Form)`
  //padding: 0px 0px 200px 0px;
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledErrorWrapper = styled.div`
  color: #f33c46;
  font-size: 13px;
  margin: 3px 0px 20px 0px;
`;

export const StyledButton = styled.button`
  width: 100%;
  font-size: 18px;
  padding: 10px;
  background-color: hsl(278, 68%, 11%);
  color: white;
  border: 1px solid hsl(278, 68%, 11%);
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  letter-spacing: 3px;
`;

export const StyledFieldDateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 10px 0px 0px;
`

export const StyledFieldDateWrapperTwo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 20px 0px 0px;
`
